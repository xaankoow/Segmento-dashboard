import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import { defaultCustomModalStyle } from "../../../../variables/style";
import AuthButton from "../../../Auth/authButton/AuthButton";
import PageTitle from "../../../Dashboard/DashboaedComponents/pageTitle/pageTitle";
import { changePhoneNumber, verifyPhoneNumber } from "../../../service/PhoneNumberServices";
import { AuthVerifyCode } from "../../../shared/Input/AuthVerifyCode";
import Timer from "../../../shared/Time/timer/Timer";
import PopUp from '../../PopUp/PopUp'
import StaticInputText from "../../staticInputText/textInput";
import ToolTip from '../../ToolTip'
import { paragraphText } from "./headParagraphText";

export default function PhoneNumberOperations({ registerPhone, editePhone }) {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { handleResendCode, checkRegisterComplete } = useSelector(state => state.userState)

    // modal step
    const [modalStep, setModalStep] = useState(1);

    // handle show tool tip
    const [showToolTip, setShowToolTip] = useState(true);

    //timer state
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(59);
    const [phoneNumberValue, handlePhoneNumberValue] = useState("");

    // timer
    var minutesTimerValue = 1;
    var secondsTimerValue = 59;

    const setNewPhoneNumber = async () => {
        //handle show loadin
        // {
        //   loadingState.ProcessingDelay.push("ContentProductionService");
        //   loadingState.canRequest = false;
        //   await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
        // }
        try {
            let formdata = new FormData();
            formdata.append("mobile", phoneNumberValue);

            // set timer
            const { data, status } = await changePhoneNumber(formdata);
            console.log(data.data);
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
        if (handleResendCode == true) {
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


    // reset redux state
    useEffect(() => {

        return () => {
            // clear redux state after the close this section
        }
    }, [])

    // clear timer
    const clearTimerValue = () => {
        if (minutes != 1 || seconds != 59) {

            setMinutes(1);
            setSeconds(59);
        }
    }

    return (
        <div>
            {checkRegisterComplete ? (
                <PopUp
                    clickHandler={() => navigate(-1)}
                    image={"/img/popUp/tik.svg"}
                    type={"sucsess"}
                    title={"موفقیت آمیز"}
                    text={registerPhone ? "شماره همراه شما با موفقیت در سگمنتو تایید شد !" : "شماره همراه شما با موفقیت در سگمنتو تغییر داده شد !"}
                    buttonText={"باشه، فهمیدم!"}
                />
            ) : (
                <Modal
                    isOpen={true}
                    parentSelector={() => document.querySelector(".app #DASHBOARD .body .main")}
                    style={defaultCustomModalStyle}
                    contentLabel="Example Modal"
                >
                    <div className='report_buy_plan w-[530px] rounded-lg'>
                        <PageTitle title={registerPhone ? "تایید شماره همراه" : "تغییر شماره همراه"} />
                        <body className=' bg-[#fff]  pt-2 px-2 pb-5'>
                            <div className=' mt-5'>
                                {paragraphText(modalStep)}
                            </div>
                            <div className=' w-96 mx-auto mt-20'>
                                {modalStep == 1 ? (
                                    <StaticInputText typeInput={"text"} width={"100%"} staticText={"09"} textLabelInput={"صفحه هدف"} placeholder="شماره همراه" />
                                ) : <AuthVerifyCode />}
                            </div>
                            <div className='mt-24 px-3'>
                                {modalStep == 1 ? <AuthButton textButton={"دریافت کد تایید"} /> :
                                    (
                                        <div className='flex justify-between items-center'>
                                            <AuthButton textButton={"تایید شماره همراه"} />
                                            <div className=' w-1/3'>
                                                {false ? clearTimerValue() :
                                                    <Timer
                                                        minutes={minutes}
                                                        seconds={seconds}
                                                    />
                                                }
                                                <Link
                                                    to={"#"}
                                                    // onClick={() => dispatch(sendCodEmailAction())}
                                                    className="mr-3 border-b"
                                                    data-tip='با کلیک‌کردن، کد جدید دریافت می‌کنید.'
                                                    data-type="light"
                                                    data-place="top"
                                                    onMouseEnter={() => setShowToolTip(true)}
                                                    onMouseLeave={() => {
                                                        setShowToolTip(false);
                                                        setTimeout(() => setShowToolTip(true), 0);
                                                    }}>
                                                    دریافت مجدد کد
                                                </Link>
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
    )
}
