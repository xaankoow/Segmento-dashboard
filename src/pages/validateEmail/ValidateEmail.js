import React from "react";
import AuthButton from "../../component/Auth/authButton/AuthButton";
import AuthInput from "../../component/Auth/authInput/AuthInput";
import Authmenu from "../../component/Auth/authNavMenu/Authmenu";
import Nav from "../../component/navMenu/Nav";
import { checkVerifyEmailAction, registerUserAction, setAuth1Redux, setAuth2Redux, setAuth3Redux, setAuth4Redux } from "../../component/Redux/Action";
import { TextButton } from "../register/Register";
// css
import "./validateEmail.css";

export default function ValidateEmail() {
  return (
    <div className="registerContainer">
      {/* <div className="registerBox"> */}
      {/* <Nav/> */}
        {/* <TextButton.Provider value={"ورود"}>
          <Authmenu buttonLink={"/login"}/>
        </TextButton.Provider> */}
      {/* </div> */}
      <div className="main-validate-Email-box">
        <div className="validateEmailContai">
          <p>
            مطمعن باشین این یه متن از پیش آماده شده نیست، ما خیلی خوشحالیم که
            شما از امروز همراه ما هستی، قطعا قول میدیم هر روز شما هم اینطوری خوب
            و خوش باشه چون تلاشمون اینه کنار خلق ارزش، حس خوبی هم از کار با
            محصولات ما دریافت کنید و از اون گذشته، ما دوست داریم شما در کسب و
            کارتون به اوج برسید. زود باشین برین از ایمیل تون کد فعال سازی حساب
            رو بردارین و ماجراجویی هاتون رو در سگمنتو شروع کنید. ( اگرم دیدین
            ایمیلی نیومده، مجددا درخواست بدین، کامپیوترها خیلی هم باهوش نیستن و
            ممکنه اشتباه کرده باشن :)
          </p>
        </div>
        <div className="validateEmailChildBox">
          <span>کد فعال سازی</span>
          <div className="verify_cod_container">
            <AuthInput classes={"verify_email_cod input_selector_4"} notCheckValue={true} maxlength="1"pressNumber={true} reduxHandleChange={setAuth1Redux}/>
            <AuthInput classes={"verify_email_cod input_selector_3"} notCheckValue={true} maxlength="1"pressNumber={true} reduxHandleChange={setAuth2Redux}/>
            <AuthInput classes={"verify_email_cod input_selector_2"} notCheckValue={true} maxlength="1"pressNumber={true} reduxHandleChange={setAuth3Redux}/>
            <AuthInput classes={"verify_email_cod"} notCheckValue={true} maxlength="1"pressNumber={true} reduxHandleChange={setAuth4Redux}/>
          </div>
        </div>
        <div className="validateEmailChildBox2">
          <img src="/img/back.svg" alt="back" />
          <div className="validateButton">
            <TextButton.Provider value={"تایید ایمیل"}>
              <AuthButton bgcolor={"#0A65CD"} reduxHandleClick={checkVerifyEmailAction}/>
            </TextButton.Provider>
          </div>
          <span className="getemailtext">دریافت مجدد کد</span>
        </div>
        <div className="validateEmailIconBox">
          <img src="/img/contactUs.svg" alt="contactUs" />
          <img src="/img/fi-rr-life-ring.svg" alt="fi-rr-life-ring.svg" />
        </div>
      </div>
    </div>
  );
}
