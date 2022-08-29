import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { defaultCustomModalStyle } from "../../../../variables/style";
import AuthButton from "../../../Auth/authButton/AuthButton";
import PageTitle from "../../../Dashboard/DashboaedComponents/pageTitle/pageTitle";
import { changePhoneNumber, verifyPhoneNumber } from "../../../service/PhoneNumberServices";
import { AuthVerifyCode } from "../../../shared/Input/AuthVerifyCode";
import Timer from "../../../shared/Time/timer/Timer";
import StaticInputText from "../../staticInputText/textInput";
import { paragraphText } from "./headParagraphText";

export default function PhoneNumberOperations({ registerPhone, editePhone }) {
  const { forgotPasswordStep, handleResendCode } = useSelector(
    (state) => state.userState
  );

  const [modalStep, setModalStep] = useState(1);

  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);
  const [phoneNumberValue, handlePhoneNumberValue] = useState("");
  // timer
  var minutesTimerValue = 1;
  var secondsTimerValue = 59;
  const setNewPhoneNumber = async () => {
    // handle show loadin
    // {
    //   loadingState.ProcessingDelay.push("ContentProductionService");
    //   loadingState.canRequest = false;
    //   await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    // }
    try {
      let formdata = new FormData();
      formdata.append("mobile", phoneNumberValue);

      const { data, status } = await changePhoneNumber(formdata);
      console.log(data.data);
      if(status ==true){
        setModalStep(2)
      }
    } catch (error) {
      // console.log(error);
    }
  };
  const verifyPhoneUserNumber = async () => {
    //handle show loadin
    // {
    //   loadingState.ProcessingDelay.push("ContentProductionService");
    //   loadingState.canRequest = false;
    //   await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    // }
    try {
      let formdata = new FormData();
      formdata.append("code", phoneNumberValue);
      formdata.append("mobile", phoneNumberValue);
      const { data, status } = await verifyPhoneNumber(formdata);
      console.log(data.data);
    } catch (error) {
      // console.log(error);
    }
  };
  useEffect(() => {
    if (handleResendCode == false) {
      let myInterval = setTimeout(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
            setMinutes(1);
            setSeconds(59);
          } else {
            minutesTimerValue = minutesTimerValue - 1;
            secondsTimerValue = 59;
          }
        }
      }, 1000);
    }
  });

  const clearTimerValue = () => {
    if (minutes != 1 || seconds != 59) {
      setMinutes(1);
      setSeconds(59);
    }
  };

  return (
    <Modal
      isOpen={true}
      parentSelector={() =>
        document.querySelector(".app #DASHBOARD .body .main")
      }
      style={defaultCustomModalStyle}
      contentLabel="Example Modal"
    >
      <div className="report_buy_plan w-[530px] rounded-lg">
        <body className="report_container border-0 pt-2 px-2 pb-5">
          <PageTitle
            title={registerPhone ? "تایید شماره همراه" : "تغییر شماره همراه"}
          />
          <div className=" mt-5">{paragraphText(modalStep)}</div>
          <div className=" w-96 mx-auto mt-20">
            {modalStep == 1 ? (
              <StaticInputText
                typeInput={"text"}
                width={"100%"}
                staticText={"09"}
                handleChange={(e)=>handlePhoneNumberValue(e.target.value)}
                textLabelInput={"صفحه هدف"}
                placeholder="شماره همراه"
              />
            ) : (
              <AuthVerifyCode />
            )}
          </div>
          <div className="mt-24">
            {modalStep == 1 ? (
              <AuthButton
                textButton={"دریافت کد تایید"}
                handlerClick={ setNewPhoneNumber}
              />
            ) : (
              <div>
                <AuthButton textButton={"تایید شماره همراه"}  handlerClick={verifyPhoneUserNumber}/>
                {/* {handleResendCode == true ? clearTimerValue() : */}
                {false ? (
                  clearTimerValue()
                ) : (
                  <Timer minutes={minutes} seconds={seconds} />
                )}
              </div>
            )}
          </div>
          {/* <div>
            </div> */}
          {/* <div className='w-full flex items-center justify-between  text-center p-4 border border-[#D9D9D9] rounded-lg mb-5'> <div></div> رسید نهایی خرید اشتراک<img src='/img/modal/buyPlanReport/head/close.svg' className='float-left cursor-pointer rounded-[3px] hover:bg-[#F352421A]' onClick={() => handleClose()} /></div> */}

          {/* <PurchaseInvoiceContent packageUuid={packageUuid}/> */}
          {/* <AuthButton textButton={"پرداخت"} reduxHandleClick={buyPlan} /> */}
        </body>
      </div>
    </Modal>
  );
}
