export const workSpaceReducer = (state =
    {
        webAdress: "https://aaa.com",
        keyWord1: {key:"",site:""},
        keyWord2: {key:"",site:""},
        keyWord3: {key:"",site:""},
        keyWord4: {key:"",site:""},
        keyWord5: {key:"",site:""},
        keyWord6: {key:"",site:""},
        keyWord7: {key:"",site:""},
        keyWord8: {key:"",site:""},
        keyWord9: {key:"",site:""},
        keyWord10: {key:"",site:""},
        commercialPages: [],
        testSpeedPage:[],
         competitorSite:[],
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

        case "CHAR_KEY1":
            return { ...action.payload }

        case "CHAR_KEY2":
            return { ...action.payload }

        case "SITE1":
            return { ...action.payload }

        case "SITE2":
            return { ...action.payload }

        case "COMMERCIAL_PAGE1":
            return { ...action.payload }

        case "COMMERCIAL_PAGE2":
            return { ...action.payload }

        case "PLAN_CHOSEN":
            return { ...action.payload }

        case "PACKAGE_UUID":
            return { ...action.payload }
            
            case "BUY_PLAN":
                return { ...action.payload }

        case "FORCE_UPDATE":
            return { ...action.payload }

        // case "RESET_STATE":
        //     return { email: "", forgotPasswordStep: 0, checkRegisterComplete: false, checkVerifyRegister: false }

        default:
            return state;
    }


}