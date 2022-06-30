export const workSpaceReducer = (state =
    {
        webAdress: "http://xxxxx.xxx",
        allWorkSpace:[],
        webAdressUuid: "",
        keyWord1: { key: "", site: "" },
        keyWord2: { key: "", site: "" },
        keyWord3: { key: "", site: "" },
        keyWord4: { key: "", site: "" },
        keyWord5: { key: "", site: "" },
        keyWord6: { key: "", site: "" },
        keyWord7: { key: "", site: "" },
        keyWord8: { key: "", site: "" },
        keyWord9: { key: "", site: "" },
        keyWord10: { key: "", site: "" },
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
        // charKey2: "key 2",
        // site1: "https://aaa.com/blog",
        // site2: "https://aaa.com/video",
        // commercialPage2: "",
        // planChosen: "",
        // discount: "",
        // packageUuid: "",
        forceUpdate: 0
    }, action) => {
    switch (action.type) {

        case "DISCOUNT_CODE":
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

        case "FORCE_UPDATE":
            return { ...action.payload }

        // case "RESET_STATE":
        //     return { email: "", forgotPasswordStep: 0, checkRegisterComplete: false, checkVerifyRegister: false }

        default:
            return state;
    }


}