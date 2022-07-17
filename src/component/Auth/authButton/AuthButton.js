import React, { useContext } from "react";
import { TextButton } from "../../../pages/register/Register";
import "./authButton.css";
import { useDispatch } from "react-redux";
import { useSelect } from "@mui/base";

export default function AuthButton({
  widthValue,
  style,
  handlerClick,
  reduxHandleClick,
  disabled,
  padding,
  classes,
  textButton,
  setOnclickValue
}) {
  const {canRequest}=useSelect(state=>state.loadingState)
  const value = useContext(TextButton);
  const dispatch = useDispatch()
  // debugger
  return (
    <button
      variant="contained"
      className={`btn-style ${classes}`}
      disabled={disabled==true?canRequest:false}

      style={style}
      onClick={handlerClick != undefined && reduxHandleClick != undefined ? (
        (e) => {
          handlerClick()
          dispatch(reduxHandleClick(setOnclickValue!=""?setOnclickValue:null))
        }
      ) : handlerClick != undefined ? (
        (e) => {
          handlerClick(setOnclickValue!=""|setOnclickValue!=undefined?setOnclickValue:null)
        }
      ) : (
        (e) => {
          dispatch(reduxHandleClick(setOnclickValue!=""|setOnclickValue!=undefined?setOnclickValue:null))
        }
      )}
    >
      {value != undefined ? value : textButton}
    </button>
  );
}
