export const setFormatNumber=(subNumber)=>{

    if (subNumber.toString().length > 3) {
        return subNumber.toString().slice(0, subNumber.toString().length - 3) + "." + subNumber.toString().slice(subNumber.toString().length - 3, subNumber.toString().length)
    }

    return subNumber

}