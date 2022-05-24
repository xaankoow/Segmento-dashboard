import React, { useState } from "react";
import { Link } from "react-router-dom";
import Authmenu from "../../component/authNavMenu/Authmenu";
import AuthInput from "../../component/authInput/AuthInput";
import GoogleIcon from "@mui/icons-material/Google";
import "./register.css";
import AuthButton from "../../component/authButton/AuthButton";
import { useDispatch } from "react-redux";
import { registerUserAction, setEmailRedux, setNameRedux, setPasswordConfirmRedux, setPasswordRedux } from "../../component/Redux/Action";
export const TextButton = React.createContext();
export default function Register() {

  const dispatch =useDispatch();

  const [name,setname]=useState("")
  const [email,setEmail]=useState("")
  const [password1,setPassword1]=useState("")
  const [password2,setPassword2]=useState("")

  return (
    <div className="registerContainer">
      <div className="registerBox">
        <Link to={"/login"}>
          <TextButton.Provider value={"ورود"}>
            <Authmenu />
          </TextButton.Provider>
        </Link>
        <div className="mainbox">
          <div className="inputBox">
            <AuthInput
              textLabelInput="نام و نام خانوادگی"
              width={"560px"}
              typeInput="text"
              reduxHandleChange={setNameRedux}
              
            />
            <AuthInput
              textLabelInput="ایمیل"
              width={"560px"}
              typeInput="email"
              reduxHandleChange={setEmailRedux}
            />
            <div>
              <AuthInput
                textLabelInput="گذرواژه "
                width={"260px"}
                typeInput="password"
                isPassword={true}
                reduxHandleChange={setPasswordRedux}
                />
              <AuthInput
                textLabelInput=" تکرار گذرواژه  "
                width={"260px"}
                typeInput="password"
                isPassword={true}
                reduxHandleChange={setPasswordConfirmRedux}
              />
            </div>
            <div className="registerButtonBox">
             

              
              <div className="btnsBox">
              <Link to={"ValidateEmail"}>
                  <TextButton.Provider value={"عضویت"}>
                    <AuthButton
                      widthValue={"86px"}
                      bgcolor="#0A65CD"
                      reduxHandleClick={registerUserAction}
                    />
                  </TextButton.Provider>
                </Link>
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
          <div className="imgBox">
            <img src="/img/registerFrame.svg" alt="registerFrame" />
            <img src="/img/businessesIcon.png" alt="businessesIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
