import { toast } from "react-toastify";
import { coreUser } from ".";
import { applyDiscount, buyPlna, getAllPlan, getPlanDetails } from "../../service/planService";
import { creatWorkSpace } from "../../service/workSpaceService";
import { handleNextInput } from "../../Utils/focusNextInput";
import { InputError } from "../../Utils/showInputError";
import { showInputErrorToast, showPromisToast, showToast } from "../../Utils/toastifyPromise";



export const getAllPlanData = () => {
    return async (dispatch, getState) => {
        // debugger
        const state = { ...getState().planState }
        const loadingState = { ...getState().loadingState }

        if (state.allPackageData.length > 0) {

            await dispatch({ type: "MODAL_PLAN_GET_ALL_PLAN_DATA", payload: state })

        } else {
            let toastMessage = "";

            try {
                // debugger
                if (!loadingState.ProcessingDelay.includes("getAllPlan")) {
                    //handle show loadin
                    {
                        loadingState.ProcessingDelay.push("getAllPlan");
                        loadingState.canRequest = false;
                        await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState })
                    }
                    const workSpaces = await getAllPlan()
                    // debugger
                    if (workSpaces.data.status == true && workSpaces.data.code == 200) {
                        state.allPackageData = workSpaces.data.data;
                        await dispatch({ type: "MODAL_PLAN_GET_ALL_PLAN_DATA", payload: state })
                    } else {

                    }
                    //handle hide loading
                    {
                        const loadingState2 = { ...getState().loadingState }
                        var removeProcessingItem = loadingState2.ProcessingDelay.filter(item => item != "getAllPlan");
                        loadingState2.ProcessingDelay = removeProcessingItem;
                        loadingState2.canRequest = removeProcessingItem > 0 ? false : true;
                        await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState2 })
                    }
                }
            } catch (error) {
                // console.log("register error")
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
                //handle hide loading
                {
                    const loadingState2 = { ...getState().loadingState }
                    var removeProcessingItem = loadingState2.ProcessingDelay.filter(item => item != "getAllPlan");
                    loadingState2.ProcessingDelay = removeProcessingItem;
                    loadingState2.canRequest = removeProcessingItem > 0 ? false : true;
                    await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState2 })
                }
            }
        }

    }
}


export const setWebAdress = adress => {
    return async (dispatch, getState) => {
        const state = { ...getState().planState }
        state.webAdress = adress;
        await dispatch({ type: "MODAL_PLAN_WEB_ADRESS", payload: state })
    }
}
export const setCharKey1 = char => {
    return async (dispatch, getState) => {
        const state = { ...getState().planState }
        state.charKey1 = char;
        await dispatch({ type: "MODAL_PLAN_CHAR_KEY1", payload: state })
    }
}
export const setCharKey2 = char => {
    return async (dispatch, getState) => {
        const state = { ...getState().planState }
        state.charKey2 = char;
        await dispatch({ type: "MODAL_PLAN_CHAR_KEY2", payload: state })
    }
}
export const setSite1 = adress => {
    return async (dispatch, getState) => {
        const state = { ...getState().planState }
        state.site1 = adress;
        await dispatch({ type: "MODAL_PLAN_SITE1", payload: state })
    }
}
export const setSite2 = adress => {
    return async (dispatch, getState) => {
        const state = { ...getState().planState }
        state.site2 = adress;
        await dispatch({ type: "MODAL_PLAN_SITE2", payload: state })
    }
}
export const setCommercialPage1 = adress => {
    return async (dispatch, getState) => {
        const state = { ...getState().planState }
        state.commercialPage1 = adress;
        await dispatch({ type: "MODAL_PLAN_COMMERCIAL_PAGE1", payload: state })
    }
}
export const setCommercialPage2 = adress => {
    return async (dispatch, getState) => {
        const state = { ...getState().planState }
        state.commercialPage2 = adress;
        await dispatch({ type: "MODAL_PLAN_COMMERCIAL_PAGE2", payload: state })
    }
}
export const setPlanChosen = plan => {
    return async (dispatch, getState) => {
        const state = { ...getState().planState }
        state.planChosen = plan;
        await dispatch({ type: "MODAL_PLAN_CHOSEN", payload: state })
    }
}

export const setPackageUuid = uuid => {
    return async (dispatch, getState) => {
        const state = { ...getState().planState }
        state.packageUuid = uuid;
        await dispatch({ type: "MODAL_PLAN_PACKAGE_UUID", payload: state })
    }
}

