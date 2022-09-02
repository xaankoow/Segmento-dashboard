import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function SearchBox({
  changeHandler,
  searchBoxValue,
  handlClick,
  className,
  placeholder,
}) {
  const { canRequest } = useSelector((state) => state.loadingState);
  return (
    <div className={className}>
      <input
        value={searchBoxValue}
        type="text"
        className="w-[95%] h-12  pr-4 border-2 border-[#D9D9D9] border-b-[#7D7D7D] placeholder-[#D9D9D9]"
        onChange={(e) => changeHandler(e)}
        placeholder={placeholder ? placeholder : "  جستجوی لیست"}
      />
      <button
        className="btn-style h-10"
        onClick={handlClick}
        disabled={!canRequest}
      >
        <img src="/img/dashboard/searchBox/search.svg" alt="search" />
      </button>
    </div>
  );
}
