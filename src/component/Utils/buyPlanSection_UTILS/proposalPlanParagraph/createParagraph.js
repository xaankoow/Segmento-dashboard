import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setFormatPrice } from "../../FORMAT/price";

export const Paragraph = (typePlan, indexPlan) => {

    const [price, setPrice] = useState(0);
    const { allPackageData } = useSelector(state => state.planState);
    // const price = allPackageData.lenght > 0 ? allPackageData[indexPlan].default_discount:0;
    useEffect(() => {
        indexPlan++
        // debugger
        if (allPackageData.length > 0) {
            var packPrice;
            // debugger
            // console.log(indexPlan)
            // if (indexPlan==4|indexPlan==8|indexPlan==12) {
            if (indexPlan==6|indexPlan==10|indexPlan==12) {
                packPrice = allPackageData[indexPlan+4].default_discount
            }else{
                packPrice = allPackageData[indexPlan != 16 ?  +1 : indexPlan].default_discount
            }
            // console.log(Math.ceil(packPrice))
            
            setPrice(setFormatPrice(Math.ceil(packPrice)))
        }
    }, [indexPlan])


    switch (indexPlan) {
        // سه ماهه
        case 3:
            return `اگر اشتراک 6 ماهه خریداری کنید روی قیمت نهایی محصول	یک ماه تخفیف معادل ${price} تومان دریافت می‌کنید.`
        case 7:
            return `اگر اشتراک 6 ماهه خریداری کنید روی قیمت نهایی محصول	یک ماه تخفیف معادل ${price} تومان دریافت می‌کنید.`
        case 11:
            return `اگر اشتراک 6 ماهه خریداری کنید روی قیمت نهایی محصول	یک ماه تخفیف معادل ${price} تومان دریافت می‌کنید.`
        case 15:
            return `اگر اشتراک 6 ماهه خریداری کنید روی قیمت نهایی محصول	یک ماه تخفیف معادل ${price} تومان دریافت می‌کنید.`


        // شیش ماهه
        case 4:
            return `اگر اشتراک 12 ماهه خریداری کنید روی قیمت نهایی محصول	2 ماه تخفیف معادل ${price} تومان دریافت می‌کنید.`
        case 8:
            return `اگر اشتراک 12 ماهه خریداری کنید روی قیمت نهایی محصول	2 ماه تخفیف معادل ${price} تومان دریافت می‌کنید.`
        case 12:
            return `اگر اشتراک 12 ماهه خریداری کنید روی قیمت نهایی محصول	2 ماه تخفیف معادل ${price} تومان دریافت می‌کنید.`
        case 16:
            return `اگر اشتراک 12 ماهه خریداری کنید روی قیمت نهایی محصول	2 ماه تخفیف معادل ${price} تومان دریافت می‌کنید.`



        // دوازده ماهه
        case 5:
            return `اگر اشتراک 12 ماهه نقره ای خریداری کنید روی قیمت نهایی محصول	2 ماه تخفیف معادل ${price} تومان دریافت می‌کنید.`
        case 9:
            return `اگر اشتراک 12 ماهه طلایی خریداری کنید روی قیمت نهایی محصول	2 ماه تخفیف معادل ${price} تومان دریافت می‌کنید.`
        case 13:
            return `اگر اشتراک 12 ماهه الماسی خریداری کنید روی قیمت نهایی محصول	2 ماه تخفیف معادل ${price} تومان دریافت می‌کنید.`
        case 17:
            return `قطعا از این بهتر نمیشه، معلومه دنبال بهترین ها هستین.`
        default:
            break;
    }

    switch (typePlan) {
        case "bronze":
            return `اگر اشتراک 3 ماهه خریداری کنید روی قیمت نهایی محصول 15% تخفیف معادل ${price} تومان دریافت می‌کنید.`
        case "silver":
            return `اگر اشتراک 3 ماهه خریداری کنید روی قیمت نهایی محصول 15% تخفیف معادل ${price} تومان دریافت می‌کنید.`
        case "gold":
            return `اگر اشتراک 3 ماهه خریداری کنید روی قیمت نهایی محصول 15% تخفیف معادل ${price} تومان دریافت می‌کنید.`
        case "diamond":
            return `اگر اشتراک 3 ماهه خریداری کنید روی قیمت نهایی محصول 15% تخفیف معادل ${price} تومان دریافت می‌کنید.`
        default:
            break;
    }

    // return "با خرید اشتراک 12 ماهه طلایی شما فقط مبلغ 10 ماه رو پرداخت میکنید؛ 2 ماه مهمون سگمنتو باشین"
    return ""
}