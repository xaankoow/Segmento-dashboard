import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AuthButton from "../../Auth/authButton/AuthButton";
import AuthInput from "../../Auth/authInput/AuthInput";
import { setCommercialPages, setKeyWords, setWebAdress, setWebsitePages } from "../../Redux/Action/workSpace";
import StaticInputText from "../staticInputText/textInput";

export const InputGetWorkSpaceInfo = (step, countInput, handleAddStateCountInput) => {
    const [addKeyChar, setAddKeyChar] = useState(4)
    const [addKeyCharMap, setAddKeyCharMap] = useState([])
    const [addCommercialPageMap, setAddCommercialPageMap] = useState([])
    const [addWebsitePageMap, setAddWebsitePageMap] = useState([])
    const [addCompetitorSite, setAddCompetitorSite] = useState([])
    // const [addKeyCharMap, setAddKeyCharMap] = useState([])

    const dispatch = useDispatch();

    const handleSetReducerState = (value, state) => {
        switch (state) {
            case "keyWord1":
                dispatch(setKeyWords(state, value))
                break;
            case "site1":
                dispatch(setKeyWords(state, value))
                break;

            default:
                break;
        }
    }

    switch (step) {
        case 1:
            return (
                <StaticInputText typeInput={"text"} width={"100%"} textLabelInput={"آدرس وبسایت شما:"} staticText={"https:// "} placeholder={"example.com"} reduxHandleChange={setWebAdress} />
            );
        case 2:
            return (
                <div id="workSpaceModalStep2">
                    <div className=" max-h-[380px] overflow-y-scroll">
                        <div className='container_input_step2'>
                            <AuthInput textLabelInput="کلمات کلیدی" width={"100%"} typeInput="text" reduxHandleChange={setKeyWords} workSpaceTypeState="keyWord1" />
                            <img src="/img/modal/body/arrow.svg" className='arrpw' alt="" />
                            <StaticInputText typeInput={"text"} width={"100%"} textLabelInput={"سایت مرتبط"} reduxHandleChange={setKeyWords} workSpaceTypeState="site1" staticText={"https://example.com/ "} placeholder={"example.com"} />
                        </div>
                        <div className='container_input_step2 mt-7 mb-7'>
                            <AuthInput textLabelInput="کلمات کلیدی" width={"100%"} typeInput="text" reduxHandleChange={setKeyWords} workSpaceTypeState="keyWord2" />
                            <img src="/img/modal/body/arrow.svg" className='arrpw' alt="" />
                            <StaticInputText typeInput={"text"} width={"100%"} textLabelInput={"سایت مرتبط"} reduxHandleChange={setKeyWords} workSpaceTypeState="site2" staticText={"https://example.com/ "} placeholder={"example.com"} />
                        </div>
                        {addKeyCharMap.map(item => (
                            <div className='container_input_step2 mt-7 mb-7'>
                                <AuthInput textLabelInput="کلمات کلیدی" width={"100%"} typeInput="text" reduxHandleChange={setKeyWords} workSpaceTypeState={`keyWord${item}`} />
                                <img src="/img/modal/body/arrow.svg" className='arrpw' alt="" />
                                <StaticInputText typeInput={"text"} width={"100%"} textLabelInput={"سایت مرتبط"} reduxHandleChange={setKeyWords} workSpaceTypeState={`site${item}`} staticText={"https://example.com/ "} placeholder={"example.com"} />
                            </div>
                        ))}
                    </div>
                    <button className='btn-style ' onClick={() => { countInput <= 10 && setAddKeyCharMap([...addKeyCharMap, `${countInput}`]); console.log(addKeyCharMap); handleAddStateCountInput("keyChar") }}><img src="/img/modal/workSpace/body/add.svg" className="ml-4" /> کلمه کلیدی جدید </button>
                </div>
            );
        case 3:
            return (
                <Fragment>
                    <div className=" max-h-[380px] overflow-y-scroll">
                        <StaticInputText parentClass={"mb-7"} typeInput={"text"} width={"100%"} textLabelInput={"صفحه تجاری"} staticText={"https://example.ir/ "} placeholder={"page1"} reduxHandleChange={setCommercialPages} workSpaceTypeState={"commercialPage1"} />
                        <StaticInputText parentClass={"mb-7"} typeInput={"text"} width={"100%"} textLabelInput={"صفحه تجاری"} staticText={"https://example.ir/ "} placeholder={"page2"} reduxHandleChange={setCommercialPages} workSpaceTypeState={"commercialPage2"} />
                        {addCommercialPageMap.map(item => (
                            <StaticInputText parentClass={"mb-7"} typeInput={"text"} width={"100%"} textLabelInput={"صفحه تجاری"} staticText={"https://example.ir/ "} placeholder={"page2"} reduxHandleChange={setCommercialPages} workSpaceTypeState={`commercialPage${item}`} />
                        ))}
                    </div>
                    <button className='btn-style ' onClick={() => { countInput <= 10 && setAddCommercialPageMap([...addCommercialPageMap, `${countInput}`]); handleAddStateCountInput("commercialPage") }}><img src="/img/modal/workSpace/body/add.svg" className="ml-4" />صفحه تجاری جدید</button>
                </Fragment>
            );
        case 4:
            return (
                <Fragment>
                    <div className=" max-h-[380px] overflow-y-scroll">
                        <StaticInputText parentClass={"mb-7"} typeInput={"text"} width={"100%"} textLabelInput={"افزودن صفحه وبسایت"} staticText={"https://example.ir/ "} placeholder={"page1"} reduxHandleChange={setWebsitePages} workSpaceTypeState={"websitePage1"} />
                        <StaticInputText parentClass={"mb-7"} typeInput={"text"} width={"100%"} textLabelInput={"افزودن صفحه وبسایت"} staticText={"https://example.ir/ "} placeholder={"page2"} reduxHandleChange={setWebsitePages} workSpaceTypeState={"websitePage2"} />
                        {addWebsitePageMap.map(item => (
                            <StaticInputText parentClass={"mb-7"} typeInput={"text"} width={"100%"} textLabelInput={"افزودن صفحه وبسایت"} staticText={"https://example.ir/ "} placeholder={"page2"} reduxHandleChange={setWebsitePages} workSpaceTypeState={`websitePage${item}`} />
                        ))}
                    </div>
                    <button className='btn-style ' onClick={() => { countInput <= 10 && setAddWebsitePageMap([...addWebsitePageMap, `${countInput}`]); handleAddStateCountInput("websitePage") }}><img src="/img/modal/workSpace/body/add.svg" className="ml-4" />صفحه وبسایت جدید</button>
                </Fragment>
            );
        // case 5:
        //     return "افزودن رقبای وبسایت";
        case 5:
            return (
                <Fragment>
                    <div id="workSpaceModalStep2">
                        <div className=" max-h-[380px] overflow-y-scroll">
                            <div className='container_input_step2'>
                                <AuthInput textLabelInput="کلمات کلیدی" width={"100%"} typeInput="text" reduxHandleChange={setKeyWords} workSpaceTypeState="keyWord1" />
                                <img src="/img/modal/body/arrow.svg" className='arrpw' alt="" />
                                <div className=" w-full">
                                    <StaticInputText parentClass={"mb-7"} typeInput={"text"} width={"100%"} textLabelInput={"سایت رقیب 1"} reduxHandleChange={setKeyWords} workSpaceTypeState="site1" staticText={"https://example.com/ "} placeholder={"page1"} />
                                    {addCompetitorSite.map(item => (
                                        <StaticInputText parentClass={"mb-7"} typeInput={"text"} width={"100%"} textLabelInput={"سایت رقیب 1"} staticText={"https://example.ir/ "} placeholder={"page2"} reduxHandleChange={setWebsitePages} workSpaceTypeState={`websitePage${item}`} />
                                    ))}
                                    <button className='btn-style my-4' onClick={() => { countInput <= 10 && setAddCompetitorSite([...addCompetitorSite, `${countInput}`]); handleAddStateCountInput("competitorSite") }}><img src="/img/modal/workSpace/body/add.svg" className="ml-4" />افزودن رقیب جدید</button>
                                </div>
                            </div>
                            {/* <div className='container_input_step2 mt-7 mb-7'>
                                <AuthInput textLabelInput="کلمات کلیدی" width={"100%"} typeInput="text" reduxHandleChange={setKeyWords} workSpaceTypeState="keyWord2" />
                                <img src="/img/modal/body/arrow.svg" className='arrpw' alt="" />
                                <StaticInputText typeInput={"text"} width={"100%"} textLabelInput={"سایت مرتبط"} reduxHandleChange={setKeyWords} workSpaceTypeState="site2" staticText={"https://example.com/ "} placeholder={"example.com"} />
                            </div>
                            {addKeyCharMap.map(item => (
                                <div className='container_input_step2 mt-7 mb-7'>
                                    <AuthInput textLabelInput="کلمات کلیدی" width={"100%"} typeInput="text" reduxHandleChange={setKeyWords} workSpaceTypeState={`keyWord${item}`} />
                                    <img src="/img/modal/body/arrow.svg" className='arrpw' alt="" />
                                    <StaticInputText typeInput={"text"} width={"100%"} textLabelInput={"سایت مرتبط"} reduxHandleChange={setKeyWords} workSpaceTypeState={`site${item}`} staticText={"https://example.com/ "} placeholder={"example.com"} />
                                </div>
                            ))} */}
                        </div>
                        <button className='btn-style ' onClick={() => { countInput <= 10 && setAddKeyCharMap([...addKeyCharMap, `${countInput}`]); console.log(addKeyCharMap); handleAddStateCountInput("keyChar") }}><img src="/img/modal/workSpace/body/add.svg" className="ml-4" /> کلمه کلیدی جدید </button>
                    </div>
                    {/* <div className="flex justify-between pl-4 pr-3 w-[580px] h-24 border border-[#D9D9D9] m-auto items-center">
                        <p className="text-sm">برای دریافت فایل کلیک کنید</p>
                        <div>

                        <button className='btn-style ' onClick={() => { countInput<=10&&setAddWebsitePageMap([...addWebsitePageMap, `${countInput}`]); handleAddStateCountInput("websitePage") }}><img src="/img/modal/workSpace/body/file_download.svg" className="ml-4" />دریافت فایل</button>
                        </div>
                    </div>
                    <div className="flex justify-between pl-4 pr-3 mt-4 w-[580px] h-24 border border-[#D9D9D9] m-auto items-center">
                        <p className="text-sm w-4/6">پس از دریافت فایل و آپلود کردن در هاست خود تایید وبسایت را کلیک کنید تا سگمنتو وبسایت شما را بررسی و تایید کند . </p>
                        <button className='btn-style ' onClick={() => { countInput<=10&&setAddWebsitePageMap([...addWebsitePageMap, `${countInput}`]); handleAddStateCountInput("websitePage") }}><img src="/img/modal/workSpace/body/beenhere.svg" className="ml-4" />تایید وبسایت</button>
                    </div> */}
                </Fragment>
            );
        default:
            break;
    }
}





