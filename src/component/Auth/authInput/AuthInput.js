import { borderBottom } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./authInput.css";
export default function AuthInput({
  textLabelInput,
  width,
  typeInput,
  isPassword,
  notCheckValue,
  handleChange,
  reduxHandleChange,
  disable,
  chechvalue,
  maxlength,
  classes,
  pressNumber,
  direction,
  wrapperClass,
  value,
  handleArrowPlan,
  targePlanArrow,
  workSpaceTypeState,
  errorTextId

}) {
  // check email to be correct (Transfer to => Utils/Auth/CheckFormatValue) thanks Ariri for the create this function => ariri aswered : your welcome :)  
  // const validateEmail = (email) => {
  //   var re = /\S+@\S+\.\S+/;
  //   return re.test(email);
  // };
  // console.log(reduxHandleChange)

  const [isSeePssword, setSeePassword] = useState(typeInput);
  const [valueInput, setInputValue] = useState("");

  //redux options

  const dispatch = useDispatch()
  // debugger

  // to be just number when we type
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
          type={isSeePssword}
          required
          maxlength={maxlength}
          onKeyPress={pressNumber && pressNumberValue}
          // className={
          //   !valueInput
          //     ? notCheckValue === false
          //     : notCheckValue && "notCheckValue"
          // }
          name={typeInput}
          disabled={disable}
          className={`${classes}  ${disable==true&&" bg-[#D9D9D9] text-[#FCFCFB]"}`}
          value={value}
          dir="auto"
          style={{
            direction,
            width: `${width}`,
            pointerEvents: disable && "none",
            // backgroundColor: disable && "#F2F5F7",
            // borderBottom: chechvalue ? " 3px solid #cd0a0a" : "",
            borderBottom: disable ? " 3px solid rgba(16, 204, 174, 1) !important" : chechvalue ? " 3px solid #cd0a0a" : "",

            // textAlign: typeInput === "email" && "left",
            // direction: typeInput === "email" ? "ltr" : "rtl",
          }}
          onChange={(e) => {
           
               handleArrowPlan != undefined && handleArrowPlan(e.target.value, targePlanArrow) ;
               handleChange!=undefined&&handleChange(e.target.value)
            setInputValue(e.target.value);
             workSpaceTypeState != undefined& reduxHandleChange!=undefined?
              dispatch(reduxHandleChange(e.target.value, workSpaceTypeState)) :
              reduxHandleChange!=undefined&& dispatch(reduxHandleChange(e.target.value))

           
          }}
        />
        <label className={disable ?  "text-[#fff]" : ""} for="user">{textLabelInput}</label>

        {/* {isPassword ? (
          <img
            src="/img/RevealPassword.svg"
            alt="RevealPassword"
            className="imageInputIcon"
            onClick={() =>
              setSeePassword(isSeePssword === "password" ? "text" : "password")
            }
          />
        ) : typeInput === "email" && validateEmail(valueInput) ? (
          valueInput && (
            <img
              src="/img/tick.svg"
              alt="RevealPassword"
              style={notCheckValue && { display: "none" }}
              className="imageInputIcon2"
            />
          )
        ) : (
          ""
        )} */}
        {/* {valueInput && typeInput === "text" ? (
          <img
            src="/img/tick.svg"
            alt="RevealPassword"
            style={notCheckValue && { display: "none" }}
            className="imageInputIcon"
          />
        ) : (
          ""
        )} */}

        {/* {isPassword && setPassArray(valueInput)} */}
        {/* {passArray[0]==passArray[1] ? "" :  } */}
      </div>
    </>
  );
}
