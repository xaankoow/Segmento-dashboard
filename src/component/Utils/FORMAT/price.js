export const setFormatPrice = (price) => {

    const subPrice = price.toString().substring(0, price.toString().length - 3);

    if (subPrice.length > 3) {
        return subPrice.slice(0, subPrice.length - 3) + "." + subPrice.slice(subPrice.length - 3, subPrice.length)
    }

    return subPrice
}

export const setDiscountPrice = (price, discountValue, isCash) => {

    var computingDiscountPrice = {
        value: 0,
        type: ""
    }

    if (isCash == true) {
        computingDiscountPrice.value =roundPriceToUp(price - discountValue);
        computingDiscountPrice.type = " هزارتومان ";

    } else {
        computingDiscountPrice.value = roundPriceToUp(price - (price - price * `.${discountValue}`));
        computingDiscountPrice.type = " درصد ";
    }
    return computingDiscountPrice;
}


export const roundPriceToUp = (price) => {
    var roundPrice = price;
    debugger
    var getLatestNumbers = parseInt(price.toString().substring(price.toString().length, price.toString().length - 3));
    if (getLatestNumbers > 0) {
        roundPrice = 1 + parseInt(price.toString().substring(0, price.toString().length - 3)) + "000";
    }
    return roundPrice;
}