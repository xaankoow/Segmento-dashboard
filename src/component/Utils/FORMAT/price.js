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
        computingDiscountPrice.value = price - discountValue;
        computingDiscountPrice.type = " هزارتومان ";

    } else {
        // debugger

        let ds=price * `.${discountValue}`
        computingDiscountPrice.value = price - (price * `.${discountValue}`);
        computingDiscountPrice.type = " درصد ";
    }
    return computingDiscountPrice;
}