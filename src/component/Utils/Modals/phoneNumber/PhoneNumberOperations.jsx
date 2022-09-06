import React, { Fragment, useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { defaultCustomModalStyle, modalParentSelector } from "../../../../variables/style";
import AuthButton from "../../../Auth/authButton/AuthButton";
import PageTitle from "../../../Dashboard/DashboaedComponents/pageTitle/pageTitle";
import { coreUser, setPropCoreUser } from "../../../Redux/Action";
import {
  changePhoneNumber,
  verifyPhoneNumber,
} from "../../../service/PhoneNumberServices";
import { AuthVerifyCode } from "../../../shared/Input/AuthVerifyCode";
import Timer from "../../../shared/Time/timer/Timer";
import PopUp from "../../PopUp/PopUp";
import { InputError } from "../../showInputError";
import StaticInputText from "../../staticInputText/textInput";
import ToolTip from "../../ToolTip";
import { paragraphText } from "./headParagraphText";

import moveBackIco_svg from "../../../../assets/img/modal/footer/moveBack.svg"
// import moveBackIco from "./src/assets/img/modal/footer/moveBack"

export default function PhoneNumberOperations({ registerPhone, editePhone }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userData } = useSelector((state) => state.userState);

  // Auth verify code input state
  const { auth1, auth2, auth3, auth4 } = useSelector(
    (state) => state.userState
  );

  // modal step
  const [modalStep, setModalStep] = useState(2);

  // modal step
  const [operationType, setOperationType] = useState("");

  // check change phone number completed
  const [checkCompleted, setCheckCompleted] = useState(false);

  // check change phone number completed
  const [checkResendCode, setCheckResendCode] = useState(true);

  // handle show tool tip
  const [showToolTip, setShowToolTip] = useState(true);

  // handle show tool tip
  const [showModal, setShowModal] = useState(true);

  //timer state
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);
  const [phoneNumberValue, handlePhoneNumberValue] = useState("");

  // timer
  var minutesTimerValue = 1;
  var secondsTimerValue = 59;
  const loadingState = useSelector((state) => state.loadingState);
  const { canRequest } = useSelector((state) => state.loadingState);
  // api
  const setNewPhoneNumber = async () => {
    if (phoneNumberValue.length!=9) {
      InputError("phoneNumberOperationsErrText", "لطفا یک شماره تلفن معتبر وارد کنید");
    } else {
      
      // handle show loadin
      {
        loadingState.ProcessingDelay.push("changephoneNumberService");
        loadingState.canRequest = false;
        await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
      }
      try {
        let formdata = new FormData();
        formdata.append("mobile", "09" + phoneNumberValue);
        // debugger
        if (checkResendCode) {
          // set timer
          const { data } = await changePhoneNumber(formdata);
          if (data.status) {
            setCheckResendCode(false);
            setModalStep(2);
          } else {
            InputError("phoneNumberOperationsErrText", data.errors[0]);
          }
        }
      } catch (error) {
        // console.log(error);
      }
      {
        var removeProcessingItem = loadingState.ProcessingDelay.filter(
          (item) => item != "changephoneNumberService"
        );
        loadingState.ProcessingDelay = removeProcessingItem;
        loadingState.canRequest = removeProcessingItem > 0 ? false : true;
        await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
      }
    }
  };

  const verifyPhoneUserNumber = async () => {
    // handle show loadin
    {
      loadingState.ProcessingDelay.push("verifyPhoneNumber");
      loadingState.canRequest = false;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
    try {
      let formdata = new FormData();
      formdata.append("code", auth4 + auth3 + auth2 + auth1);
      formdata.append("mobile", "09" + phoneNumberValue);
      const { data, status, code } = await verifyPhoneNumber(formdata);

      if ((data.code == 200) & (data.status == true)) {
        // dispatch(setPropCoreUser("mobile", data.user.mobile));
        dispatch(coreUser());
        setCheckCompleted(true);
      }
      if (data.errors.length != 0) {
        InputError("authVerifyCodeList", "کد فعال‌سازی اشتباه است.");

        toast.error(data.errors[0]);
      }
    } catch (error) {
      // console.log(error);
    }
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(
        (item) => item != "verifyPhoneNumber"
      );
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
  };

  useEffect(() => {
    if (checkResendCode == false) {
      let myInterval = setTimeout(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
            setCheckResendCode(true);
            setMinutes(1);
            setSeconds(59);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
            // minutesTimerValue = minutesTimerValue - 1;
            // secondsTimerValue = 59;
          }
        }
      }, 1000);
    }
    // debugger
    if (userData.user != undefined && operationType == "") {
      if (userData.user.mobile == null) {
        setOperationType("verify");
      } else {
        setOperationType("change");
      }
    }
  });

  // reset redux state
  useEffect(() => {
    return () => {
      // clear redux state after the close this section
    };
  }, []);

  useEffect(() => {
    
  }, [operationType]);

  // clear timer
  const clearTimerValue = () => {
    if (minutes != 1 || seconds != 59) {
      setMinutes(1);
      setSeconds(59);
    }
  };

  const customStyles = {
    content: {
      top: '43vh',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgrounColor: "red",
      'z-index': '100'
    },
  };
  return (
    <div id="phoneNumberOparationLayOut">
      {showModal && (
        <div>
          {checkCompleted ? (
            <PopUp
              clickHandler={() =>
                operationType == "verify" ? setShowModal(false) : navigate(-1)
              }
              image={"/img/popUp/tik.svg"}
              type={"sucsess"}
              title={
                operationType == "verify"
                  ? "شماره همراه شما ذخیره شد."
                  : "شماره همراه شما تغییر کرد."
              }
              text={"حالا می‌توانید کارتان را ادامه کنید."}
              buttonText={"باشه، بزن بریم."}
            />
          ) : (
            <Modal
              isOpen={true}
              parentSelector={() =>
                document.querySelector(".app #DASHBOARD")
              }
              style={defaultCustomModalStyle}
              onRequestClose={()=>operationType!="verify"&&navigate(-1)}
              contentLabel="Example Modal"
            >
              <div className="report_buy_plan w-[530px] rounded-lg transition-all">
                <PageTitle
                  closeIco={operationType != "verify" && true}
                  // title={registerPhone ? "تایید شماره همراه" : "تغییر شماره همراه"}
                  title={
                    userData.user != undefined && userData.user.mobile == null
                      ? "تایید شماره همراه"
                      : "تغییر شماره همراه"
                  }
                />
                <body className=" bg-[#fff]  pt-2 px-2 pb-5">
                  <div className=" mt-5">{paragraphText(modalStep,operationType)}</div>
                  <div className=" w-96 mx-auto mt-20">
                    {modalStep == 1 ? (
                      <StaticInputText
                        typeInput={"text"}
                        width={"100%"}
                        staticText={"09"}
                        textLabelInput={"شماره همراه"}
                        placeholder=""
                        handleChange={(e) =>
                          handlePhoneNumberValue(e.target.value)
                        }
                        maxlength={9}
                        errorTextId="phoneNumberOperationsErrText"
                      />
                    ) : (
                      <AuthVerifyCode />
                    )}
                  </div>
                  <div className="mt-24 px-3">
                    {modalStep == 1 ? (
                      <AuthButton
                        textButton={"دریافت کد تایید"}
                        handlerClick={setNewPhoneNumber}
                        classes="m-auto"
                      />
                    ) : (
                      <div className="flex justify-between items-center">
                        <div>
                          <img src={moveBackIco_svg} alt="move Back" className=" cursor-pointer ml-32" onClick={()=> setModalStep(1)}/>
                        </div>
                        <AuthButton
                          textButton={"تایید کد"}
                          handlerClick={verifyPhoneUserNumber}
                        />
                        <div className=" w-1/3">
                          <Timer minutes={minutes} seconds={seconds} />
                          <span
                            onClick={() =>
                              checkResendCode && setNewPhoneNumber()
                            }
                            className={`mr-3 border-b cursor-pointer  ${
                              !checkResendCode &&
                              " text-sectionDisable cursor-default"
                            } hover:text-[#0AC7E2]`}
                            data-tip="با کلیک‌کردن، کد جدید دریافت می‌کنید."
                            data-type="light"
                            data-place="top"
                            onMouseEnter={() => setShowToolTip(true)}
                            onMouseLeave={() => {
                              setShowToolTip(false);
                              setTimeout(() => setShowToolTip(true), 0);
                            }}
                          >
                            دریافت مجدد کد
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </body>
              </div>
              {showToolTip && <ToolTip />}
            </Modal>
          )}
        </div>
      )}
    </div>
  );
}
