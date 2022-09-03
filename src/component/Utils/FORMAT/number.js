export const setFormatNumber=(subNumber)=>{

    if (subNumber.toString().length > 3) {
        return subNumber.toString().slice(0, subNumber.toString().length - 3) + "." + subNumber.toString().slice(subNumber.toString().length - 3, subNumber.toString().length)
    }

    return subNumber

}

export const setFloorNumber=(floorNumber)=>{

    const num =Math.floor(parseFloat(floorNumber));

    return num
}

// get number at the strign
export const getNumberFromString=(findNum)=>{
    var numb = findNum.match(/\d/g);
    numb = numb.join("");
    return numb
}