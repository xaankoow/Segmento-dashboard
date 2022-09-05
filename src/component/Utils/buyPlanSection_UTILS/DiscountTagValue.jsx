import { useSelector } from "react-redux";
import { setDiscountPrice, setFormatPrice } from "../FORMAT/price";

export default function DiscountTagValue({ tagStatusName, price, planSelected }) {
    // default_discount_price
    const { discountStatus } = useSelector(state => state.planState);
    var originalPrice = "";
    var priceAfterTheDiscount = setFormatPrice(price) + "  تومان ماهانه";
    if (discountStatus.value != 0) {
        if (discountStatus.planType == tagStatusName) {
            originalPrice = setFormatPrice(price) + "  تومان ماهانه"
            priceAfterTheDiscount = setFormatPrice(price-setDiscountPrice(price, discountStatus.value, discountStatus.discountType == "cash" ? true : false).value) + "  تومان ماهانه";
        }
    }

    return (
        <div className='price relative'>
            <span className=' absolute bottom-12 line-through w-full text-xs right-0'>{originalPrice}</span>
            <p style={planSelected.substring(0, 1) == tagStatusName.substring(0, 1) ? { color: "rgba(10, 101, 205, 1)" } : null}>{priceAfterTheDiscount}</p>
        </div>
    )
}
