import { ReportGmailerrorred } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AuthButton from "../../component/authButton/AuthButton";
import AuthInput from "../../component/authInput/AuthInput";
import Authmenu from "../../component/authNavMenu/Authmenu";
import { changePasswordAction, checkVerifyEmailAction, sendForgotPasswordEmailCodeAction, setAuth1Redux, setAuth2Redux, setAuth3Redux, setAuth4Redux, setEmailRedux, setPasswordConfirmRedux, setPasswordRedux } from "../../component/Redux/Action";
import Timer from "../../component/timer/Timer";
import { TextButton } from "../register/Register";
import "./forgetpass.css";

export default function Forgetpass() {
  const [valusecode, setcode] = useState("");
  const [emailInputValue, setemailInputValue] = useState("");
  // enable codebox
  const [disabled, setDisabled] = useState(true);
  // enable pass
  const [disabledpass, setDisabledPass] = useState(true);
  const [chechvalue, setChechValue] = useState(false);
  //display timer
  const [display, setDisplay] = useState("");
  // getTextButton accept code button
const[getTextButton,setgetTextButton]=useState("دریافت کد")
  const handleChange = (e) => {
    let { id, value } = e.target;
    setcode(value);
    console.log(e);
    setemailInputValue(value);
  };
  //  active emailcode box
  const handlerClickButton = (e) => {
    if (emailInputValue.length > 10) setDisabled(false);
    setInterval(() => {
      
    }, 120000);
  };
  //  active passwordbox
  const handlerClickButtonAccept = (e) => {
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
        <Link to={"/login"}>
          <TextButton.Provider value={"ورود"}>
            <Authmenu />
          </TextButton.Provider>
        </Link>
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
                chechvalue={chechvalue}
              />
              <div>
                {!disabled && <Timer display={display} />}
                <TextButton.Provider value={getTextButton}>
                  <AuthButton
                    widthValue={"100px"}
                    bgcolor={
                      !disabledpass
                        ? "#009FB9"
                        : disabled
                        ? "#0A65CD"
                        : "#D3D5E2"
                    }
                    // handlerClick={handlerClickButton}
                    reduxHandleClick={sendForgotPasswordEmailCodeAction}
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
                  />
                  <AuthInput
                    width={"30px"}
                    notCheckValue={true}
                    disabled={unlockStep > 0 ? false : true}
                    // handleChange={handleChange}
                    chechvalue={chechvalue}
                    reduxHandleChange={setAuth2Redux}
                  />
                  <AuthInput
                    width={"30px"}
                    notCheckValue={true}
                    disabled={unlockStep > 0 ? false : true}
                    // handleChange={handleChange}
                    chechvalue={chechvalue}
                    reduxHandleChange={setAuth3Redux}
                  />
                  <AuthInput
                    width={"30px"}
                    notCheckValue={true}
                    disabled={unlockStep > 0 ? false : true}
                    // handleChange={handleChange}
                    chechvalue={chechvalue}
                    reduxHandleChange={setAuth4Redux}
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
                    src="/img/ErrorBadge.svg"
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