export const setPackageDetails = uuid => {
    return async (dispatch, getState) => {
        const state = { ...getState().planState }
        const { data } = await getPlanDetails(uuid);
        state.planDetails = data.data;
        await dispatch({ type: "MODAL_PLAN_GET_PACKAGE_DETAILS", payload: state })
    }
}

























export const buyPlan = (buyType) => {
    return async (dispatch, getState) => {
        //  
        const state = { ...getState().planState }
        const loadingState = { ...getState().loadingState }

        const packageUuid = state.packageUuid;
        const discount = state.discount;
        // debugger
        if (packageUuid) {


            //handle show loadin
            {
                loadingState.ProcessingDelay.push("buyPlna");
                loadingState.canRequest = false;
                await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState })
            }

            var packageInfo = {
                "type": "package",
                "uuid": packageUuid,
                "discount_code": discount
            }

            let toastMessage = "";
            try {
                const { data } = await buyPlna(packageInfo);
                if (data.code == 200 && data.status == true) {
                    localStorage.setItem("buyType", buyType)
                    window.location.href = data.data;
                    showToast(data.data.msg, "success");
                } else {

                    showToast(data.data.msg, "error");
                }
            } catch (error) {
                error.response.data.errors.forEach(element => {
                    toastMessage += element + " / ";
                });
                showToast(toastMessage, "error");
            }
        } else {
            showInputErrorToast();
        }

        //handle hide loading
        {
            var removeProcessingItem = loadingState.ProcessingDelay.filter(item => item != "buyPlna");
            loadingState.ProcessingDelay = removeProcessingItem;
            loadingState.canRequest = removeProcessingItem > 0 ? false : true;
            await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState })
        }

        await dispatch({ type: "MODAL_PLAN_BUY_PLAN", payload: state })
    }
}




export const tryFreePlan = () => {
    return async (dispatch, getState) => {
        //  
        // debugger
        const state = { ...getState().planState }
        const userState = { ...getState().userState }
        const loadingState = { ...getState().loadingState }

        const packageUuid = state.allPackageData[1].uuid; //انتخاب شناسه پکیج رایگان
        if (packageUuid) {


            //handle show loadin
            {
                loadingState.ProcessingDelay.push("tryFreePlan");
                loadingState.canRequest = false;
                await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState })
            }

            var packageInfo = {
                "type": "package",
                "uuid": packageUuid
            }

            let toastMessage = "";
            try {
                const { data } = await buyPlna(packageInfo);
                // debugger
                if (data.code == 201) {
                    state.checkUseTryFree = true;
                    dispatch(coreUser())
                    // userState.userData = data.data;
                    showToast("پلن 14 روزه رایگان برایه شما فعال شد", "success");
                    // await dispatch({ type: "CORE_USER", payload: userState })
                } else {
                    state.checkUseTryFree = false;
                    data.errors.forEach(element => {
                        toastMessage += element + " / ";;
                    });
                    showToast(toastMessage, "error");
                }
            } catch (error) {
                state.checkUseTryFree = false;
                error.response.data.errors.forEach(element => {
                    toastMessage += element + " / ";
                });
                showToast(toastMessage, "error");
            }
        } else {
            state.checkUseTryFree = false;
            showInputErrorToast();
        }

        //handle hide loading
        {
            var removeProcessingItem = loadingState.ProcessingDelay.filter(item => item != "tryFreePlan");
            loadingState.ProcessingDelay = removeProcessingItem;
            loadingState.canRequest = removeProcessingItem > 0 ? false : true;
            await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState })
        }

        await dispatch({ type: "MODAL_PLAN_TRY_FREE", payload: state })
    }
}















