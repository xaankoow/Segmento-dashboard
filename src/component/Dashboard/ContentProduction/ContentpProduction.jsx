import React, { useState } from "react";
import { ContentProductionService } from "../../service/contentProduction";
import SearchBox from "../DashboaedComponents/SearchBox/SearchBox";
import Table from "../DashboaedComponents/TableData/TableData";

export default function ContentpProduction({ onClickHandler }) {
  // searchBox Value
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const SearchBoxChangeHandler = (e) => {
    setSearchBoxValue(e.target.value);
    setSearchBoxHandleClick(false);
  };

  // search box click
  const [searchBoxHandleClick, setSearchBoxHandleClick] = useState(false);
  //filter from searchBox  in table

  const [content, setcontent] = useState([]);

  const handleSetContentProduction = async () => {
    try {
      let formdata = new FormData();
      formdata.append("keyword", searchBoxValue);
      // const { data, status } = await keywordService(searchBoxValue);
      debugger;
      const { data, status } = await ContentProductionService(formdata);
      setcontent(data.data); //5
    } catch (error) {
      debugger;
      console.log(error);
    }
  };
  var tableDataFiltered = [];
  content.map((item) => {
    if (item.includes(searchBoxValue)) {
      tableDataFiltered.push(item);
    }
    // return
  });

  return (
    <>
      <div className="pt-3 flex flex-col justify-center items-center bg-[#ffffff]">
        <SearchBox
          changeHandler={SearchBoxChangeHandler}
          handlClick={() => {
            setSearchBoxHandleClick(true);
            handleSetContentProduction();
          }}
          className="w-[97%] flex items-center gap-2 justify-between"
        />

        <div className="flex flex-col  w-[97%]">
          {!searchBoxValue || !searchBoxHandleClick ? (
            <span className="text-right mt-4">هیچ کلمه ای جستجو نکردید!</span>
          ) : null}
          <div className="flex  justify-between w-full mt-5">
            <Table
              data={tableDataFiltered}
              NothingSearch={
                !searchBoxValue || !searchBoxHandleClick ? true : false
              }
              headerButton={true}
              contentsProduction={true}
              openModal={()=>onClickHandler()}
            />
          </div>
        </div>
      </div>
      <button
        className={
          searchBoxValue && searchBoxHandleClick
            ? "btn-style mr-5 mt-5 flex gap-3"
            : "bg-[#D3D5E2] btn-style mr-5 mt-5 flex gap-3"
        }
        disabled={searchBoxHandleClick ? false : true}
        onClick={(e) => onClickHandler()}
      >
        <img src="./img/dashboard/table/cached.svg" alt="cached" />
        تولید بیشتر
      </button>
    </>
  );
}
