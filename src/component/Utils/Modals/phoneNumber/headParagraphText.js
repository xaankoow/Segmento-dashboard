export const paragraphText = (step) => {
    switch (step) {
        case 1:
            return (
                <p className='text-primaryV1 text-sm px-5'>
                    کاربر گرامی برای تایید شماره همراه خود لطفا شماره همراه خود را در کادر پایین وارد کنید تا ما برای شما یک کد تایید ارسال کنیم :
                    <br />
                    شماره همراه شما برای امنیت حساب کاربریتون مهم است
                </p>
            )
        case 2:
            return (
                <p className='text-primaryV1 text-sm px-5'>
                    کد فعالسازی که برای شما ارسال شده است رو در کادر پایین بنویسید .
                    <br />
                    اگر کدی برای شما ارسال نشده است دریافت مجدد کد را فشار دهید
                </p>
            )

        default:
            break;
    }
}
