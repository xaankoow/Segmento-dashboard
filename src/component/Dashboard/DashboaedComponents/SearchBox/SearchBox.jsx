import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import AuthButton from "../../../Auth/authButton/AuthButton";
import search_svg from '../../../../assets/img/dashboard/searchBox/search.svg'

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
      <AuthButton handlerClick={handlClick} disabled={!canRequest} classes="h-10" textButton={<img src={search_svg} alt="search" />}/>
      {/* <button
        className="btn-style h-10"
        onClick={handlClick}
        disabled={!canRequest}
      >
        
      </button> */}
    </div>
  );
}
