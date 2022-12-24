import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AuthButton from "../../component/Auth/authButton/AuthButton";
import AuthInput from "../../component/Auth/authInput/AuthInput";
import Nav from "../../component/Dashboard/DashboaedComponents/navMenu/Nav";
import { changePasswordAction, checkVerifyEmailForgotPasswordAction, sendForgotPasswordEmailCodeAction, setAuth1Redux, setAuth2Redux, setAuth3Redux, setAuth4Redux, setEmailRedux, setPasswordConfirmRedux, setPasswordRedux } from "../../component/Redux/Action";
import Timer from "../../component/shared/Time/timer/Timer";
import ToolTip from "../../component/Utils/ToolTip";
import { TextButton } from "../register/Register";
import "./forgotpass.css";
import registerFrame_svg from "../../assets/img/registerFrame.svg";
import businessesIcon_png from "../../assets/img/businessesIcon.png";
import SubmitForm from "../../component/Utils/Submit";

export default function Forgetpass() {

  const { forgotPasswordStep, handleResendCode } = useSelector(state => state.userState)

  const [showToolTip, setShowToolTip] = useState(true);

  useEffect(() => {
    if (handleResendCode == false) {
      let myInterval = setTimeout(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
            setMinutes(1);
            setSeconds(59);
          } else {
            minutesTimerValue = minutesTimerValue - 1;
            secondsTimerValue = 59;
          }
        }
      }, 1000);
    }
  });

  const clearTimerValue = () => {
    if (minutes != 1 || seconds != 59) {

      setMinutes(1);
      setSeconds(59);
    }
  }

  // timer
  var minutesTimerValue = 1;
  var secondsTimerValue = 59;

  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);
  // enable pass
  const [disabledpass, setDisabledPass] = useState(true);

  return (
    <div className="flex flex-col items-center w-full justify-center overflow-hidden">
      <Nav path={"register"} />
      <div className="w-full mt-10 px-28">
        <div className="gap-10 items-center flex flex-row justify-between 2xl:py-5 md:py-5 min-w-full">
          <div className="flex flex-col justify-center w-6/12">
            <div className="flex flex-col gap-1">
              <span>
                برای بازیابی گذرواژه، نیاز به یک کد دارید که براتون ایمیل میشه.
              </span>
            </div>
            <div className="items-center flex justify-between mt-10 mb-5">
              <div className="w-50"
                data-tip='کد را با این ایمیل دریافت می‌کنید'
                data-type="light"
                data-place="top"
                onMouseEnter={() => setShowToolTip(true)}
                onMouseLeave={() => {
                  setShowToolTip(false);
                  setTimeout(() => setShowToolTip(true), 0);
                }}>
                <SubmitForm submitFun={sendForgotPasswordEmailCodeAction} dispatchOption>
                  <AuthInput
                    textLabelInput="ایمیل"
                    classes={`forgot_password_input`}
                    reduxHandleChange={setEmailRedux}
                    disabled={forgotPasswordStep == 2 ? true : false}
                    errorTextId="errRejesterFormatEmail"
                  />
                </SubmitForm>
              </div>
              <div className="flex items-center">
                {handleResendCode == true ? clearTimerValue() :
                  <Timer
                    minutes={minutes}
                    seconds={seconds}
                  />
                }
                <TextButton.Provider value={"دریافت کد"}>
                  <AuthButton
                    classes={forgotPasswordStep > 0 ? "btn_complete" : ""}
                    reduxHandleClick={sendForgotPasswordEmailCodeAction}
                    disabled={handleResendCode == true ? forgotPasswordStep == 2 ? true : false : true}
                  />
                </TextButton.Provider>
              </div>
            </div>
            <SubmitForm submitFun={checkVerifyEmailForgotPasswordAction} dispatchOption formClass={"flex items-center justify-between mt-5 relative"}>
              <div className="flex items-center gap-5 flex-col">
                <span className={forgotPasswordStep > 0 ? forgotPasswordStep == 2 ? "lockStyle" : "" : "lockStyle"}>کد فعال سازی</span>
                <div className="flex items-center gap-4">
                  <AuthInput
                    classes={"verify_email_cod input_selector_4"}
                    disable={forgotPasswordStep > 0 ? forgotPasswordStep == 2 ? true : false : true}
                    reduxHandleChange={setAuth1Redux}
                    maxlength={1}
                    pressNumber={true}
                    selectWithOnClick
                  />
                  <AuthInput
                    classes={"verify_email_cod input_selector_3"}
                    disable={forgotPasswordStep > 0 ? forgotPasswordStep == 2 ? true : false : true}
                    reduxHandleChange={setAuth2Redux}
                    maxlength={1}
                    pressNumber={true}
                    selectWithOnClick
                  />
                  <AuthInput
                    classes={"verify_email_cod input_selector_2"}
                    disable={forgotPasswordStep > 0 ? forgotPasswordStep == 2 ? true : false : true}
                    reduxHandleChange={setAuth3Redux}
                    maxlength={1}
                    pressNumber={true}
                    selectWithOnClick
                  />
                  <AuthInput
                    classes={"verify_email_cod"}
                    disable={forgotPasswordStep > 0 ? forgotPasswordStep == 2 ? true : false : true}
                    reduxHandleChange={setAuth4Redux}
                    maxlength={1}
                    pressNumber={true}
                    selectWithOnClick
                  />
                </div>
                {/* <AuthVerifyCode/> */}
                <span className={"authVerifyCodeList hidden absolute right-1 bottom-[-20px] text-[10px] text-[#c42b1c] "}>اطلاعات نامعتبر</span>
              </div>
              <div className="absolute bottom-0 left-0 ">
                <TextButton.Provider value={"تایید کد"}>
                  <AuthButton
                    reduxHandleClick={checkVerifyEmailForgotPasswordAction}
                    disabled={forgotPasswordStep > 0 ? forgotPasswordStep == 2 ? true : false : true}
                    classes={forgotPasswordStep > 1 ? forgotPasswordStep == 2 ? "" : "btn_complete" : ""}
                    bgcolor={
                      !disabledpass
                        ? "#009FB9"
                        : "#D3D5E2"
                    }
                  />
                </TextButton.Provider>
              </div>
            </SubmitForm>
            <SubmitForm submitFun={changePasswordAction} dispatchOption formClass={"flex gap-4 justify-between my-10"}>
              <div className="flex gap-4 justify-between my-10"
                data-tip='با ترکیب علائم (!@#) و اعداد (1-9) و حروف انگلیسی (A-z) گذرواژه طولانی و مطمئن (حداقل 8 حرف) بسازید.'
                data-type="light"
                data-place="top"
                onMouseEnter={() => setShowToolTip(true)}
                onMouseLeave={() => {
                  setShowToolTip(false);
                  setTimeout(() => setShowToolTip(true), 0);
                }}>
                <AuthInput
                  textLabelInput="گذرواژه "
                  classes={"forgot_password_input"}
                  typeInput="password"
                  isPassword={true}
                  disable={forgotPasswordStep > 1 ? false : true}
                  reduxHandleChange={setPasswordRedux}
                  errorTextId="errRejesterPassword"
                  checkStrongPass
                />
                <div className="flex flex-col items-start relative">
                  <AuthInput
                    textLabelInput=" تکرار گذرواژه  "
                    classes={"forgot_password_input"}
                    typeInput="password"
                    isPassword={true}
                    disable={forgotPasswordStep > 1 ? false : true}
                    reduxHandleChange={setPasswordConfirmRedux}
                    errorTextId="errRejesterPasswordConfirm"
                  />
                  <div className="ErrorBadgeBox">
                    <img
                      sdivrc="/img/ErrorBadge.svg"
                      alt="ErrorBadge"
                      className="bg[#C42B1C] p-1 rounded-full"
                    />
                    <h5>گذرواژه همخوانی ندارد</h5>
                  </div>
                </div>
              </div>
            </SubmitForm>
            <div className="flex items-center justify-between">
              <TextButton.Provider value={"ذخیره گذرواژه و ورود"}>
                <AuthButton
                  bgcolor={disabledpass ? "#D3D5E2" : "#0A65CD"}
                  disabled={forgotPasswordStep > 1 ? false : true}
                  reduxHandleClick={changePasswordAction}
                />
              </TextButton.Provider>
              <div>
                <Link to={"/dashboard/accountOperations/register"}>
                  <span className="underline text-sm underline-offset-8"
                    data-tip='برای ساخت حساب کلیک کنید.'
                    data-type="light"
                    data-place="top"
                    onMouseEnter={() => setShowToolTip(true)}
                    onMouseLeave={() => {
                      setShowToolTip(false);
                      setTimeout(() => setShowToolTip(true), 0);
                    }}>حساب کاربری ندارم!</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img className="w-100" src={registerFrame_svg} alt="registerFrame" />
            <img className="w-100" src={businessesIcon_png} alt="businessesIcon" />
          </div>
        </div>
      </div>
      {showToolTip && <ToolTip />}
    </div>
  );
}