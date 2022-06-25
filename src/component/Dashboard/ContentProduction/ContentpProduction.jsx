import React, { useState } from "react";
import SearchBox from "../DashboaedComponents/SearchBox/SearchBox";
import Table from "../DashboaedComponents/TableData/TableData";

export default function ContentpProduction({ onClickHandler }) {
  const tableData = [
    {
      row: 1,
      content: "کره محلی باعث چاقی میشود",
    },
    {
      row: 2,
      content: "تعبیر خواب کره ی محلی",
    },
    {
      row: 3,
      content: "ماندگاری کره محلی",
    },
    {
      row: 1,
      content: "کره محلی میهن",
    },
    {
      row: 2,
      content: " اشتراک 12 ماهه طلایی",
    },
    {
      row: 3,
      content: " اشتراک 12 ماهه طلایی",
    },
    {
      row: 1,
      content: " اشتراک 12 ماهه طلایی",
    },
    {
      row: 2,
      content: "کره حیوانی محلی قیمت",
    },
    {
      row: 3,
      content: "فروش کره محلی گاو",
    },
  ];
  // searchBox Value
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const SearchBoxChangeHandler = (e) => {
    setSearchBoxValue(e.target.value);
    setSearchBoxHandleClick(false);
  };

  // search box click
  const [searchBoxHandleClick, setSearchBoxHandleClick] = useState(false);
  //filter from searchBox  in table
  const tableDataFiltered = tableData.filter((item) => {
    if (searchBoxHandleClick && searchBoxValue)
      return item.content.includes(searchBoxValue);
  });

  return (
    <>
      <div className="pt-3 flex flex-col justify-center items-center bg-[#ffffff]">
        <SearchBox
          changeHandler={SearchBoxChangeHandler}
          handlClick={() => setSearchBoxHandleClick(true)}
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
