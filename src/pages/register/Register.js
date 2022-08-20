import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import AuthInput from "../../component/Auth/authInput/AuthInput";
import GoogleIcon from "@mui/icons-material/Google";
import "./register.css";
import AuthButton from "../../component/Auth/authButton/AuthButton";
import { RegisterUserAction, setEmailRedux, setNameRedux, setPasswordConfirmRedux, setPasswordRedux } from "../../component/Redux/Action";
import Nav from "../../component/Dashboard/DashboaedComponents/navMenu/Nav";
export const TextButton = React.createContext();
export default function Register() {


  return (
    <div className="flex flex-col items-center w-full justify-center overflow-hidden">
      <Nav path={"login"} />
      <div className="w-full mt-12 px-28">
        <div className="gap-10 items-center flex flex-row justify-between 2xl:py-20 md:py-10 min-w-full ">
          <div className="w-6/12 flex flex-col items-center gap-11">
            <AuthInput
              textLabelInput="نام و نام خانوادگی"
              width={"100%"}
              typeInput="text"
              reduxHandleChange={setNameRedux}
            />
            <AuthInput
              textLabelInput="ایمیل"
              width={"100%"}
              reduxHandleChange={setEmailRedux}
              errorTextId="errRejesterFormatEmail"
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
                <button className="bg-[#D3D5E2] text-white rounded-lg flex gap-2 items-center py-2 px-3">
                  <span className="text-white">	ورود با گوگل</span> <GoogleIcon className="google w-6 h-6" />
                </button>
              </div>
              <Link to={"/dashboard/accountOperations/login"}>
                <div>
                  <span className="underline text-sm underline-offset-8">حساب کاربری دارم!</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img className="w-100" src="/img/registerFrame.svg" alt="registerFrame" />
            <img className="w-100" src="/img/businessesIcon.png" alt="businessesIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
