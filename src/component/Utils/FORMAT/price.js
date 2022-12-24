import { setFormatNumber } from "./number";

export const setFormatPrice = (price, roundToUp) => {

    // const subPrice = price.toString().substring(0, price.toString().length - 3);
    // if (subPrice.length > 3) {
    //     return subPrice.slice(0, subPrice.length - 3) + "." + subPrice.slice(subPrice.length - 3, subPrice.length)
    // }
    var setFormat = price
    setFormat = setFormatNumber(roundToUp ? RoundPriceToUp(price) : price)
    return setFormat
}

export const setDiscountPrice = (price, discountValue, isCash) => {

    var computingDiscountPrice = {
        value: 0,
        type: ""
    }

    if (isCash == true) {
        computingDiscountPrice.value = RoundPriceToUp(price - discountValue);
        computingDiscountPrice.type = " تومان ";

    } else {
        computingDiscountPrice.value = RoundPriceToUp(price - (price - price * `.${discountValue}`));
        computingDiscountPrice.type = " درصد ";
    }
    return computingDiscountPrice;
}


export const RoundPriceToUp = (price) => {
    var roundPrice = price;
    debugger
    // console.log(price)
    if (!Number.isInteger(price)) {
        var getLatestNumbers = parseInt(price.toString().substring(price.toString().length, price.toString().length - 3));
        if (getLatestNumbers > 0) {
            // roundPrice = 1 + parseInt(price.toString().substring(0, price.toString().length - 3)) + "000";
            roundPrice = 1 + parseInt(price.toString().substring(0, price.toString().length - 3)) ;
        }
    }
    return roundPrice;
}