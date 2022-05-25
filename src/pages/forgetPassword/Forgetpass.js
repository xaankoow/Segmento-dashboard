import { ReportGmailerrorred } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthButton from "../../component/Auth/authButton/AuthButton";
import AuthInput from "../../component/Auth/authInput/AuthInput";
import Authmenu from "../../component/Auth/authNavMenu/Authmenu";
import Timer from "../../component/Auth/timer/Timer";
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
  const [getTextButton, setgetTextButton] = useState("دریافت کد");
  const handleChange = (e) => {
    let { id, value } = e.target;
    setcode(value);
    setemailInputValue(value);
  };
  //  active emailcode box
  const handlerClickButton = (e) => {
    if (emailInputValue.length > 10) {
      setDisabled(false);
      setgetTextButton("دریافت مجدد کد");
    }
    // setInterval(() => {
    //   setgetTextButton("دریافت مجدد کد")
    // }, 120000);
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

  return (
    <div className="registerContainer">
      <div className="registerBox">
        <TextButton.Provider value={"ورود"}>
          <Authmenu  buttonLink={"/login"} />
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
                handleChange={handleChange}
                chechvalue={chechvalue}
              />
              <div>
                {!disabled && <Timer display={display} />}
                <TextButton.Provider value={getTextButton}>
                  <AuthButton
                    widthValue={getTextButton !== "تایید کد" && "139px"}
                    bgcolor={"#0A65CD"}
                    handlerClick={handlerClickButton}
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
                    disabled={disabled}
                    handleChange={handleChange}
                    chechvalue={chechvalue}
                  />
                  <AuthInput
                    width={"30px"}
                    notCheckValue={true}
                    disabled={disabled}
                    handleChange={handleChange}
                    chechvalue={chechvalue}
                  />
                  <AuthInput
                    width={"30px"}
                    notCheckValue={true}
                    disabled={disabled}
                    handleChange={handleChange}
                    chechvalue={chechvalue}
                  />
                  <AuthInput
                    width={"30px"}
                    notCheckValue={true}
                    disabled={disabled}
                    handleChange={handleChange}
                    chechvalue={chechvalue}
                  />
                </div>
              </div>
              <div className="acceptCodeBox">
                <TextButton.Provider value={"تایید کد"}>
                  <AuthButton
                    widthValue={"90px"}
                    handlerClick={handlerClickButtonAccept}
                    disabled={disabled}
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
                disabled={disabledpass}
                chechvalue={chechvalue}
              />
              <div className="recheckPss">
                <AuthInput
                  textLabelInput=" تکرار گذرواژه  "
                  width={"273px"}
                  typeInput="password"
                  isPassword={true}
                  disabled={disabledpass}
                  chechvalue={chechvalue}
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
                  handlerClick={checkInputValue}
                  disabled={disabledpass}
                  widthValue={"162px"}
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
