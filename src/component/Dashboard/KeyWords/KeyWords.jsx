import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React, { useEffect, useState } from "react";
import { keywordService } from "../../service/keyWordsService";
import AlphabetKeyWord from "../DashboaedComponents/AlphabetKeyWord/AlphabetKeyWord";
import SearchBox from "../DashboaedComponents/SearchBox/SearchBox";
import Table from "../DashboaedComponents/TableData/TableData";
import KeyWordsSearch from "../DashboaedComponents/KeyWordsSearch/KeyWordsSearch";
import { keywordsStoreService } from "../../service/keywordStoreService";
import PopUp from "../../Utils/PopUp/PopUp";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const KeyWords = ({ onClickHandler }) => {

  const {canRequest}=useSelector(state=>state.loadingState)
   // searchBox Value
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const [SavePopup, showSavePopup] = useState(false);
  const [keyWords, setKeyWords] = useState([]); //1
  const [seperator,setSeperator]=useState(false)
  const [id,setId]=useState("");
  const SearchBoxChangeHandler = (e) => {
    setSearchBoxValue(e.target.value);
    setSearchBoxHandleClick(false);
  };
  //3
  const loadingState = useSelector(state => state.loadingState)
  const dispatch = useDispatch()
  const handleSetKeyWords = async () => {
      //handle show loadin
      {
        loadingState.ProcessingDelay.push("keywordService");
        loadingState.canRequest = false;
        await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState })
      }
    try {
      const dd={
        "key": searchBoxValue,
        "key2": "",
        "used_by":"google",
        "type":"",
        "characters" : true
      };
      // const { data, status } = await keywordService(searchBoxValue);
      
      const { data, status } = await keywordService(dd);
      setKeyWords(data.data.result);//5
      setId(data.data.id)
      // console.log(data.data.id);
     
    } catch (error) {
      
      // console.log(error)
    }
    //handle hide loading
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(item => item != "keywordService");
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState })
    }
  };
  // store data in myList
  var handleSetStoreKeyWords = async () => {
    try {
     


      const { data, status } = await keywordsStoreService(id);
      showSavePopup(true)
  //  console.log(data);
    } catch (error) {
      // console.log(error);
    }
  };

  // console.log(datass.data);
  // search box click
  const [searchBoxHandleClick, setSearchBoxHandleClick] = useState(false);

  //2
  //filter from searchBox  in table
 
  var tableDataFiltered= [];
  Object.keys(keyWords).map((item) => {
    // console.log(datass.data[item].length);
    if (keyWords[item]!=null) {
         
      for (let i = 0; i < keyWords[item].length - 1; i++) {
        if (keyWords[item][i].includes(searchBoxValue)) {
          tableDataFiltered.push(keyWords[item][i]);
        }
        // return
      }
    }
    
  });

  //  secound search
  const [secoundSearchBoxValue, setSecoundSearchBoxValue] = useState("");
  const secoundSearchBoxChangeHandler = (e) => {
    setSecoundSearchBoxValue(e.target.value);
  };

  //  filter from comboBox
  const [radioClickedHandler, setRadioClickedHandler] = useState("1");
  let comboboxFiltered = [];
  const radioButtonHandler = (e) => {
    setRadioClickedHandler(e.target.value);
  };

  if (radioClickedHandler === "1") {
    comboboxFiltered = tableDataFiltered.filter((item) => {
      return item.includes(searchBoxValue);
    });
  } else if (radioClickedHandler === "2") {
    comboboxFiltered = tableDataFiltered.filter((item) => {
      return item.includes(secoundSearchBoxValue);
    });
  } else if (radioClickedHandler === "3") {
    comboboxFiltered = tableDataFiltered.filter((item) => {
      return item==secoundSearchBoxValue
    });
  } else if (radioClickedHandler === "4") {
    comboboxFiltered = tableDataFiltered.filter((item) => {
      return !item.includes(secoundSearchBoxValue);
    });
  }
  //  Alphabet filtering
  const filteredData = [];
  const [alphabetHandler, setAlphabetHandler] = useState("");
  const handleClick = (e) => {
    setAlphabetHandler(e.target.innerText);
  };
  const tableAlphabetFiltering = comboboxFiltered.filter((item) => {
    return item.startsWith(alphabetHandler);
  });

  //check dom
  return (
    <>
    {SavePopup &&
      <PopUp
      clickHandler={() => showSavePopup(false)}
      image={"/img/popUp/playlist_add.svg"}
      type={"sucsess"}
      buttonText={"باشه، فهمیدم!"}
      text={"لیست جدید شما با موفقیت ذخیره شد !"}
      title={"موفقیت آمیز"}
    />
    }
      <div className="pt-3 flex flex-col justify-center items-center bg-[#ffffff]">
        <SearchBox
          changeHandler={SearchBoxChangeHandler}
          handlClick={() => {
            setSearchBoxHandleClick(true);
            handleSetKeyWords();
          }}
          className="w-[97%] flex items-center gap-2 justify-between"
        />

        <div className="flex flex-col  w-[97%]" >
          {!searchBoxValue || !searchBoxHandleClick ? (
            <span className="text-right mt-4">هیچ کلمه ای جستجو نکردید!</span>
          ) : null}
          <div className="flex  justify-between w-full mt-5">
            <Table
              data={
                tableAlphabetFiltering
                  ? tableAlphabetFiltering
                  : comboboxFiltered
                  ? comboboxFiltered
                  : tableDataFiltered
              }
              NothingSearch={
                !searchBoxValue || !searchBoxHandleClick ? true : false
              }
              iskeyWord={true}
            />
            <div className="flex flex-col items-center w-[334px] mr-7">
              <KeyWordsSearch
                NothingSearch={
                  !searchBoxValue || !searchBoxHandleClick ? true : false
                }
                dataItems={comboboxFiltered}
                secoundSearch={secoundSearchBoxChangeHandler}
                radioClickedHandler={radioButtonHandler}
              />
              <span className="mt-5">جستجو بر اساس حروف الفبا</span>
              <AlphabetKeyWord handleclick={handleClick} />
            </div>
          </div>
        </div>
      </div>
      <button
        className={
          searchBoxValue && searchBoxHandleClick
            ? "btn-style mr-5 my-5 flex gap-3"
            : "bg-[#D3D5E2] btn-style mr-5 my-5 flex gap-3"
        }
        disabled={canRequest?searchBoxHandleClick ? false : true:true}
        onClick={(e) =>{handleSetStoreKeyWords()}}
      >
        <img src="/img/dashboard/keyWord/bookmark.svg" alt="" />
       ذخیره لیست
      </button>
    </>
  );
};
export default KeyWords;
