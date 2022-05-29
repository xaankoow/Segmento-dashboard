import React from 'react'
import AuthButton from '../../component/Auth/authButton/AuthButton'
import AuthInput from '../../component/Auth/authInput/AuthInput'
// import Authmenu from '../../component/Auth/authNavMenu/Authmenu'
import GoogleIcon from "@mui/icons-material/Google";
import { TextButton } from '../register/Register'
import { Link } from 'react-router-dom';
import { loginUserAction, setEmailRedux, setNameRedux, setPasswordRedux } from '../../component/Redux/Action';
import Nav from '../../component/navMenu/Nav';

export default function Login() {
  return (
    <div className="registerContainer">
      {/* <Nav/> */}
      <div className="registerBox">
        {/* <TextButton.Provider value={"ثبت نام"}>
          <Authmenu buttonLink={"/"}/>
        </TextButton.Provider> */}
            
        <div className="mainbox">
          <div className="inputBox">
                       <AuthInput textLabelInput="ایمیل" width={"560px"}  typeInput="email" reduxHandleChange={setEmailRedux}/>
                         <AuthInput textLabelInput="گذرواژه " width={"560px"} typeInput="password" isPassword={true}  reduxHandleChange={setPasswordRedux}/>
                        
            <div className="registerButtonBox">
              <div className="btnsBox">
                {/* <Link to={"/"}> */}
                <TextButton.Provider value={"ورود"}>
                  <AuthButton classes={"btn-style"} reduxHandleClick={loginUserAction}/>
                </TextButton.Provider>
                {/* </Link> */}
                <button className="googleButton">
                  <span>حساب گوگل </span> <GoogleIcon className="googleIcon" />
                </button>
              </div>
              <Link to={"/forgetPassword"}>
                <div>
                     <span>گذرواژه خود را فراموش کرده‌اید؟</span>
                 </div>
             </Link>
            </div>
          </div>
          <div className="imgBox">
            <img src="/img/FrameloginSun.png" className='sun' alt="registerFrame" />
            <img src="/img/login.svg" alt="registerFrame" />
            <img src="/img/businessesIcon.png" alt="businessesIcon" />
          </div>
        </div>
      </div>
    </div>
  )
}