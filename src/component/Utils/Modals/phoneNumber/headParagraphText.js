export const paragraphText = (step, operationType) => {
    switch (step) {
        case 1:

            return (
                <p className='text-primaryV1 text-sm px-5'>
                    {operationType == "verify" ? (
                        "برای حفظ امنیت حساب کاربری‌تان، شماره همراه خود را در کادر زیر وارد کنید:"
                    ) : (
                        "برای تغییر شماره همراه‌تان، شماره جدید را در کادر زیر وارد کنید:"
                    )}
                </p>
            )
        case 2:
            return (
                <p className='text-primaryV1 text-sm px-5'>
                    همین حالا <span className="text-primaryV1 border-b">کدی</span> که از طریق پیامک دریافت کردید را در کادر زیر بنویسید.
                    <br/>
                    <br/>
                    اگر کدی دریافت نکردید، روی گزینه دریافت مجدد کد، کلیک کنید.
                </p>
            )

        default:
            break;
    }
}