export const applyDiscountAction = (discountCode, planType) => {
    return async (dispatch, getState) => {
        //  
        const state = { ...getState().planState }
        const loadingState = { ...getState().loadingState }
        if (discountCode) {
            // let toastPromise = toast.loading("درحال ارسال درخواست شما به سرور")


            //handle show loadin
            {
                loadingState.ProcessingDelay.push("applyDiscount");
                loadingState.canRequest = false;
                await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState })
            }


            var formdata = new FormData();
            formdata.append("code", discountCode)

            let toastMessage = "";
            try {
                const { data, status } = await applyDiscount(formdata);
                // const { data, status } = await applyDiscount("sample-code");
                if (data.code == 200 && data.data.status == true) {
                    state.discount = discountCode;
                    // debugger
                    // state.discountValue.value = { value: data.data.value.toString().substring(0, data.data.value.toString().length - 3), planType: planType };
                    // state.discountStatus.value = data.data.value.toString().substring(0, data.data.value.toString().length - 3) ;
                    state.discountStatus.value = data.data.value;
                    state.discountStatus.planType = planType;
                    state.discountStatus.discountType = data.data.unit == 1 ? "percentage" : "cash";
                    state.forceUpdate += 1;
                    InputError("discount", "کدتخفیف درست است","#10CCAE",true)
                    // showToast(data.data.msg, "success");
                    // toast.update(toastPromise, { render: data.data.msg, type: "success", isLoading: false, autoClose: 3000 })
                } else {
                    // data.errors.forEach(element => {
                    //     toastMessage += element + " / ";
                    // });
                    showToast(data.data.msg, "error");
                    InputError("discount", data.data.msg)
                    // toast.update(toastPromise, { render: data.data.msg, type: "error", isLoading: false, autoClose: 3000 })
                }
            } catch (error) {
                error.response.data.errors.forEach(element => {
                    toastMessage += element + " / ";
                });
                showToast(toastMessage, "error");
                // toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
            }
        } else {
            showInputErrorToast();
        }

        //handle hide loading
        {
            var removeProcessingItem = loadingState.ProcessingDelay.filter(item => item != "applyDiscount");
            loadingState.ProcessingDelay = removeProcessingItem;
            loadingState.canRequest = removeProcessingItem > 0 ? false : true;
            await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState })
        }

        await dispatch({ type: "MODAL_PLAN_DISCOUNT_CODE", payload: state })
    }
}





export const modalSetWorkSpace = () => {
    return async (dispatch, getState) => {
        //  
        const state = { ...getState().planState }
        const loadingState = { ...getState().loadingState }

        const webAdress = state.webAdress;
        const charKey1 = state.charKey1;
        const charKey2 = state.charKey2;
        const site1 = state.site1;
        const site2 = state.site2;
        const commercialPage1 = state.commercialPage1;
        const commercialPage2 = state.commercialPage1;
        // const packageUuid=state.packageUuid;
        // const discount=state.discount;
        // debugger
        // if (packageUuid) {
        // let toastPromise = toast.loading("درحال ارسال درخواست شما به سرور")


        //handle show loadin
        {
            loadingState.ProcessingDelay.push("creatWorkSpace");
            loadingState.canRequest = false;
            await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState })
        }


        var modalWorkSpace = {

            "workspace": "https://" + webAdress,
            "keywords": [
                {
                    "key": charKey1,
                    "url": "https://" + webAdress + "/" + site1,
                    "competitors": []
                },
                {
                    "key": charKey2,
                    "url": "https://" + webAdress + "/" + site2,
                    "competitors": []
                }
            ],
            "links": [
                "https://" + webAdress + "/" + commercialPage1,
                "https://" + webAdress + "/" + commercialPage2
            ],
            "pages": []

        }

        let toastMessage = "";
        try {
            // debugger
            const { data } = await creatWorkSpace(modalWorkSpace);
            // debugger
            if (data.code == 200 && data.status == true) {
                localStorage.setItem("modalWorkSpace", data.status);
                state.forceUpdate += 1;
                showToast(data.data.msg, "success");
                // toast.update(toastPromise, { render: data.data.msg, type: "success", isLoading: false, autoClose: 3000 })
            } else {
                // data.errors.forEach(element => {
                //     toastMessage += element + " / ";
                // });
                showToast(data.data.msg, "error");
                // toast.update(toastPromise, { render: data.data.msg, type: "error", isLoading: false, autoClose: 3000 })
            }
        } catch (error) {
            error.response.data.errors.forEach(element => {
                toastMessage += element + " / ";
            });
            showToast(toastMessage, "error");
            // toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
        }
        // } else {
        //     showInputErrorToast();
        // }

        //handle hide loading
        {
            var removeProcessingItem = loadingState.ProcessingDelay.filter(item => item != "creatWorkSpace");
            loadingState.ProcessingDelay = removeProcessingItem;
            loadingState.canRequest = removeProcessingItem > 0 ? false : true;
            await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState })
        }

        await dispatch({ type: "MODAL_SET_WORK_SPACE_EASY_START", payload: state })
    }
}



export const resetPlanState = () => {
    return async (dispatch, getState) => {

        await dispatch({ type: "RESET_PLAN_STATE" })
    }
}






























