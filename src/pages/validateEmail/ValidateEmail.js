import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AuthButton from "../../component/Auth/authButton/AuthButton";
import AuthInput from "../../component/Auth/authInput/AuthInput";
import Nav from "../../component/Dashboard/DashboaedComponents/navMenu/Nav";
import {
  checkVerifyEmailAction,
  sendCodEmailAction,
  setAuth1Redux,
  setAuth2Redux,
  setAuth3Redux,
  setAuth4Redux,
} from "../../component/Redux/Action";
import ToolTip from "../../component/Utils/ToolTip";
import { TextButton } from "../register/Register";
// css
import "./validateEmail.css";
import Fi_rr_life_ring_svg from '../../assets/img/fi-rr-life-ring.svg';
import contactUs_svg from '../../assets/img/contactUs.svg';
import back_svg from '../../assets/img/back.svg';
import SubmitForm from "../../component/Utils/Submit";

export default function ValidateEmail() {

  const [showToolTip, setShowToolTip] = useState(true);

  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center w-full justify-center overflow-hidden">
      <Nav path={"login"} />
      <div className="registerContainer 	">
        <div className="mt-14">
          <div className="leading-8">
            <p className="text-lg m-auto w-7/12 text-justify ">
              خیلی خوشحالیم که از امروز برای خلق ارزش همراه «سگمنتو» هستید، تلاش ما این هست که در کنار رشد کسب‌و‌کارتان، از محصولات ما حس خوبی دریافت کنید.
              <br />
              برای آغاز ماجراجویی‌ در سگمنتو همین حالا کدی که از طریق ایمیل دریافت کردید رو در کادر زیر بنویسید.
              <br />
              <br />

              اگر ایمیلی دریافت نکردید، روی گزینه دریافت مجدد کد، کلیک کنید. کامپیوترها خیلی هم باهوش نیستن و ممکنه اشتباه کرده باشن :)

            </p>
          </div>
          <div className="flex flex-col justify-cneter items-center gap-3 mt-20 mb-7">
            <span>کد فعال سازی</span>
            <SubmitForm SubmitForm={checkVerifyEmailAction} dispatchOption formClass={"flex gap-5"}>

              {/* <div className="flex gap-5"> */}
              <AuthInput
                classes={"verify_email_cod input_selector_4"}
                
                maxlength={1}
                pressNumber={true}
                reduxHandleChange={setAuth1Redux}
                selectWithOnClick
              />
              <AuthInput
                classes={"verify_email_cod input_selector_3"}
                
                maxlength={1}
                pressNumber={true}
                reduxHandleChange={setAuth2Redux}
                selectWithOnClick
              />
              <AuthInput
                classes={"verify_email_cod input_selector_2"}
                
                maxlength={1}
                pressNumber={true}
                reduxHandleChange={setAuth3Redux}
                selectWithOnClick
              />
              <AuthInput
                classes={"verify_email_cod"}
                
                maxlength={1}
                pressNumber={true}
                reduxHandleChange={setAuth4Redux}
                selectWithOnClick
              />
              {/* </div> */}

            </SubmitForm>




          </div>
          <div className="h-10 w-7/12 m-auto text-center relative">
            <Link to={"/dashboard/accountOperations/login"}>
              <img
                src={back_svg}
                alt="back"
                className="absolute py-2 top-0 right-0"
              />
            </Link>
            <div className="m-auto">
              <TextButton.Provider value={"تایید ایمیل و ورود"}>
                <AuthButton
                  bgcolor={"#0A65CD"}
                  reduxHandleClick={checkVerifyEmailAction}
                  classes="m-auto"
                />
              </TextButton.Provider>
            </div>
            <Link
              to={"#"}
              onClick={() => dispatch(sendCodEmailAction())}
              className="underline underline-offset-4 absolute top-0 left-0 py-2"
              data-tip='با کلیک‌کردن، کد جدید دریافت می‌کنید.'
              data-type="light"
              data-place="top"
              onMouseEnter={() => setShowToolTip(true)}
              onMouseLeave={() => {
                setShowToolTip(false);
                setTimeout(() => setShowToolTip(true), 0);
              }}
            >
              دریافت مجدد کد
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center mx-auto absolute bottom-5">
        <img src={contactUs_svg} alt="contactUs"
          data-tip="شماره تماس: 38331497-051"
          data-type="light"
          data-place="top"
          data-class="sizeClass"
          onMouseEnter={() => setShowToolTip(true)}
          onMouseLeave={() => {
            setShowToolTip(false);
            setTimeout(() => setShowToolTip(true), 0);
          }}
        />
        <a href="https://segmento.ir/support">
          <img src={Fi_rr_life_ring_svg} alt="fi-rr-life-ring.svg" />
        </a>
      </div>
      {showToolTip && <ToolTip />}
    </div>
  );
}
