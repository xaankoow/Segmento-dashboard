import React, { useContext } from "react";
import { TextButton } from "../../../pages/register/Register";
import "./authButton.css";
import { useDispatch } from "react-redux";

export default function AuthButton({ widthValue, style, handlerClick, reduxHandleClick, disabled, padding, classes, textButton }) {
  const value = useContext(TextButton);
  const dispatch = useDispatch()
  // debugger
  return (
    <button
      variant="contained"
      className={`btn-style ${classes}`}
      disabled={true}

      style={style}
      onClick={handlerClick != undefined && reduxHandleClick != undefined ? (
        (e) => {
          handlerClick()
          dispatch(reduxHandleClick())
        }
      ) : handlerClick != undefined ? (
        (e) => {
          handlerClick()
        }
      ) : (
        (e) => {
          dispatch(reduxHandleClick())
        }
      )}
    >
      {value != undefined ? value : textButton}
    </button>
  );
}
