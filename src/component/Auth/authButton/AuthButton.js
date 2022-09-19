import React, { useContext } from "react";
import { TextButton } from "../../../pages/register/Register";
import "./authButton.css";
import { useDispatch, useSelector } from "react-redux";

export default function AuthButton({
  widthValue,
  style,
  handlerClick,
  reduxHandleClick,
  disabled,
  padding,
  classes,
  textButton,
  setOnclickValue,
  submitType
}) {
  const { canRequest } = useSelector(state => state.loadingState)
  const value = useContext(TextButton);
  const dispatch = useDispatch()

  var ds = "";

  return (
    <button
      variant="contained"
      // className={` ${classes != undefined ? classes : ""} ${classes != undefined&&classes.includes("btn-secondary") == true ? classes : "btn-style" + classes}`}
      className={`${classes != undefined && classes.includes("btn-secondary") == true ? classes : " btn-style " + classes}`}
      disabled={disabled != undefined ? disabled ? true : !canRequest : !canRequest}
      style={style}
      type={submitType != undefined ? "submit" : "button"}
      onClick={handlerClick != undefined & handlerClick != "" & reduxHandleClick != undefined ? (
        (e) => {
          handlerClick()
          dispatch(reduxHandleClick(setOnclickValue != "" ? setOnclickValue : null))
        }
      ) : handlerClick != undefined & handlerClick != "" ? (
        (e) => {
          handlerClick(setOnclickValue != "" & setOnclickValue != undefined ? setOnclickValue : null)
        }
      ) : reduxHandleClick != undefined && (
        (e) => {
          dispatch(reduxHandleClick(setOnclickValue != "" & setOnclickValue != undefined ? setOnclickValue : null))
        }
      )}
    >
      {value != undefined ? value : textButton}
    </button>
  );
}
