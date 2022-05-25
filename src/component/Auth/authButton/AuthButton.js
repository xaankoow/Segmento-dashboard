import React, { useContext } from "react";
import { TextButton } from "../../../pages/register/Register";
import "./authButton.css";
import { useDispatch } from "react-redux";

export default function AuthButton({ widthValue, bgcolor, handlerClick,reduxHandleClick,disabled,padding }) {
  const value = useContext(TextButton);
  const dispatch=useDispatch()
  return (
    <button
      variant="contained"
      className="registerButton"
      disabled={disabled}
      style={{ width: `${widthValue}`, backgroundColor: `${bgcolor}` ,padding :`${padding}`}}
      onClick={(e) =>  {
        // handlerClick();
        dispatch(reduxHandleClick())
      }}
          >
      {value}
    </button>
  );
}
