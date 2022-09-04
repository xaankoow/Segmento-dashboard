export const paragraphText = (step) => {
  switch (step) {
    case 1:
      return (
        <p className="text-primaryV1 text-sm px-5">
          برای حفظ امنیت حساب کاربری‌تان، شماره همراه خود را در کادر زیر وارد
          کنید:
        </p>
      );
    case 2:
      return (
        <p className="text-primaryV1 text-sm px-5">
          همین حالا کدی که از طریق پیامک دریافت کردید را در کادر زیر بنویسید.{" "}
          <br /><br />
          اگر کدی دریافت نکردید، روی گزینه دریافت مجدد کد، کلیک کنید.{" "}
        </p>
      );

    default:
      break;
  }
};
