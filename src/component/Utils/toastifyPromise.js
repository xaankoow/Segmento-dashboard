import { toast } from "react-toastify"

export const showPromisToast = (fun) => {
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
    toast.info(message!=undefined?message:'لطفا فیلد هارا با دقت پرکنید', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    });
}
export const showToast = (message,type) => {
        switch (type) {
            case 'success':
                toast.success(message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
                break;
            case 'error':
                toast.error(message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
                break;
        
            default:
                break;
        }
}