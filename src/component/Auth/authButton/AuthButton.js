import React, { useContext } from "react";
import { TextButton } from "../../../pages/register/Register";
import "./authButton.css";
import { useDispatch } from "react-redux";

export default function AuthButton({ widthValue, bgcolor, handlerClick,reduxHandleClick,disabled,padding,classes }) {
  const value = useContext(TextButton);
  const dispatch=useDispatch()
  return (
    <button
      variant="contained"
      className={`btn-style ${classes}`}
      disabled={disabled}
      style={{ }}
      onClick={(e) =>  {
        // handlerClick();
        dispatch(reduxHandleClick())
      }}
          >
      {value}
    </button>
  );
}
