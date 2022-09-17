export const workSpaceReducer = (state =
    {
        webAdress: "",
        allWorkSpace: [],
        webAdressUuid: "",
        keyWord1: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
        keyWord2: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
        keyWord3: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
        keyWord4: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
        keyWord5: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
        keyWord6: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
        keyWord7: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
        keyWord8: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
        keyWord9: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
        keyWord10: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
        commercialPage1: "",
        commercialPage2: "",
        commercialPage3: "",
        commercialPage4: "",
        commercialPage5: "",
        commercialPage6: "",
        commercialPage7: "",
        commercialPage8: "",
        commercialPage9: "",
        commercialPage10: "",
        websitePage1: "",
        websitePage2: "",
        websitePage3: "",
        websitePage4: "",
        websitePage5: "",
        websitePage6: "",
        websitePage7: "",
        websitePage8: "",
        websitePage9: "",
        websitePage10: "",
        testSpeedPage: [],
        competitorSite: [],
        limitsDatas: [],
        allLimitsDatas: [],
        resultSetWorkSpace: { reportStatus: false, reportStep: 0 },
        showWorkSpaceModal: false,
        businessCustomer:false,
        checkLimit:true,
        forceUpdate: 0
    }, action) => {
    switch (action.type) {

        case "DISCOUNT_CODE":
            return { ...action.payload }

        case "HANDLE_SHOW_WORK_SPACE":
            return { ...action.payload }
        case "WEB_ADRESS":
            return { ...action.payload }
        case "GET_ALL_WEB_ADRESS_DATA":
            return { ...action.payload }

        case "CHAR_KEY1":
            return { ...action.payload }

        case "CHAR_KEY2":
            return { ...action.payload }

        case "SITE1":
            return { ...action.payload }

        case "SITE2":
            return { ...action.payload }

        case "COMMERCIAL_PAGES":
            return { ...action.payload }

        case "PLAN_CHOSEN":
            return { ...action.payload }

        case "PACKAGE_UUID":
            return { ...action.payload }

        case "BUY_PLAN":
            return { ...action.payload }

        case "SET_WORK_SPACE_WEB_ADRESS":
            return { ...action.payload }
        case "MODAL_SET_WORK_SPACE_PLAN":
            return { ...action.payload }

        case "CHECK_LIMIT":
            return { ...action.payload }
        case "CHECK_BUSSINESS":
            return { ...action.payload }
        case "FORCE_UPDATE":
            return { ...action.payload }

        case "RESET_ALL_STATE":
            return {
                webAdress: "",
                allWorkSpace: [],
                webAdressUuid: "",
                keyWord1: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                keyWord2: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                keyWord3: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                keyWord4: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                keyWord5: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                keyWord6: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                keyWord7: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                keyWord8: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                keyWord9: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                keyWord10: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                commercialPage1: "",
                commercialPage2: "",
                commercialPage3: "",
                commercialPage4: "",
                commercialPage5: "",
                commercialPage6: "",
                commercialPage7: "",
                commercialPage8: "",
                commercialPage9: "",
                commercialPage10: "",
                websitePage1: "",
                websitePage2: "",
                websitePage3: "",
                websitePage4: "",
                websitePage5: "",
                websitePage6: "",
                websitePage7: "",
                websitePage8: "",
                websitePage9: "",
                websitePage10: "",
                testSpeedPage: [],
                competitorSite: [],
                limitsDatas: [],
                allLimitsDatas: [],
                resultSetWorkSpace: { reportStatus: false, reportStep: 0 },
                showWorkSpaceModal: false,
                forceUpdate: 0
            }
        case "RESET_WORK_SPACE_STATE":
            return {
                webAdress: "",
                allWorkSpace:  [...action.payload.allWorkSpace] ,
                webAdressUuid: "",
                keyWord1: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                keyWord2: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                keyWord3: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                keyWord4: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                keyWord5: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                keyWord6: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                keyWord7: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                keyWord8: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                keyWord9: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                keyWord10: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
                commercialPage1: "",
                commercialPage2: "",
                commercialPage3: "",
                commercialPage4: "",
                commercialPage5: "",
                commercialPage6: "",
                commercialPage7: "",
                commercialPage8: "",
                commercialPage9: "",
                commercialPage10: "",
                websitePage1: "",
                websitePage2: "",
                websitePage3: "",
                websitePage4: "",
                websitePage5: "",
                websitePage6: "",
                websitePage7: "",
                websitePage8: "",
                websitePage9: "",
                websitePage10: "",
                testSpeedPage: [],
                competitorSite: [],
                limitsDatas: [],
                allLimitsDatas: [],
                resultSetWorkSpace: { reportStatus: false, reportStep: 0 },
                showWorkSpaceModal: false,
                forceUpdate: 0
            }

        // case "RESET_STATE":
        //     return { email: "", forgotPasswordStep: 0, checkRegisterComplete: false, checkVerifyRegister: false }

        default:
            return state;
    }


}