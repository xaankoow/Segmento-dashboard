export const workSpaceReducer = (state =
    {
        webAdress: "www.xaankoovczkj",
        allWorkSpace: [],
        webAdressUuid: "",
        keyWord1: { key: "آب", site: "sky", competitorSite: ["competitorSky1", "competitorSky2", "", "competitorSky4", ""] },
        keyWord2: { key: "خاک", site: "earth", competitorSite: ["", "", "", "", ""] },
        keyWord3: { key: "گوشی", site: "phone", competitorSite: ["competitorPhone1", "", "competitorPhone3", "", "competitorPhone5"] },
        keyWord4: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
        keyWord5: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
        keyWord6: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
        keyWord7: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
        keyWord8: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
        keyWord9: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
        keyWord10: { key: "", site: "", competitorSite: ["", "", "", "", ""] },
        commercialPage1: "commercial1",
        commercialPage2: "",
        commercialPage3: "commercial2",
        commercialPage4: "commercial3",
        commercialPage5: "",
        commercialPage6: "",
        commercialPage7: "",
        commercialPage8: "",
        commercialPage9: "",
        commercialPage10: "",
        websitePage1: "speedTest1",
        websitePage2: "speedTest2",
        websitePage3: "",
        websitePage4: "speedTest4",
        websitePage5: "",
        websitePage6: "",
        websitePage7: "",
        websitePage8: "",
        websitePage9: "",
        websitePage10: "",
        // competitorSite1: ["", "", "", "", ""],
        // competitorSite2: ["", "", "", "", ""],
        // competitorSite3: ["", "", "", "", ""],
        // competitorSite4: ["", "", "", "", ""],
        // competitorSite5: ["", "", "", "", ""],
        // competitorSite6: ["", "", "", "", ""],
        // competitorSite7: ["", "", "", "", ""],
        // competitorSite8: ["", "", "", "", ""],
        // competitorSite9: ["", "", "", "", ""],
        // competitorSite10: ["", "", "", "", ""],
        testSpeedPage: [],
        competitorSite: [],
        // charKey2: "key 2",
        // site1: "https://aaa.com/blog",
        // site2: "https://aaa.com/video",
        // commercialPage2: "",
        // planChosen: "",
        // discount: "",
        // packageUuid: "",
        resultSetWorkSpace:{reportStatus:false,reportStep:0},
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
        case "MODAL_SET_WORK_SPACE_PLAN":
            return { ...action.payload }

        case "FORCE_UPDATE":
            return { ...action.payload }

        // case "RESET_STATE":
        //     return { email: "", forgotPasswordStep: 0, checkRegisterComplete: false, checkVerifyRegister: false }

        default:
            return state;
    }


}