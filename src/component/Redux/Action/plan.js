import { toast } from "react-toastify";
import { applyDiscount, buyPlna, getAllPlan, getPlanDetails } from "../../service/planService";
import { handleNextInput } from "../../Utils/focusNextInput";
import { InputError } from "../../Utils/showInputError";
import { showInputErrorToast, showPromisToast } from "../../Utils/toastifyPromise";



export const getAllPlanData = ()=> {
    return async (dispatch, getState) => {
        // debugger
        const state = { ...getState().planState }
        let toastMessage="";
        try {
            const workSpaces=await getAllPlan()
            // debugger
            if (workSpaces.data.status==true&&workSpaces.data.code==200) {
                state.allPackageData = workSpaces.data.data;
            }else{
                
            }
            await dispatch({ type: "MODAL_PLAN_GET_ALL_PLAN_DATA", payload: state })    
        } catch (error) {
            console.log("register error")
            error.response.data.errors.forEach(element => {
                toastMessage += element + " / ";
            });
            toast.warn(toastMessage, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
}


export const setWebAdress = adress => {
    return async (dispatch, getState) => { 
        const state = { ...getState().planState }
        state.webAdress=adress;
        await dispatch({ type: "MODAL_PLAN_WEB_ADRESS", payload: state })
    }
}
export const setCharKey1 = char => {
    return async (dispatch, getState) => { 
        const state = { ...getState().planState }
        state.charKey1=char;
        await dispatch({ type: "MODAL_PLAN_CHAR_KEY1", payload: state })
    }
}
export const setCharKey2 = char => {
    return async (dispatch, getState) => { 
        const state = { ...getState().planState }
        state.charKey2=char;
        await dispatch({ type: "MODAL_PLAN_CHAR_KEY2", payload: state })
    }
}
export const setSite1 = adress => {
    return async (dispatch, getState) => { 
        const state = { ...getState().planState }
        state.site1=adress;
        await dispatch({ type: "MODAL_PLAN_SITE1", payload: state })
    }
}
export const setSite2 = adress => {
    return async (dispatch, getState) => { 
        const state = { ...getState().planState }
        state.site2=adress;
        await dispatch({ type: "MODAL_PLAN_SITE2", payload: state })
    }
}
export const setCommercialPage1 = adress => {
    return async (dispatch, getState) => { 
        const state = { ...getState().planState }
        state.commercialPage1=adress;
        await dispatch({ type: "MODAL_PLAN_COMMERCIAL_PAGE1", payload: state })
    }
}
export const setCommercialPage2 = adress => {
    return async (dispatch, getState) => { 
        const state = { ...getState().planState }
        state.commercialPage2=adress;
        await dispatch({ type: "MODAL_PLAN_COMMERCIAL_PAGE2", payload: state })
    }
}
export const setPlanChosen = plan => {
    return async (dispatch, getState) => { 
        const state = { ...getState().planState }
        state.planChosen=plan;
        await dispatch({ type: "MODAL_PLAN_CHOSEN", payload: state })
    }
}

export const setPackageUuid = uuid => {
    return async (dispatch, getState) => { 
        const state = { ...getState().planState }
        state.packageUuid=uuid;
        await dispatch({ type: "MODAL_PLAN_PACKAGE_UUID", payload: state })
    }
}

export const setPackageDetails = uuid => {
    return async (dispatch, getState) => { 
        const state = { ...getState().planState }
        const {data}= await getPlanDetails(uuid);
        state.planDetails=data.data;
        await dispatch({ type: "MODAL_PLAN_GET_PACKAGE_DETAILS", payload: state })
    }
}

























export const buyPlan = (buyType) => {
    return async (dispatch, getState) => {
        //  
        const state = { ...getState().planState }
        // const webAdress=state.webAdress;
        // const charKey1=state.charKey1;
        // const charKey2=state.charKey2;
        // const site1=state.site1;
        // const site2=state.site2;
        // const commercialPage1=state.commercialPage1;
        // const commercialPage2=state.commercialPage1;
        const packageUuid=state.packageUuid;
        const discount=state.discount;
        debugger
        if (packageUuid) {
            let toastPromise = toast.loading("درحال ارسال درخواست شما به سرور")
            var packageInfo={
                "type":"package",
                "uuid":packageUuid,
                "discount_code":discount
                // "payload":{
                //     "workspace":webAdress,
                //     "keywords":[
                //         charKey1,
                //         charKey2
                //     ],
                //     "links":[
                //         site1,
                //         site2
                //     ]
                // }
            }
            var packageInfoJson=JSON.stringify(packageInfo);
            
            let toastMessage = "";
            try {
                const { data } = await buyPlna(packageInfo);
                debugger
                // const { data } = await buyPlna({
                //     "type": "package",
                //     "uuid": "eb2f7f18-5f0d-47fc-8610-99a71c869006",
                //     "discount_code":"sample-code",
                //     "payload": {
                //         "workspace": "https://aaadv.com",
                //         "keywords": [
                //             "key1",
                //             "key2"
                //         ],
                //         "links": [
                //             "https://avbaa.com/blog",
                //             "https://aaacvb.com/video"
                //         ]
                //     }
                // });
                // const { data, status } = await applyDiscount("sample-code");
                if (data.code == 200 && data.status == true) {
                    localStorage.setItem("buyType",buyType)
                    window.location.href=data.data;
                    // state.forceUpdate += 1;
                    toast.update(toastPromise, { render:  data.data.msg, type: "success", isLoading: false, autoClose: 3000 })
                } else {
                    // data.errors.forEach(element => {
                    //     toastMessage += element + " / ";
                    // });
                    toast.update(toastPromise, { render: data.data.msg, type: "error", isLoading: false, autoClose: 3000 })
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
        
        await dispatch({ type: "MODAL_PLAN_BUY_PLAN", payload: state })
    }
}
export const applyDiscountAction = discountCode => {
    return async (dispatch, getState) => {
        //  
        const state = { ...getState().planState }
        if (discountCode) {
            let toastPromise = toast.loading("درحال ارسال درخواست شما به سرور")
            
            // debugger
            // debugger
            var formdata = new FormData();
            formdata.append("code", discountCode)
            
            let toastMessage = "";
            try {
                const { data, status } = await applyDiscount(formdata);
                // const { data, status } = await applyDiscount("sample-code");
                if (data.code == 200 && data.data.status == true) {
                    state.discount=discountCode;
                    state.forceUpdate += 1;
                    toast.update(toastPromise, { render:  data.data.msg, type: "success", isLoading: false, autoClose: 3000 })
                } else {
                    // data.errors.forEach(element => {
                    //     toastMessage += element + " / ";
                    // });
                    InputError("discount",data.data.msg)
                    toast.update(toastPromise, { render: data.data.msg, type: "error", isLoading: false, autoClose: 3000 })
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
        
        await dispatch({ type: "MODAL_PLAN_DISCOUNT_CODE", payload: state })
    }
}









// export const setDiscount = code => {
//     return async (dispatch, getState) => { 
//         const state = { ...getState().planState }
//         state.discount=code;
//         await dispatch({ type: "DISCOUNT_CODE", payload: { ...getState().planState } })
//     }
// }






























