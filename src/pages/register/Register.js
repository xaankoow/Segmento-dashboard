import React, { useState } from "react";
import { Link } from "react-router-dom";
import Authmenu from "../../component/Auth/authNavMenu/Authmenu";
import AuthInput from "../../component/Auth/authInput/AuthInput";
import GoogleIcon from "@mui/icons-material/Google";
import "./register.css";
import AuthButton from "../../component/Auth/authButton/AuthButton";
import { useDispatch } from "react-redux";
import { registerUserAction, setEmailRedux, setNameRedux, setPasswordConfirmRedux, setPasswordRedux } from "../../component/Redux/Action";
// import Nav from "../../component/Dashboard/DashboaedComponents/navMenu/Nav";
export const TextButton = React.createContext();
export default function Register() {

  const dispatch =useDispatch();

  const [name,setname]=useState("")
  const [email,setEmail]=useState("")
  const [password1,setPassword1]=useState("")
  const [password2,setPassword2]=useState("")

  return (
    <div className="md:w-11/12 2xl:w-10/12">
     
      {/* <Nav/> */}
          {/* <TextButton.Provider value={"ورود"}>
            <Authmenu buttonLink={"/login"}/>
          </TextButton.Provider> */}
       {/* <Nav/> */}
        <div className="gap-10 items-center flex md:flex-col md:flex-col-reverse justify-between 2xl:py-20 md:py-10 min-w-full">
          <div className="w-7/12 flex flex-col items-center gap-8 md:min-w-full">
            <AuthInput
              textLabelInput="نام و نام خانوادگی"
              width={"100%"}
              typeInput="text"
              reduxHandleChange={setNameRedux}
            />
            <AuthInput
              textLabelInput="ایمیل"
              width={"100%"}
              typeInput="email"
              reduxHandleChange={setEmailRedux}
            />
            <div className="flex justify-between gap-3 w-full">
              <AuthInput
                textLabelInput="گذرواژه "
                width={"100%"}
                typeInput="password"
                isPassword={true}
                reduxHandleChange={setPasswordRedux}
                />
              <AuthInput
                textLabelInput=" تکرار گذرواژه  "
                width={"100%"}
                typeInput="password"
                isPassword={true}
                reduxHandleChange={setPasswordConfirmRedux}
              />
            </div>
            <div className="registerButtonBox">
              <div className="btnsBox">
              {/* <Link to={"ValidateEmail"}> */}
                  <TextButton.Provider value={"عضویت"}>
                    <AuthButton
                      // widthValue={"86px"}
                      // bgcolor="#0A65CD"
                      classes={"btn-style"}
                      reduxHandleClick={registerUserAction}
                    />
                  </TextButton.Provider>
                {/* </Link> */}
                <button className="googleButton">
                  <span>حساب گوگل </span> <GoogleIcon className="googleIcon" />
                </button>
              </div>
              <Link to={"/login"}>
                <div>
                  <span>حساب کاربری دارم!</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img className="w-80" src="/img/registerFrame.svg" alt="registerFrame" />
            <img className="w-80"  src="/img/businessesIcon.png" alt="businessesIcon" />
          </div>
        </div>
      
    </div>
  );
}
