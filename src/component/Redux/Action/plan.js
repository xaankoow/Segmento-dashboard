import { toast } from "react-toastify";
import { applyDiscount } from "../../service/planService";
import { handleNextInput } from "../../Utils/focusNextInput";
import { showInputErrorToast, showPromisToast } from "../../Utils/toastifyPromise";





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







































