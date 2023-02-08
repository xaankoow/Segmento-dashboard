import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import AuthInput from "../../component/Auth/authInput/AuthInput";
import GoogleIcon from "@mui/icons-material/Google";
import "./register.css";
import AuthButton from "../../component/Auth/authButton/AuthButton";
import { RegisterUserAction, setEmailRedux, setNameRedux, setPasswordConfirmRedux, setPasswordRedux } from "../../component/Redux/Action";
import Nav from "../../component/Dashboard/DashboaedComponents/navMenu/Nav";
import ToolTip from "../../component/Utils/ToolTip";
import { CheckFormat } from "../../component/Utils/Auth/CheckFormtValue";
import registerFrame_svg from "../../assets/img/registerFrame.svg";
import businessesIcon_svg from "../../assets/img/businessesIcon.png";
import SubmitForm from "../../component/Utils/Submit";

export const TextButton = React.createContext();
export default function Register() {

  const [showToolTip, setShowToolTip] = useState(true);

  return (
    <div className="flex flex-col items-center w-full justify-center overflow-hidden">
      <Nav path={"login"} />
      <div className="w-full mt-12 px-28">
        <div className="gap-10 items-center flex flex-row justify-between 2xl:py-20 md:py-10 min-w-full ">
          <SubmitForm submitFun={RegisterUserAction} dispatchOption formClass={"w-6/12 flex flex-col items-center gap-11"}>
            {/* <div className="w-6/12 flex flex-col items-center gap-11"> */}
              <AuthInput
                textLabelInput="نام و نام خانوادگی"
                width={"100%"}
                typeInput="text"
                reduxHandleChange={setNameRedux}
                errorTextId="errRejesterFormatFullName"
              />
              <AuthInput
                textLabelInput="ایمیل"
                width={"100%"}
                reduxHandleChange={setEmailRedux}
                errorTextId="errRejesterFormatEmail"
              />
              <div className="flex justify-between gap-3 w-full"
                data-tip='با ترکیب علائم (!@#) و اعداد (1-9) و حروف انگلیسی (A-z) گذرواژه طولانی و مطمئن (حداقل 8 حرف) بسازید.'
                data-type="light"
                data-place="bottom"
                onMouseEnter={() => setShowToolTip(true)}
                onMouseLeave={() => {
                  setShowToolTip(false);
                  setTimeout(() => setShowToolTip(true), 0);
                }}>

                <AuthInput
                  textLabelInput="گذرواژه "
                  width={"100%"}
                  typeInput="password"
                  isPassword={true}
                  errorTextId="errRejesterPassword"
                  reduxHandleChange={setPasswordRedux}
                  checkStrongPass
                // infoStrongPass
                />
                <AuthInput
                  textLabelInput=" تکرار گذرواژه  "
                  width={"100%"}
                  typeInput="password"
                  isPassword={true}
                  reduxHandleChange={setPasswordConfirmRedux}
                  errorTextId="errRejesterPasswordConfirm"
                />
              </div>
              <div className="flex items-center w-full justify-between">
                <div className="flex gap-5">
                  <TextButton.Provider value={"عضویت"}>
                    <AuthButton
                      classes={"btn-style"}
                      reduxHandleClick={RegisterUserAction}
                    />
                  </TextButton.Provider>
        <Link to={`/dashboard/accountOperations/login`} className='btn-style'>ورود</Link>
                  {/* <button className="bg-[#D3D5E2] text-white rounded-lg flex gap-2 items-center py-2 px-3">
                    <span className="text-white">	ورود با گوگل</span> <GoogleIcon className="google w-6 h-6" />
                  </button> */}
                </div>
                <Link to={"/dashboard/accountOperations/login"}>
                  <div>
                    <span className="underline text-sm underline-offset-8">حساب کاربری دارم!</span>
                  </div>
                </Link>
              </div>
            {/* </div> */}
          </SubmitForm>
          <div className="flex flex-col items-center gap-4">
            <img className="w-100" src={registerFrame_svg} alt="registerFrame" />
            <img className="w-100" src={businessesIcon_svg} alt="businessesIcon" />
          </div>
        </div>
      </div>
      {showToolTip && <ToolTip />}
    </div>
  );
}
