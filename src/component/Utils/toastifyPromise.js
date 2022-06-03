import { toast } from "react-toastify"

export const showPromisToast = (fun,message) => {

    // var messageToastSuccess = "c";
    // var messageToastFiled = "f";

    // switch (fun_type) {
    //     case "loginUser":
    //         messageToastSuccess = "ورود موفقیت آمیز"
    //         messageToastFiled = "کاربر با مشخصات فوق یافت نشد"
    //         break;

    //     case "registerUser":
    //         messageToastSuccess = "ثبت نام موفقیت آمیز"
    //         messageToastFiled = "خطا در ثبت نام کاربر"
    //         break;

    //     case "sendCod":
    //         messageToastSuccess = "کد به حساب شما ارسال شد"
    //         messageToastFiled = "حساب شما یافت نشد"
    //         break;


    //     case "checkVerifyEmail":
    //         messageToastSuccess = "اعتبار سنجی ایمیل انجام شد"
    //         messageToastFiled = "کد وارد شده صحیح نمی باشد"
    //         break;


    //     case "changePassword":
    //         messageToastSuccess = "پسورد با موفقیت تغییر کرد"
    //         messageToastFiled = "API برایه تغییر پسورد یافت نشد"
    //         break;


    //     default:
    //         break;
    // }
    debugger
    toast.promise(
        fun
        ,
        {
            hideProgressBar: true,
            rtl:true,
            pending: 'درحال ارسال درخواست شما به سرور',
            success:()=>"ss",
            error: ()=>"ama"
        }
    )
}

export const showInputErrorToast = (message) => {
    // toast.info('لطفا فیلد هارا با دقت پرکنید', {
        debugger
    toast.info(message!=undefined?message:'لطفا فیلد هارا با دقت پرکنید', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        // rtl:true,
        progress: undefined
    });
}