import React, { useContext } from "react";
import { TextButton } from "../../../pages/register/Register";
import "./authButton.css";
import { useDispatch, useSelector } from "react-redux";
import {CircularProgress} from 'react-cssfx-loading'

export default function AuthButton({
  widthValue,
  style,
  handlerClick,
  reduxHandleClick,
  disabled,
  padding,
  classes="btn-style",
  textButton,
  setOnclickValue,
  submitType,
  keyLoading=""
}) {
  const { ProcessingDelay,ImportantProcessingDelay, canRequest } = useSelector(state => state.loadingState)
  // const { canRequest } = useSelector(state => state.loadingState)
  const value = useContext(TextButton);
  const dispatch = useDispatch()

  const checkingkeyLoadingProcessLoading=ProcessingDelay.includes(keyLoading)

  const btnTextColor=(btnType)=>{
    switch (btnType) {
      case "btn-style":
        return ""
      case "btn-secondary":
        return ""
      case "btn-delete":
        return "text-deleteBtn"
    
      default:
        break;
    }
  }

  return (
    <button
      variant="contained"
      // className={`${checkingkeyLoadingProcessLoading?"changing_padding_down":"changing_padding_up"} ${classes != undefined&&classes.includes("btn-secondary")|classes.includes("btn-delete_style") == true ? classes : " btn-style " + classes}`}
      className={`${classes != undefined&&classes.includes("btn-secondary")|classes.includes("btn-delete") == true ? classes : " btn-style " + classes}`}
      // disabled={disabled != undefined ? disabled ? true : !canRequest : !canRequest}
      disabled={disabled? disabled :checkingkeyLoadingProcessLoading}

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
      {/* <div className=" absolute"> */}
      {/* <CircularProgress className=" absolute w-full" color="#D9D9D9" width="26px" height="26px" duration="3s" /> */}
      {/* </div> */}
      {/* {checkingkeyLoadingProcessLoading==true?<CircularProgress color="#D9D9D9" width="36px" height="36px" duration="3s" />:value != undefined ? value : textButton} */}
      {checkingkeyLoadingProcessLoading==true?<CircularProgress className=" absolute w-full" color="#0A65CD" width="26px" height="26px" duration="3s" />:null}
      {<span className={` flex items-center ${checkingkeyLoadingProcessLoading==true&&"opacity-0"} `}>{value != undefined ? value : textButton}</span>}
      {/* {value != undefined ? value : textButton} */}
      {/* <CircularProgress color="#FFFF" width="30px" height="30px" duration="3s" /> */}
    </button>
  );
}
