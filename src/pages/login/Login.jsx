import React, { useState } from 'react'
import AuthButton from '../../component/Auth/authButton/AuthButton'
import AuthInput from '../../component/Auth/authInput/AuthInput'
// import Authmenu from '../../component/Auth/authNavMenu/Authmenu'
import GoogleIcon from "@mui/icons-material/Google";
import { TextButton } from '../register/Register'
import { Link } from 'react-router-dom';
import { loginUserAction, setEmailRedux, setNameRedux, setPasswordRedux } from '../../component/Redux/Action';
import Nav from '../../component/Dashboard/DashboaedComponents/navMenu/Nav';
import ToolTip from '../../component/Utils/ToolTip';
import FrameloginSun_png from '../../assets/img/FrameloginSun.png';
import login_svg from '../../assets/img/login.svg';
import businessesIcon_png from '../../assets/img/businessesIcon.png';

export default function Login() {

  const [showToolTip, setShowToolTip] = useState(true);

  return (
    <div className="flex flex-col items-center w-full justify-center overflow-hidden">
      <Nav path={"register"} />
      <div className="w-full px-28">
        <div className="gap-10 flex items-center flex-row justify-between 2xl:py-10 md:py-10 min-w-full">
          <div className="w-6/12 flex flex-col items-center gap-11">
            <AuthInput textLabelInput="ایمیل" width={"100%"} reduxHandleChange={setEmailRedux} errorTextId="errRejesterFormatEmail" />
            <AuthInput textLabelInput="گذرواژه " width={"100%"} typeInput="password" isPassword={true} reduxHandleChange={setPasswordRedux} errorTextId="errRejesterPassword" />
            <div className="flex items-center w-full justify-between">
              <div className="flex gap-5">
                {/* <TextButton.Provider value={"ورود"}> */}
                  <AuthButton classes={"btn-style"} reduxHandleClick={loginUserAction} textButton={"ورود"}/>
                {/* </TextButton.Provider> */}
                <button className=" bg-[#D3D5E2] text-white rounded-lg flex gap-2 items-center py-2 px-3">
                  <span className="text-white">	ورود با گوگل</span> <GoogleIcon className="google w-6 h-6" />
                </button>
              </div>
              <Link to={"/dashboard/accountOperations/forgotPassword"}>
                <div
                data-tip='برای بازیابی گذرواژه کلیک کنید.' 
                data-type="light" 
                data-place="top"
                onMouseEnter={() => setShowToolTip(true)} 
                onMouseLeave={() => {
                  setShowToolTip(false);
                  setTimeout(() => setShowToolTip(true), 0);
                }}>
                  <span className='underline text-sm underline-offset-8'> برای ورود به کمک نیاز دارم.   </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <img className="w-20  rotate_sun" src={FrameloginSun_png} alt="registerFrame" />
            <img className="w-100" src={login_svg} alt="registerFrame" />
            <img className="w-100" src={businessesIcon_png} alt="businessesIcon" />
          </div>
        </div>
      </div>
      {showToolTip && <ToolTip />}
    </div>
  )
}