import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Paragraph = (typePlan, indexPlan) => {

    const [price, setPrice] = useState(0);
    const { allPackageData } = useSelector(state => state.planState);
    // const price = allPackageData.lenght > 0 ? allPackageData[indexPlan].default_discount:0;
    useEffect(() => {
        // debugger
        if (allPackageData.length > 0) {
            let packPrice = allPackageData[indexPlan!=13?indexPlan:14].default_discount
            setPrice(packPrice.toString().substring(0, packPrice.toString().length - 3))
        }
    }, [indexPlan])


    switch (indexPlan) {
        // سه ماهه
        case 2:
            return `اگر اشتراک 3 ماهه خریداری کنید روی قیمت نهایی محصول 15% تخفیف معادل ${price} هزارتومان دریافت می‌کنید.`
        case 6:
            return `اگر اشتراک 3 ماهه خریداری کنید روی قیمت نهایی محصول 15% تخفیف معادل ${price} هزارتومان دریافت می‌کنید.`
        case 10:
            return `اگر اشتراک 3 ماهه خریداری کنید روی قیمت نهایی محصول 15% تخفیف معادل ${price} هزارتومان دریافت می‌کنید.`
        case 14:
            return `اگر اشتراک 3 ماهه خریداری کنید روی قیمت نهایی محصول 15% تخفیف معادل ${price} هزارتومان دریافت می‌کنید.`


        // شیش ماهه
        case 3:
            return `اگر اشتراک 6 ماهه خریداری کنید روی قیمت نهایی محصول	یک ماه تخفیف معادل ${price} هزارتومان دریافت می‌کنید.`
        case 7:
            return `اگر اشتراک 6 ماهه خریداری کنید روی قیمت نهایی محصول	یک ماه تخفیف معادل ${price} هزارتومان دریافت می‌کنید.`
        case 11:
            return `اگر اشتراک 6 ماهه خریداری کنید روی قیمت نهایی محصول	یک ماه تخفیف معادل ${price} هزارتومان دریافت می‌کنید.`
        case 15:
            return `اگر اشتراک 6 ماهه خریداری کنید روی قیمت نهایی محصول	یک ماه تخفیف معادل ${price} هزارتومان دریافت می‌کنید.`



        // دوازده ماهه
        case 4:
            return `اگر اشتراک 12 ماهه خریداری کنید روی قیمت نهایی محصول	2 ماه تخفیف معادل ${price} هزارتومان دریافت می‌کنید.`
        case 8:
            return `اگر اشتراک 12 ماهه خریداری کنید روی قیمت نهایی محصول	2 ماه تخفیف معادل ${price} هزارتومان دریافت می‌کنید.`
        case 12:
            return `اگر اشتراک 12 ماهه خریداری کنید روی قیمت نهایی محصول	2 ماه تخفیف معادل ${price} هزارتومان دریافت می‌کنید.`
        case 16:
            return `اگر اشتراک 12 ماهه خریداری کنید روی قیمت نهایی محصول	2 ماه تخفیف معادل ${price} هزارتومان دریافت می‌کنید.`
        default:
            break;
    }

    switch (typePlan) {
        case "bronze":
            return "اگر اشتراک نقره‌ای خریداری کنید به امکانات بیشتری دسترسی خواهید داشت"
        case "silver":
            return "اگر اشتراک طلایی خریداری کنید به امکانات بیشتری دسترسی خواهید داشت"
        case "gold":
            return "اگر اشتراک الماسی خریداری کنید به امکانات بیشتری دسترسی خواهید داشت"
        case "diamond":
            return `اگر اشتراک 3 ماهه خریداری کنید روی قیمت نهایی محصول 15% تخفیف معادل ${price} هزارتومان دریافت می‌کنید.`
        default:
            break;
    }

    return "با خرید اشتراک 12 ماهه طلایی شما فقط مبلغ 10 ماه رو پرداخت میکنید؛ 2 ماه مهمون سگمنتو باشین"
}