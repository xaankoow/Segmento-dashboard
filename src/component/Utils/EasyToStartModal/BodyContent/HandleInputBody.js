import AuthInput from "../../../Auth/authInput/AuthInput";
import { setCharKey1, setCharKey2, setCommercialPage1, setCommercialPage2, setSite1, setSite2, setWebAdress } from "../../../Redux/Action/plan";
import StaticInputText from "../../staticInputText/textInput";
import {useSelector } from 'react-redux';
import { Fragment } from "react";


export const InputEasyToStartModal = (stepModal,setApplyWebAdress) => {
    const { webAdress, charKey1, charKey2, site1, site2, commercialPage1, commercialPage2} = useSelector(state => state.planState);
    // debugger
    switch (stepModal) {

        case 3:
            return <StaticInputText typeInput={"text"} width={"100%"} textLabelInput={"آدرس وبسایت شما"} value={webAdress} reduxHandleChange={setWebAdress} staticText={"https:// "} placeholder={"example.com"} />;
        case 4:
            return (
                <Fragment>
                <div className='container_input_step2'>
                    <AuthInput textLabelInput="کلمات کلیدی" width={"100%"} typeInput="text" reduxHandleChange={setCharKey1} value={charKey1} />
                    <img src="/img/modal/body/arrow.svg" className='arrpw' alt="" />
                    <StaticInputText typeInput={"text"} width={"100%"} textLabelInput={"سایت مرتبط"} staticText={"https://"+webAdress+"/"} value={site1} reduxHandleChange={setSite1} placeholder={"page1"} />
                </div>
                <div className='container_input_step2'>
                    <AuthInput textLabelInput="کلمات کلیدی" width={"100%"} typeInput="text" reduxHandleChange={setCharKey2} value={charKey2} />
                    <img src="/img/modal/body/arrow.svg" className='arrpw' alt="" />
                    <StaticInputText typeInput={"text"} width={"100%"} textLabelInput={"سایت مرتبط"} staticText={"https://"+webAdress+"/"} value={site2} reduxHandleChange={setSite2} placeholder={"page2"} />
                </div>
            </Fragment>
            );
        case 5:
            return (
                <div className='container_input_step3'>
                    <StaticInputText typeInput={"text"} width={"100%"} textLabelInput={"صفحه تجاری"} staticText={"https://"+webAdress+"/" } placeholder={"test"} reduxHandleChange={setCommercialPage1} value={commercialPage1} />
                    <StaticInputText typeInput={"text"} width={"100%"} textLabelInput={"صفحه تجاری"} staticText={"https://"+webAdress+"/" } placeholder={"test"} reduxHandleChange={setCommercialPage2} value={commercialPage2} />
                </div>
            );
        default:
            break;
    }
}