export const setFormatPrice=(price)=>{

    const subPrice= price.toString().substring(0, price.toString().length - 3);

    if (subPrice.length>3) {
        return subPrice.slice(0, subPrice.length-3)+"."+subPrice.slice(subPrice.length-3, subPrice.length)
    }
    
    return subPrice
}