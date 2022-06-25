import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React, { useEffect, useState } from "react";
import { keywordService } from "../../service/keyWordsService";
import AlphabetKeyWord from "../DashboaedComponents/AlphabetKeyWord/AlphabetKeyWord";
import SearchBox from "../DashboaedComponents/SearchBox/SearchBox";
import Table from "../DashboaedComponents/TableData/TableData";
import KeyWordsSearch from "../DashboaedComponents/KeyWordsSearch/KeyWordsSearch";

 const KeyWords=({onClickHandler})=> {

   // searchBox Value
   const [searchBoxValue, setSearchBoxValue] = useState("");
   const [keyWords,setKeyWords] = useState([]);//1

  const SearchBoxChangeHandler = (e) => {
    setSearchBoxValue(e.target.value);
    setSearchBoxHandleClick(false);
  };     
  

  //3
  const handleSetKeyWords=async()=>{
    try {
      debugger
      const dd={
        "key": `${searchBoxValue}`,
        "key2": "",
        "used_by":"google",
        "type":"",
        "characters" : true
      };
      // const { data, status } = await keywordService(searchBoxValue);
      const { data, status } = await keywordService(dd);
      console.log(data);
    setKeyWords(data.data);//5
    } catch (error) {
      debugger
      console.log(error)
    } 

  }
  
 

  // search box click
  const [searchBoxHandleClick, setSearchBoxHandleClick] = useState(false);

  //2
  //filter from searchBox  in table
  // debugger
  const tableDataFiltered = keyWords.filter((item) => {
    if (searchBoxHandleClick && searchBoxValue)
      return item.includes(searchBoxValue);
  });
  
console.log(tableDataFiltered);

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
      return item.content.includes(searchBoxValue);
    });
  } else if (radioClickedHandler === "2") {
    comboboxFiltered = tableDataFiltered.filter((item) => {
      return item.content.includes(secoundSearchBoxValue);
    });
  } else if (radioClickedHandler === "3") {
    comboboxFiltered = tableDataFiltered.filter((item) => {
      return item.content.includes(searchBoxValue);
    });
  } else if (radioClickedHandler === "4") {
    comboboxFiltered = tableDataFiltered.filter((item) => {
      return !item.content.includes(secoundSearchBoxValue);
    });
  }
  //  Alphabet filtering
  const filteredData = [];
  const [alphabetHandler, setAlphabetHandler] = useState("");
  const handleClick = (e) => {
    setAlphabetHandler(e.target.innerText);
  };
  const tableAlphabetFiltering = comboboxFiltered.filter((item) => {
    return item.content.startsWith(alphabetHandler);
  });

  //check dom
  return (
    <>
      <div className="pt-3 flex flex-col justify-center items-center bg-[#ffffff]">
        <SearchBox
          changeHandler={SearchBoxChangeHandler}
          handlClick={() => {setSearchBoxHandleClick(true);handleSetKeyWords()}}
          className='w-[97%] flex items-center gap-2 justify-between'
        />

        <div className="flex flex-col  w-[97%]">
          {!searchBoxValue || !searchBoxHandleClick ? (
            <span className="text-right mt-4">هیچ کلمه ای جستجو نکردید!</span>
          ) : null}
          <div className="flex  justify-between w-full mt-5">
            <Table
              data={
                keyWords
                // tableAlphabetFiltering
                //   ? tableAlphabetFiltering
                //   : comboboxFiltered
                //   ? comboboxFiltered
                //   : tableDataFiltered
              }
              NothingSearch={
                !searchBoxValue || !searchBoxHandleClick ? true : false
              }
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
              <AlphabetKeyWord handleclick={handleClick} />
            </div>
          </div>
        </div>
      </div>
      <button className={searchBoxValue && searchBoxHandleClick ? "btn-style mr-5 mt-5 flex gap-3" : "bg-[#D3D5E2] btn-style mr-5 mt-5 flex gap-3"} disabled={searchBoxHandleClick ?false :true} onClick={(e)=>onClickHandler()}>
        <img src="./img/dashboard/keyWord/bookmark.svg" alt="" />
       ذخیره لیست
      </button>
    </>
  );
}
export default KeyWords;