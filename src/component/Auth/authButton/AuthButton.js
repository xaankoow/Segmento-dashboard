import React, { useContext } from "react";
import { TextButton } from "../../../pages/register/Register";
import "./authButton.css";
import { useDispatch } from "react-redux";

export default function AuthButton({ widthValue, style, handlerClick,reduxHandleClick,disabled,padding,classes,textButton }) {
  const value = useContext(TextButton);
  const dispatch=useDispatch()
  // debugger
  return (
    <button
      variant="contained"
      className={`btn-style ${classes}`}
      disabled={disabled}

      style={{backgroundColor:"#0A65CD26"}}
      onClick={(e) =>  {
        // handlerClick();
        dispatch(reduxHandleClick())
      }}
          >
      {value!=undefined?value:textButton}
    </button>
  );
}
