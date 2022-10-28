import { useSelector } from "react-redux";
import { setDiscountPrice, setFormatPrice } from "../FORMAT/price";

export default function DiscountTagValue({ tagStatusName, price, planSelected ,defaultDiscount}) {
    // default_discount_price
    const { discountStatus ,allPackageData } = useSelector(state => state.planState);
    var originalPrice = "";
    var priceAfterTheDiscount = setFormatPrice(price.default_discount_price) + "  تومان";

    if (discountStatus.value != 0 && discountStatus.value>price.default_discount) {
        if (discountStatus.planType == tagStatusName) {
            originalPrice = setFormatPrice(price.default_discount_price) + "  تومان"
            priceAfterTheDiscount = setFormatPrice(setDiscountPrice(price.default_discount_price, discountStatus.value, discountStatus.discountType == "cash" ? true : false).value) + "  تومان";
        }
    }else if (price.default_discount!=undefined&&price.default_discount!=0) {
        originalPrice = setFormatPrice(price.price) + "  تومان"
        priceAfterTheDiscount = setFormatPrice(price.default_discount_price) + "  تومان";
    }

    return (
        <div className='price relative'>
            <span className=' absolute bottom-12 line-through w-full text-xs right-0'>{originalPrice}</span>
            <p style={planSelected.type.substring(0, 1) == tagStatusName.substring(0, 1) ? { color: "rgba(10, 101, 205, 1)" } : null}>{priceAfterTheDiscount}</p>
        </div>
    )
}
