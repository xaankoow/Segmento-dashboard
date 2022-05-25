import React, { useState } from "react";
import { Link } from "react-router-dom";
import Authmenu from "../../component/Auth/authNavMenu/Authmenu";
import AuthInput from "../../component/Auth/authInput/AuthInput";
import GoogleIcon from "@mui/icons-material/Google";
import "./register.css";
import AuthButton from "../../component/Auth/authButton/AuthButton";
export const TextButton = React.createContext();
export default function Register() {
  return (
    <div className="registerContainer">
      <div className="registerBox">
        
          <TextButton.Provider value={"ورود"}>
            <Authmenu buttonLink={"/login"}/>
          </TextButton.Provider>
       
        <div className="mainbox">
          <div className="inputBox">
            <AuthInput
              textLabelInput="نام و نام خانوادگی"
              width={"560px"}
              typeInput="text"
              
            />
            <AuthInput
              textLabelInput="ایمیل"
              width={"560px"}
              typeInput="email"
            />
            <div>
              <AuthInput
                textLabelInput="گذرواژه "
                width={"258px"}
                typeInput="password"
                isPassword={true}
              />
              <AuthInput
                textLabelInput=" تکرار گذرواژه  "
                width={"258px"}
                typeInput="password"
                isPassword={true}
              />
            </div>
            <div className="registerButtonBox">
             

              
              <div className="btnsBox">
              <Link to={"ValidateEmail"}>
                  <TextButton.Provider value={"عضویت"}>
                    <AuthButton
                      widthValue={"86px"}
                      bgcolor="#0A65CD"
                    
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
