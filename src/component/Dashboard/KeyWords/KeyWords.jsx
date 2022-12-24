import React, { useState } from "react";
import { keywordService } from "../../service/keyWordsService";
import AlphabetKeyWord from "../DashboaedComponents/AlphabetKeyWord/AlphabetKeyWord";
import SearchBox from "../DashboaedComponents/SearchBox/SearchBox";
import Table from "../DashboaedComponents/TableData/TableData";
import KeyWordsSearch from "../DashboaedComponents/KeyWordsSearch/KeyWordsSearch";
import { keywordsStoreService } from "../../service/keywordStoreService";
import PopUp from "../../Utils/PopUp/PopUp";
import { useDispatch, useSelector } from "react-redux";
import {
  handleLowOffLimitCount,
  resetLimitState,
} from "../../Redux/Action/workSpace";
import bookmark_svg from "../../../assets/img/dashboard/keyWord/bookmark.svg";
import playlist_add_svg from "../../../assets/img/popUp/playlist_add.svg";
import { useLocation } from "react-router";
import PopUpLimit from "../../Utils/Limit/PopUpLimit";

const KeyWords = ({ onClickHandler }) => {
  const { canRequest } = useSelector((state) => state.loadingState);
  // searchBox Value
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const [SavePopup, showSavePopup] = useState(false);
  const keyWordSearchTexts = ["همه عبارات", "B", "C", "D"];
  const [keyWords, setKeyWords] = useState([]); //1
  const [seperator, setSeperator] = useState(false);

  const [resetRadioText, setResetRadioText] = useState(1);

  const [showPopUpLimit, setShowPopUpLimit] = useState(true);

  const [id, setId] = useState("");
  const SearchBoxChangeHandler = (e) => {
    setSearchBoxValue(e.target.value);
    setSearchBoxHandleClick(false);
  };
  //3
  const loadingState = useSelector((state) => state.loadingState);
  const dispatch = useDispatch();
  const handleSetKeyWords = async () => {
    //handle show loadin
    {
      loadingState.ProcessingDelay.push("keywordService");
      loadingState.canRequest = false;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
    try {
      const dd = {
        key: searchBoxValue,
        key2: "",
        used_by: "google",
        type: "",
        characters: true,
      };
    

      const { data, status } = await keywordService(dd);
      setKeyWords(data.data.result); //5
      setId(data.data.id);
      dispatch(handleLowOffLimitCount("GOOGLE_TITLE_BUILDER", 1));
      dispatch(resetLimitState());

    } catch (error) {
      setShowPopUpLimit(true);
    }
    //handle hide loading
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(
        (item) => item != "keywordService"
      );
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
  };

  // store data in myList
  var handleSetStoreKeyWords = async () => {
    //handle show loadin
    {
      loadingState.ProcessingDelay.push("saveKeyWords");
      loadingState.canRequest = false;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
    try {
      const { data, status } = await keywordsStoreService(id);

      showSavePopup(true);
    } catch (error) {
    }
    //handle hide loading
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(
        (item) => item != "saveKeyWords"
      );
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
  };

  // search box click
  const [searchBoxHandleClick, setSearchBoxHandleClick] = useState(false);

  //2
  //filter from searchBox  in table

  var tableDataFiltered = [];
  var lengthTable = 0;
  Object.keys(keyWords).map((item) => {
    if (keyWords[item] != null) {
      for (let i = 0; i < keyWords[item].length - 1; i++) {
        if (keyWords[item][i].includes(searchBoxValue)) {
          tableDataFiltered.push(keyWords[item][i]);
          lengthTable++
        }
        // return
      }
    }
  });

  //  secound search
  const [secoundSearchBoxValue, setSecoundSearchBoxValue] = useState("");
  const secoundSearchBoxChangeHandler = (e) => {
    setSecoundSearchBoxValue(e.target.value);
    setAlphabetHandler("");

  };

  //  filter from comboBox
  const [radioClickedHandler, setRadioClickedHandler] = useState("1");
  //  filter from alphabet
  const [alphabetHandler, setAlphabetHandler] = useState("");
  let comboboxFiltered = [];
  const radioButtonHandler = (e) => {
    setRadioClickedHandler(e.target.value);
    setAlphabetHandler("");

  };

  if (radioClickedHandler === "1" && searchBoxValue) {
    comboboxFiltered = tableDataFiltered.filter((item) => {
      return item.includes(searchBoxValue);
    });
  } else if (radioClickedHandler === "2" && secoundSearchBoxValue != "") {
    comboboxFiltered = tableDataFiltered.filter((item) => {
      return item.includes(secoundSearchBoxValue);
    });
  } else if (radioClickedHandler === "3" && secoundSearchBoxValue != "") {
    comboboxFiltered = tableDataFiltered.filter((item) => {
      return item == secoundSearchBoxValue;
    });
  } else if (radioClickedHandler === "4" && secoundSearchBoxValue != "") {
    comboboxFiltered = tableDataFiltered.filter((item) => {
      return !item.includes(secoundSearchBoxValue);
    });
  } else {
    comboboxFiltered = tableDataFiltered.filter((item) => {
      return item.includes(searchBoxValue);
    });
  }
  //  Alphabet filtering
  const filteredData = [];

  const handleClick = (e) => {
    setAlphabetHandler(e.target.innerText);
  };
  const tableAlphabetFiltering = comboboxFiltered.filter((item) => {
    return item.slice(searchBoxValue.length + 1).startsWith(alphabetHandler);
  });

  // const history = useHistory()
  const location = useLocation();

  //check dom
  return (
    <>
   
      {SavePopup && (
        <PopUp
          clickHandler={() => showSavePopup(false)}
          image={playlist_add_svg}
          type={"sucsess"}
          buttonText={"باشه، فهمیدم!"}
          text={"لیست جدید شما با موفقیت ذخیره شد !"}
          title={"موفقیت آمیز"}
        />
      )}
      <div className="PopUpMap pt-3 flex flex-col justify-center items-center bg-[#ffffff]">
        <SearchBox
          placeholder={"درج کلمه کلیدی"}
          changeHandler={SearchBoxChangeHandler}
          handlClick={() => {
            setSearchBoxHandleClick(true);
            handleSetKeyWords();

          }}
          resetRadioText={resetRadioText}
          setResetRadioText={setResetRadioText}
          handleClear
          className="w-[97%] flex items-center gap-2 justify-between"
        />

        <div className="flex flex-col  w-[97%]">
          {!searchBoxValue || !searchBoxHandleClick ? (
            <span className="text-right mt-4">هیچ  تحقیقی انجام نشده!</span>
          ) : (
            <span className="text-right mt-4">{lengthTable}کلمه کلیدی یافت شد.</span>
          )}
          <div
            id="keyWordsLayOutId"
            className="flex  justify-between w-full mt-5"
          >
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
              searchBoxValue={searchBoxValue}
              loading={loadingState.ProcessingDelay.includes("keywordService")}
            />
            <div className="flex flex-col items-center w-[334px] mr-7">
              <KeyWordsSearch
                NothingSearch={
                  !searchBoxValue || !searchBoxHandleClick ? true : false
                }
                keywords={true}
                dataItems={comboboxFiltered}
                secoundSearch={secoundSearchBoxChangeHandler}
                radioClickedHandler={radioButtonHandler}
                radioTextItems={keyWordSearchTexts}
                resetRadioText={resetRadioText}
              />
              <span className="mt-5">جستجو بر اساس حروف الفبا</span>
              <AlphabetKeyWord
                tableAlphabetLengh={tableAlphabetFiltering}
                handleclick={handleClick}
                NothingSearch={
                  !searchBoxValue || !searchBoxHandleClick ? true : false
                }
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className={
          searchBoxValue && searchBoxHandleClick
            ? "btn-style mr-5 my-5 flex gap-3"
            : "bg-lightGray btn-style mr-5 my-5 flex gap-3"
        }
        disabled={canRequest ? (searchBoxHandleClick ? false : true) : true}
        onClick={(e) => {
          handleSetStoreKeyWords();
        }}
      >
        <img src={bookmark_svg} alt="" />
        ذخیره
      </button>
      {/* <PopUpLimit section={"keyWords"}/> */}
      {showPopUpLimit ? (
        <PopUpLimit
          section={"contentCreation"}
          handleClose={setShowPopUpLimit}
        />
      ) : null}
    </>
  );
};
export default KeyWords;
