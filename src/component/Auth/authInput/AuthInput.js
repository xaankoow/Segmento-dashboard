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
  disabled,
  chechvalue,
  maxlength,
  classes,
  pressNumber,
}) {
  // check email to be correct
  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const [isSeePssword, setSeePassword] = useState(typeInput);
  const [valueInput, setInputValue] = useState("");

  //redux options

  const dispatch =useDispatch()


  // to be just number when we type
  const pressNumberValue = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };
  return (
    <>
      <div className="input-wrapper">
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
          disabled={disabled}
          className={classes}
          dir="auto"
          style={{
            width: `${width}`,
            pointerEvents: disabled && "none",
            // backgroundColor: disabled && "#F2F5F7",
            borderBottom: chechvalue ? " 3px solid #cd0a0a" : "",
            // textAlign: typeInput === "email" && "left",
            // direction: typeInput === "email" ? "ltr" : "rtl",
          }}
          onChange={(e) => {
            setInputValue(e.target.value);
            dispatch(reduxHandleChange(e.target.value))
            // handleChange(e);
          }}
        />
        <label className={disabled?"lockStyle":""} for="user">{textLabelInput}</label>
        <span className="error_down_input">اطلاعات نامعتبر</span>

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
