import React, { useContext } from "react";
import { TextButton } from "../../../pages/register/Register";
import "./authButton.css";

export default function AuthButton({ widthValue, bgcolor, handlerClick,disabled,padding }) {
  const value = useContext(TextButton);
  return (
    <button
      variant="contained"
      className="registerButton"
      disabled={disabled}
      style={{ width: `${widthValue}`, backgroundColor: `${bgcolor}`,padding :`${padding}` }}
      onClick={(e) =>  handlerClick()}
          >
      {value}
    </button>
  );
}
