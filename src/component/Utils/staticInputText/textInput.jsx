import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../../Auth/authInput/AuthInput";
import './textInput.css'

export default function StaticInputText({
  textLabelInput,
  width,
  typeInput,
  reduxHandleChange,
  disabled,
  chechvalue,
  maxlength,
  classes,
  pressNumber,
  direction,
  wrapperClass,
  value,
  placeholder,
  staticText,
  workSpaceTypeState,
  parentClass,
  handleChange,
  errorTextId

}) {
  // check email to be correct
  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const [isSeePssword, setSeePassword] = useState(typeInput);
  const [valueInput, setInputValue] = useState("");

  const dispatch = useDispatch()


  // to be just number when we type
  const pressNumberValue = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };
 
  return (
    <div className={`flex static_text_input w-full ${parentClass}`}>
      <div className={`input-wrapper input-static ${wrapperClass}`}>
      <span className={`error_down_input ${errorTextId != undefined && errorTextId}`}>اطلاعات نامعتبر</span>

        <input
          type={isSeePssword}
          required
          maxLength={maxlength}
          onKeyPress={pressNumber && pressNumberValue}
          name={typeInput}
          disabled={disabled}
          className={`${classes} input-static`}
          value={value}
          dir="auto"
          style={{
            direction,
            width: `${width}`,
            pointerEvents: disabled && "none",
            borderBottom: chechvalue ? " 3px solid #cd0a0a" : "",
          }}
          onChange={reduxHandleChange!=undefined?((e)=> {
            // setInputValue(e.target.value);
             workSpaceTypeState != undefined ? dispatch(reduxHandleChange(e.target.value, workSpaceTypeState)) : dispatch(reduxHandleChange(e.target.value)) 
          }): handleChange ? (e)=>handleChange(e) :null}
          placeholder={placeholder}
        />
        <label className={disabled ? "lockStyle" : ""} for="user">{textLabelInput}</label>
        <span className="error_down_input">اطلاعات نامعتبر</span>
      </div>
      <p className="">{staticText}</p>
    </div>
  );
}
