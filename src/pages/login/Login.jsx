import React from 'react'
import AuthButton from '../../component/Auth/authButton/AuthButton'
import AuthInput from '../../component/Auth/authInput/AuthInput'
// import Authmenu from '../../component/Auth/authNavMenu/Authmenu'
import GoogleIcon from "@mui/icons-material/Google";
import { TextButton } from '../register/Register'
import { Link } from 'react-router-dom';
import { loginUserAction, setEmailRedux, setNameRedux, setPasswordRedux } from '../../component/Redux/Action';
import Nav from '../../component/Dashboard/DashboaedComponents/navMenu/Nav';

export default function Login() {
  return (
    <div className="w-full px-28">
      {/* <Nav/> */}
     
        {/* <TextButton.Provider value={"ثبت نام"}>
          <Authmenu buttonLink={"/"}/>
        </TextButton.Provider> */}

        <div className="gap-10 flex items-center  md:flex-col md:flex-col-reverse justify-between 2xl:py-10 md:py-10 min-w-full">
          <div className="w-6/12 flex flex-col items-center gap-11 md:min-w-full">
            <AuthInput textLabelInput="ایمیل" width={"100%"}   reduxHandleChange={setEmailRedux} errorTextId="errRejesterFormatEmail"/>
            <AuthInput textLabelInput="گذرواژه " width={"100%"} typeInput="password" isPassword={true} reduxHandleChange={setPasswordRedux} errorTextId="errRejesterPassword"/>

            <div className="flex items-center w-full justify-between">
              <div className="flex gap-5">
                {/* <Link to={"/"}> */}
                <TextButton.Provider value={"ورود"}>
                  <AuthButton classes={"btn-style"} reduxHandleClick={loginUserAction} />
                </TextButton.Provider>
                {/* </Link> */}
                <button className="bg-lightGray text-white rounded-lg flex gap-2 items-center py-2 px-3">
                  <span className="text-white">حساب گوگل </span> <GoogleIcon className="google w-6 h-6" />
                </button>
              </div>
              <Link to={"/forgotPassword"}>
                <div>
                  <span className='underline text-sm underline-offset-8'> برای ورود به کمک نیاز دارم.   </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <img className="w-20" src="/img/FrameloginSun.png" alt="registerFrame" />
            <img className="w-100" src="/img/login.svg" alt="registerFrame" />
            <img className="w-100" src="/img/businessesIcon.png" alt="businessesIcon" />
          </div>
        </div>
      
    </div>
  )
}