import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CheckFormat } from "../../Utils/Auth/CheckFormtValue";
import "./authInput.css";
export default function AuthInput({

  textLabelInput, //place holder text (moved to top)
  width, // set input width
  typeInput, //set input type
  isPassword,
  handleChange, //using onChange
  reduxHandleChange, //using onChange with redux
  disable, //handle disable input (true/false)
  chechvalue, //
  maxlength,
  classes,
  pressNumber,
  direction,
  wrapperClass,
  value,
  handleArrowPlan,
  targePlanArrow,
  workSpaceTypeState,
  errorTextId,
  infoStrongPass,
  checkStrongPass,
  readOnly,
  ref,
  inputId,
  selectWithOnClick,
  placeholder,
  handleChangeValue
}) {

  const dispatch = useDispatch()

  const pressNumberValue = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <>
      <div className={`input-wrapper ${wrapperClass}`}>
        <span className={`error_down_input ${errorTextId != undefined && errorTextId}`}>اطلاعات نامعتبر</span>
        <input
        placeholder={placeholder}
        id={inputId!=undefined?inputId:""}
          type={typeInput}
          required
          maxLength={maxlength}
          onKeyPress={pressNumber && pressNumberValue}
          name={typeInput}
          ref={ref}
          disabled={disable}
          className={`${classes}  ${disable == true && " bg-[#D9D9D9] text-[#FCFCFB]"}`}
          value={value}
          dir="auto"
          readOnly={readOnly!=undefined&&true}
          style={{
            direction,
            width: `${width}`,
            pointerEvents: disable && "none",
            borderBottom: disable ? " 3px solid rgba(16, 204, 174, 1) !important" : chechvalue ? " 3px solid #cd0a0a" : "",
          }}
          onClick={(e)=>selectWithOnClick&&e.currentTarget.select()}
          onKeyUp={(e)=>{
            reduxHandleChange != undefined & selectWithOnClick !=undefined&& dispatch(reduxHandleChange(e.target.value))
          }}
          onChange={(e) => {
            checkStrongPass!=undefined&&CheckFormat("password",e.target.value,errorTextId)
            handleArrowPlan != undefined && handleArrowPlan(e.target.value, targePlanArrow);
            handleChange != undefined && handleChange(e.target.value)
            handleChangeValue != undefined && handleChangeValue()
            workSpaceTypeState != undefined & reduxHandleChange != undefined ?
              dispatch(reduxHandleChange(e.target.value, workSpaceTypeState)) :
              reduxHandleChange != undefined & selectWithOnClick ==undefined && dispatch(reduxHandleChange(e.target.value))
          }}
          
        />

        <label className={disable ? "text-[#fff]" : ""} for="user">{textLabelInput}</label>

        {/* TODO: CHANGE INFO TEXT WITH STIKY NOTE IN OFFICE */}
        {infoStrongPass == true ? <span className={` info w-[200%] `}>با ترکیب علائم (!@#) و اعداد (1-9) و حروف انگلیسی (A-z) گذرواژه طولانی و مطمئن بسازید.</span> : null}
      </div>
    </>
  );
}
