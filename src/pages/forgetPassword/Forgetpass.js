import { ReportGmailerrorred } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AuthButton from "../../component/Auth/authButton/AuthButton";
import AuthInput from "../../component/Auth/authInput/AuthInput";
import Authmenu from "../../component/Auth/authNavMenu/Authmenu";
import Timer from "../../component/Auth/timer/Timer";
import { changePasswordAction, checkVerifyEmailAction, sendForgotPasswordEmailCodeAction, setAuth1Redux, setAuth2Redux, setAuth3Redux, setAuth4Redux, setEmailRedux, setPasswordConfirmRedux, setPasswordRedux } from "../../component/Redux/Action";
import { TextButton } from "../register/Register";
import "./forgetpass.css";

export default function Forgetpass() {
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          setDisabledCodeButton(false);
          setMinutes(1);
          setSeconds(59);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  // timer
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);
  // value of input
  const [valusecode, setcode] = useState("");
  const [emailInputValue, setemailInputValue] = useState("");
  // enable codebox
  const [disabled, setDisabled] = useState(true);
  // enable pass
  const [disabledpass, setDisabledPass] = useState(true);
  const [chechvalue, setChechValue] = useState(false);
  // check email to be correct format
  const [chechValueEmail, setChechValueEmail] = useState(false);
  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  //display timer
  const [display, setDisplay] = useState("");
  // getTextButton accept code button
  const [getTextButton, setgetTextButton] = useState("دریافت کد");
  // get code disabled
  const [disabledcodeButton, setDisabledCodeButton] = useState(false);
  const handleChange = (e) => {
    let { id, value } = e.target;
    setcode(value);
    setemailInputValue(value);
  };
  //  active emailcode box
  const handlerClickButton = (e) => {
    if (emailInputValue.length > 10 && validateEmail(valusecode)) {
      setDisabled(false);
      setDisabledCodeButton(true);
      setgetTextButton("دریافت مجدد کد");
      setChechValueEmail(false);
    } else {
      setChechValueEmail(true);
    }
  };

  //  active passwordbox
  const handlerClickButtonAccept = (e) => {
    setDisabledCodeButton(true);
    // ? problemmmmmmmmmmmmmmmmmmmmmmmmmm
    if (valusecode.length) {
      setDisabledPass(false);
    }
    //none display timer
    setDisplay("none");
  };
  // check value to be not empty
  const checkInputValue = () => {
    if (!valusecode) {
      setChechValue(true);
    } else {
      setChechValue(false);
    }
  };

  //unlock section form
  const unlockStep = useSelector(state => state.forgotPasswordStep)


  return (
    <div className="registerContainer">
      <div className="registerBox">
        <TextButton.Provider value={"ورود"}>
          <Authmenu buttonLink={"/login"} />
        </TextButton.Provider>
        <div className="mainbox">
          <div className="activePassConteiner">
            <div className="mohtava">
              <span>گذرواژه خود را فراموش کرده اید . هیچ ایرادی نداره</span>
              <span>برامون بنویسین تا ما یک کد فعال سازی ارسال کنیم .</span>
              <span>
                کد رو وارد کنین و گذرواژه جدیدتون رو بنویسین برامون . به همین
                سادگی
              </span>
            </div>
            <div className="emailboForget">
              <AuthInput
                textLabelInput="ایمیل"
                width={"260px"}
                typeInput="email"
                // handleChange={handleChange}
                reduxHandleChange={setEmailRedux}
                // chechvalue={chechvalue}
                chechvalue={chechValueEmail}
                disabled={disabledcodeButton}
              />
              <div>
                {disabledcodeButton && (
                  <Timer
                    display={display}
                    minutes={minutes}
                    seconds={seconds}
                  />
                )}
                <TextButton.Provider value={getTextButton}>
                  <AuthButton
                    widthValue={getTextButton !== "تایید کد" && "139px"}
                    bgcolor={ 
                      
                         "#0A65CD"
                       
                    }
                    // handlerClick={handlerClickButton}
                    reduxHandleClick={sendForgotPasswordEmailCodeAction}
                    disabled={disabledcodeButton}
                  />
                </TextButton.Provider>
              </div>
            </div>
            <div className="activecodeBox">
              <div className="activecodeChildBox">
                <span>کد فعال سازی</span>
                <div>
                  <AuthInput
                    width={"30px"}
                    notCheckValue={true}
                    disabled={unlockStep > 0 ? false : true}
                    // handleChange={handleChange}
                    chechvalue={chechvalue}
                    reduxHandleChange={setAuth1Redux}
                    maxlength="1"
                    pressNumber={true}
                  />
                  <AuthInput
                    width={"30px"}
                    notCheckValue={true}
                    disabled={unlockStep > 0 ? false : true}
                    // handleChange={handleChange}
                    chechvalue={chechvalue}
                    reduxHandleChange={setAuth2Redux}
                    maxlength="1"
                    pressNumber={true}
                  />
                  <AuthInput
                    width={"30px"}
                    notCheckValue={true}
                    disabled={unlockStep > 0 ? false : true}
                    // handleChange={handleChange}
                    chechvalue={chechvalue}
                    reduxHandleChange={setAuth3Redux}
                    maxlength="1"
                    pressNumber={true}
                  />
                  <AuthInput
                    width={"30px"}
                    notCheckValue={true}
                    disabled={unlockStep > 0 ? false : true}
                    // handleChange={handleChange}
                    chechvalue={chechvalue}
                    reduxHandleChange={setAuth4Redux}
                    maxlength="1"
                    pressNumber={true}
                  />
                </div>
              </div>
              <div className="acceptCodeBox">
                <TextButton.Provider value={"تایید کد"}>
                  <AuthButton
                    widthValue={"90px"}
                    reduxHandleClick={checkVerifyEmailAction}
                    disabled={unlockStep > 0 ? false : true}
                    bgcolor={
                      !disabledpass
                        ? "#009FB9"
                        : disabled
                        ? "#D3D5E2"
                        : "#0A65CD"
                    }
                  />
                </TextButton.Provider>
              </div>
            </div>
            <div className="forgetpassBox">
              <AuthInput
                textLabelInput="گذرواژه "
                width={"273px"}
                typeInput="password"
                isPassword={true}
                disabled={unlockStep > 1 ? false : true}
                chechvalue={chechvalue}
                reduxHandleChange={setPasswordRedux}
              />
              <div className="recheckPss">
                <AuthInput
                  textLabelInput=" تکرار گذرواژه  "
                  width={"273px"}
                  typeInput="password"
                  isPassword={true}
                  disabled={unlockStep > 1 ? false : true}
                  chechvalue={chechvalue}
                  reduxHandleChange={setPasswordConfirmRedux}
                />
                <div className="ErrorBadgeBox">
                  <img
                    sdivrc="/img/ErrorBadge.svg"
                    alt="ErrorBadge"
                    className="ErrorBadgeImage"
                  />
                  <h5>گذرواژه همخوانی ندارد</h5>
                </div>
              </div>
            </div>
            <div className="storePssBox">
              <TextButton.Provider value={"ذخیره گذرواژه و ورود"}>
                <AuthButton
                  bgcolor={disabledpass ? "#D3D5E2" : "#0A65CD"}
                  // handlerClick={checkInputValue}
                  widthValue={"162px"}
                  disabled={unlockStep > 1 ? false : true}
                  reduxHandleClick={changePasswordAction}
                />
              </TextButton.Provider>
              <div>
                <Link to={"/"}>
                  <span className="span">حساب کاربری ندارم!</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="imgBox">
            <img src="/img/registerFrame.svg" alt="registerFrame" />
            <img src="/img/businessesIcon.png" alt="businessesIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
