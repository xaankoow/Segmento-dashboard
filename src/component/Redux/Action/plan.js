import { toast } from "react-toastify";
import { applyDiscount } from "../../service/planService";
import { handleNextInput } from "../../Utils/focusNextInput";
import { showInputErrorToast, showPromisToast } from "../../Utils/toastifyPromise";




export const setWebAdress = adress => {
    return async (dispatch, getState) => { 
        const state = { ...getState().planState }
        state.webAdress=adress;
        await dispatch({ type: "WEB_ADRESS", payload: state })
    }
}
export const setCharKey1 = char => {
    return async (dispatch, getState) => { 
        const state = { ...getState().planState }
        state.charKey1=char;
        await dispatch({ type: "CHAR_KEY1", payload: state })
    }
}
export const setCharKey2 = char => {
    return async (dispatch, getState) => { 
        const state = { ...getState().planState }
        state.charKey2=char;
        await dispatch({ type: "CHAR_KEY2", payload: state })
    }
}
export const setSite1 = adress => {
    return async (dispatch, getState) => { 
        const state = { ...getState().planState }
        state.site1=adress;
        await dispatch({ type: "SITE1", payload: state })
    }
}
export const setSite2 = adress => {
    return async (dispatch, getState) => { 
        const state = { ...getState().planState }
        state.site2=adress;
        await dispatch({ type: "SITE2", payload: state })
    }
}
export const setCommercialPage1 = adress => {
    return async (dispatch, getState) => { 
        const state = { ...getState().planState }
        state.commercialPage1=adress;
        await dispatch({ type: "COMMERCIAL_PAGE1", payload: state })
    }
}
export const setCommercialPage2 = adress => {
    return async (dispatch, getState) => { 
        const state = { ...getState().planState }
        state.commercialPage2=adress;
        await dispatch({ type: "COMMERCIAL_PAGE2", payload: state })
    }
}
export const setPlanChosen = plan => {
    return async (dispatch, getState) => { 
        const state = { ...getState().planState }
        state.planChosen=plan;
        await dispatch({ type: "PLAN_CHOSEN", payload: state })
    }
}



























export const applyDiscountAction = discountCode => {
    return async (dispatch, getState) => {
        //  
        const state = { ...getState().userState }
        if (discountCode) {
            let toastPromise = toast.loading("درحال ارسال درخواست شما به سرور")
            
            debugger
            let formdata = new FormData();
            formdata.append("code", discountCode)
            
            let toastMessage = "";
            try {
                debugger
                const { data, status } = await applyDiscount(formdata);
                if (status == 200 && data.status == true) {
                    state.forceUpdate += 1;
                    toast.update(toastPromise, { render: "کد تخفیف با موفقیت اعمال شد", type: "success", isLoading: false, autoClose: 3000 })
                } else {
                    data.errors.forEach(element => {
                        toastMessage += element + " / ";
                    });
                    toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
                }
            } catch (error) {
                error.response.data.errors.forEach(element => {
                    toastMessage += element + " / ";
                });
                toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
            }
        } else {
            showInputErrorToast();
        }
        
        await dispatch({ type: "DISCOUNT_CODE", payload: { ...getState().userState } })
    }
}









// export const setDiscount = code => {
//     return async (dispatch, getState) => { 
//         const state = { ...getState().userState }
//         state.discount=code;
//         await dispatch({ type: "DISCOUNT_CODE", payload: { ...getState().userState } })
//     }
// }






























