import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import AuthButton from "../../../Auth/authButton/AuthButton";
import search_svg from "../../../../assets/img/dashboard/searchBox/search.svg";
import SubmitForm from "../../../Utils/Submit";

export default function SearchBox({
  changeHandler,
  searchBoxValue,
  handlClick,
  className,
  placeholder,
  handleClear,
  resetRadioText,
  setResetRadioText
}) {
  const { canRequest } = useSelector((state) => state.loadingState);

  const resetKeyWordComboBox = () => {
    document.querySelector("#keyWordSearchBoxFilter").value = "";
    setResetRadioText(resetRadioText+1)

  }
  return (
    <SubmitForm submitFun={handlClick} formClass={className} outSideFun={handleClear != undefined ? resetKeyWordComboBox : ""}>
      <input
        id="lajdk"
        value={searchBoxValue}
        type="text"
        className="w-[95%] h-12  pr-4 border-2 border-[#D9D9D9] border-b-[#7D7D7D] placeholder-[#D9D9D9]"
        onChange={(e) => changeHandler(e)}
        placeholder={placeholder ? placeholder : "  جستجوی لیست"}
      />
      <div onClick={() => handleClear != undefined ? resetKeyWordComboBox() : ""}>

        <AuthButton
          handlerClick={handlClick}
          disabled={!canRequest}
          classes="h-10"
          textButton={<img src={search_svg} alt="search" />}
        />
      </div>
      {/* <button
        className="btn-style h-10"
        onClick={handlClick}
        disabled={!canRequest}
      >
        
      </button> */}
    </SubmitForm>
  );
}
