import { borderBottom } from "@mui/system";
import React, { useState } from "react";
import "./authInput.css";
export default function AuthInput({
  textLabelInput,
  width,
  typeInput,
  isPassword,
  notCheckValue,
  handleChange,
  disabled,
  chechvalue,
}) {
  // check email to be correct
  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const [isSeePssword, setSeePassword] = useState(typeInput);
  const [valueInput, setInputValue] = useState("");
  return (
    <>
      <div class="input-wrapper">
        <input
          type={isSeePssword}
          required
          className={
            !valueInput
              ? notCheckValue === false
              : notCheckValue && "notCheckValue"
          }
          style={{
            width: `${width}`,
            pointerEvents: disabled && "none",
            backgroundColor: disabled && "#F2F5F7",
            borderBottom: chechvalue ? " 3px solid #cd0a0a" : "",
          }}
          onChange={(e) => {
            setInputValue(e.target.value);
            handleChange(e);
          }}
        />
        <label for="user">{textLabelInput}</label>
        {isPassword ? (
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
              className="imageInputIcon"
            />
          )
        ) : (
         ""
        )}
         {valueInput && typeInput === "text" ? (
          <img
            src="/img/tick.svg"
            alt="RevealPassword"
            style={notCheckValue && { display: "none" }}
            className="imageInputIcon"
          />
        ) : (
          ""
        )}
       

        {/* {isPassword && setPassArray(valueInput)} */}
        {/* {passArray[0]==passArray[1] ? "" :  } */}
      </div>
    </>
  );
}
