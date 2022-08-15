import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import AuthInput from "../../Auth/authInput/AuthInput";
import { setCommercialPages, setCompetitorSite, setKeyWords, setWebAdress, setWebsitePages } from "../../Redux/Action/workSpace";
import StaticInputText from "../staticInputText/textInput";

export const InputGetWorkSpaceInfo = (step, countInput, handleAddStateCountInput) => {
    const [addKeyCharMap, setAddKeyCharMap] = useState([1, 2])
    const [addCommercialPageMap, setAddCommercialPageMap] = useState([1, 2])
    const [addWebsitePageMap, setAddWebsitePageMap] = useState([1, 2])
    const [addCompetitorSite, setAddCompetitorSite] = useState([[1], [1], [1], [1], [1]])
    // const [addKeyCharMap, setAddKeyCharMap] = useState([])

    const {
        webAdress,
        keyWord1,
        keyWord2,
        keyWord3,
        keyWord4,
        keyWord5,
        keyWord6,
        keyWord7,
        keyWord8,
        keyWord9,
        keyWord10,
        commercialPage1,
        commercialPage2,
        commercialPage3,
        commercialPage4,
        commercialPage5,
        commercialPage6,
        commercialPage7,
        commercialPage8,
        commercialPage9,
        commercialPage10,
        websitePage1,
        websitePage2,
        websitePage3,
        websitePage4,
        websitePage5,
        websitePage6,
        websitePage7,
        websitePage8,
        websitePage9,
        websitePage10
    } = useSelector(state => state.workSpaceState)

    const handleInputValue = (keyWordIndex, section, variable) => {
        if (section == "keyWords") {

            if (variable == "site") {
                switch (keyWordIndex) {
                    case 1:
                        return keyWord1.site;
                    case 2:
                        return keyWord2.site;
                    case 3:
                        return keyWord3.site;
                    case 4:
                        return keyWord4.site;
                    case 5:
                        return keyWord5.site;
                    case 6:
                        return keyWord6.site;
                    case 7:
                        return keyWord7.site;
                    case 8:
                        return keyWord8.site;
                    case 9:
                        return keyWord9.site;
                    case 10:
                        return keyWord10.site;
                    default:
                        break;
                }
            } else if (variable == "key") {
                switch (keyWordIndex) {
                    case 1:
                        return keyWord1.key;
                    case 2:
                        return keyWord2.key;
                    case 3:
                        return keyWord3.key;
                    case 4:
                        return keyWord4.key;
                    case 5:
                        return keyWord5.key;
                    case 6:
                        return keyWord6.key;
                    case 7:
                        return keyWord7.key;
                    case 8:
                        return keyWord8.key;
                    case 9:
                        return keyWord9.key;
                    case 10:
                        return keyWord10.key;
                    default:
                        break;
                }
            } else if (variable == "competitorSite") {
                switch (keyWordIndex) {
                    case 1:
                        return keyWord1.competitorSite;
                    case 2:
                        return keyWord2.competitorSite;
                    case 3:
                        return keyWord3.competitorSite;
                    case 4:
                        return keyWord4.competitorSite;
                    case 5:
                        return keyWord5.competitorSite;
                    case 6:
                        return keyWord6.competitorSite;
                    case 7:
                        return keyWord7.competitorSite;
                    case 8:
                        return keyWord8.competitorSite;
                    case 9:
                        return keyWord9.competitorSite;
                    case 10:
                        return keyWord10.competitorSite;
                    default:
                        break;
                }
            }
        } else if (section == "commercialPage") {
            switch (keyWordIndex) {
                case 1:
                    return commercialPage1;
                case 2:
                    return commercialPage2;
                case 3:
                    return commercialPage3;
                case 4:
                    return commercialPage4;
                case 5:
                    return commercialPage5;
                case 6:
                    return commercialPage6;
                case 7:
                    return commercialPage7;
                case 8:
                    return commercialPage8;
                case 9:
                    return commercialPage9;
                case 10:
                    return commercialPage10;
                default:
                    break;
            }
        } else if (section == "websitePage") {
            switch (keyWordIndex) {
                case 1:
                    return websitePage1;
                case 2:
                    return websitePage2;
                case 3:
                    return websitePage3;
                case 4:
                    return websitePage4;
                case 5:
                    return websitePage5;
                case 6:
                    return websitePage6;
                case 7:
                    return websitePage7;
                case 8:
                    return websitePage8;
                case 9:
                    return websitePage9;
                case 10:
                    return websitePage10;
                default:
                    break;
            }

        }

    }

    const handleCompetitorSiteValue=(index)=>{
        switch (index) {
            case 1:
                return keyWord1.competitorSite;
            case 2:
                return keyWord2.competitorSite;
            case 3:
                return keyWord3.competitorSite;
            case 4:
                return keyWord4.competitorSite;
            case 5:
                return keyWord5.competitorSite;
        
            default:
                break;
        }
    }

    const handleSetStateAddCompetitorSite = (keyWordIndex) => {
        var competitorSites = addCompetitorSite;
        competitorSites[keyWordIndex - 1].push(competitorSites[keyWordIndex - 1].length + 1);
        const dd = addCompetitorSite[keyWordIndex - 1].length;
        setAddCompetitorSite(competitorSites)
    }

    switch (step) {
        case 1:
            return (
                <StaticInputText typeInput={"text"} width={"100%"} textLabelInput={"آدرس وبسایت شما:"} staticText={"https:// "} placeholder={"example.com"} value={webAdress} reduxHandleChange={setWebAdress} />
            );
        case 2:
            return (
                <div id="workSpaceModalStep2">
                    <div className=" max-h-[380px] overflow-y-scroll">
                        {addKeyCharMap.map((item,index) => (
                            <div className='container_input_step2 mt-7 mb-7'>
                                <AuthInput textLabelInput="کلمات کلیدی" width={"100%"} typeInput="text" value={handleInputValue(item, "keyWords", "key")} reduxHandleChange={setKeyWords} workSpaceTypeState={`keyWord${item}`} />
                                <img src="/img/modal/body/arrow.svg" className='arrpw' alt="" />
                                <StaticInputText typeInput={"text"} width={"100%"} textLabelInput={"سایت مرتبط"} value={handleInputValue(item, "keyWords", "site")} reduxHandleChange={setKeyWords} workSpaceTypeState={`site${item}`} staticText={`https://${webAdress}/`} placeholder={"page "+index} />
                            </div>
                        ))}
                    </div>
                    <button className='btn-style ' onClick={() => { countInput <= 10 && setAddKeyCharMap([...addKeyCharMap, countInput]); handleAddStateCountInput("keyChar") }}><img src="/img/modal/workSpace/body/add.svg" className="ml-4" /> کلمه کلیدی جدید </button>
                </div>
            );
        case 3:
            return (
                <Fragment>
                    <div className=" max-h-[380px] overflow-y-scroll">
                        {addCommercialPageMap.map((item,index) => (
                            <StaticInputText parentClass={"mb-7"} typeInput={"text"} width={"100%"} textLabelInput={"صفحه تجاری"} staticText={`https://${webAdress}/`} placeholder={"page "+index} value={handleInputValue(item, "commercialPage", null)} reduxHandleChange={setCommercialPages} workSpaceTypeState={`commercialPage${item}`} />
                        ))}
                    </div>
                    <button className='btn-style ' onClick={() => { countInput <= 10 && setAddCommercialPageMap([...addCommercialPageMap, countInput]); handleAddStateCountInput("commercialPage") }}><img src="/img/modal/workSpace/body/add.svg" className="ml-4" />صفحه تجاری جدید</button>
                </Fragment>
            );
        case 4:
            return (
                <Fragment>
                    <div className=" max-h-[380px] overflow-y-scroll">
                        {addWebsitePageMap.map((item,index) => (
                            <StaticInputText parentClass={"mb-7"} typeInput={"text"} width={"100%"} textLabelInput={"افزودن صفحه وبسایت"} staticText={`https://${webAdress}/`} placeholder={"page "+index} value={handleInputValue(item, "websitePage", null)} reduxHandleChange={setWebsitePages} workSpaceTypeState={`websitePage${item}`} />
                        ))}
                    </div>
                    <button className='btn-style ' onClick={() => { countInput <= 10 && setAddWebsitePageMap([...addWebsitePageMap, countInput]); handleAddStateCountInput("websitePage") }}><img src="/img/modal/workSpace/body/add.svg" className="ml-4" />صفحه وبسایت جدید</button>
                </Fragment>
            );
        case 5:
            return (
                <Fragment>
                    <div id="workSpaceModalStep2">
                        <div className=" max-h-[380px] overflow-y-scroll">
                            <div className='container_input_step2 flex-col'>
                                {addKeyCharMap.map(itemKey => {
                                    return (
                                        <div className="flex">
                                            <AuthInput textLabelInput="کلمات کلیدی" width={"100%"} typeInput="text" value={handleInputValue(itemKey, "keyWords", "key")} reduxHandleChange={setKeyWords} workSpaceTypeState={`keyWord${itemKey}`} />
                                            <img src="/img/modal/body/arrow.svg" className='arrpw' alt="" />
                                            <div className=" w-full mb-5">
                                                {addCompetitorSite[itemKey - 1].map((itemCompetitor,index) => {
                                                    return (<>
                                                        <StaticInputText parentClass={"mb-7"} typeInput={"text"} width={"100%"} textLabelInput={"سایت رقیب "+index} staticText={`https://`} placeholder={"page "+index} reduxHandleChange={setCompetitorSite} workSpaceTypeState={`keyWord${itemKey},${itemCompetitor}`} value={handleCompetitorSiteValue(itemKey)[itemCompetitor-1]}/>
                                                    </>)
                                                })}
                                                <button className='btn-style my-4' onClick={() => { addCompetitorSite.length + 1 <= 5 && handleSetStateAddCompetitorSite(itemKey); handleAddStateCountInput("competitorSite") }}><img src="/img/modal/workSpace/body/add.svg" className="ml-4" />افزودن رقیب جدید</button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </Fragment>
            );
        default:
            break;
    }
}





