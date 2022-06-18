import { toast } from "react-toastify";
import { showInputErrorToast, showPromisToast } from "../../Utils/toastifyPromise";




export const setWebAdress = adress => {
    return async (dispatch, getState) => {
        const state = { ...getState().planState }
        state.webAdress = "https://"+adress;
        await dispatch({ type: "WEB_ADRESS", payload: state })
    }
}


export const setKeyWords = (value,stateKey ) => {
    return async (dispatch, getState) => {
        const state = { ...getState().workSpaceState }
        switch (stateKey) {
            case "keyWord1":
                state.keyWord1.key=value;
                break;
            case "site1":
                state.keyWord1.site=value;
                break;
            case "keyWord2":
                state.keyWord2.key=value;
                break;
            case "site2":
                state.keyWord2.site=value;
                break;
            case "keyWord3":
                state.keyWord3.key=value;
                break;
            case "site3":
                state.keyWord3.site=value;
                break;
            case "keyWord4":
                state.keyWord4.key=value;
                break;
            case "site4":
                state.keyWord4.site=value;
                break;
            case "keyWord5":
                state.keyWord5.key=value;
                break;
            case "site5":
                state.keyWord5.site=value;
                break;
            case "keyWord6":
                state.keyWord6.key=value;
                break;
            case "site6":
                state.keyWord6.site=value;
                break;
            case "keyWord7":
                state.keyWord7.key=value;
                break;
            case "site7":
                state.keyWord7.site=value;
                break;
            case "keyWord8":
                state.keyWord8.key=value;
                break;
            case "site8":
                state.keyWord8.site=value;
                break;
            case "keyWord9":
                state.keyWord9.key=value;
                break;
            case "site9":
                state.keyWord9.site=value;
                break;
            case "keyWord10":
                state.keyWord10.key=value;
                break;
            case "site10":
                state.keyWord10.site=value;
                break;
            default:
                break;
        }
        await dispatch({ type: "WEB_ADRESS", payload: state })
    }
}



export const setCommercialPages = (adress,stateCommercial) => {
    return async (dispatch, getState) => {
        const state = { ...getState().workSpaceState }
        // debugger
        switch (stateCommercial) {
            case "commercialPage1":
                state.commercialPage1=adress;
                break;
            case "commercialPage2":
                state.commercialPage2=adress;
                break;
            case "commercialPage3":
                state.commercialPage3=adress;
                break;
            case "commercialPage4":
                state.commercialPage4=adress;
                break;
            case "commercialPage5":
                state.commercialPage5=adress;
                break;
            case "commercialPage6":
                state.commercialPage6=adress;
                break;
            case "commercialPage7":
                state.commercialPage7=adress;
                break;
            case "commercialPage8":
                state.commercialPage8=adress;
                break;
            case "commercialPage9":
                state.commercialPage9=adress;
                break;
            case "commercialPage10":
                state.commercialPage10=adress;
                break;
            default:
                break;
        }
        await dispatch({ type: "COMMERCIAL_PAGES", payload: state })
    }
}







