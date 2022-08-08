export default function DiscountTagValue({ discountValue, discountStatus, tagStatusName, price, planSelected }) {

    // debugger
    // console.log(discountValue, discountStatus, tagStatusName, price, planSelected)
    var originalPrice = "";
    var priceAfterTheDiscount = price.toString().substring(0, price.toString().length - 3)+ " هزار تومان ماهانه";
    if (discountValue != 0) {
        if (discountStatus == tagStatusName) {
            originalPrice = price.toString().substring(0, price.toString().length - 3)+ " هزار تومان ماهانه"
            priceAfterTheDiscount = parseInt(price.toString().substring(0, price.toString().length - 3)) - discountValue + " هزار تومان ماهانه";
        }
    }

    return (
        <div className='price relative'>
            <span className=' absolute bottom-12 line-through w-full text-xs right-0'>{originalPrice}</span>
            <p style={planSelected.substring(0, 1) == tagStatusName.substring(0, 1) ? { color: "rgba(10, 101, 205, 1)" } : null}>{priceAfterTheDiscount}</p>
        </div>
    )
}
