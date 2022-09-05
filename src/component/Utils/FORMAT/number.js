export const setFormatNumber = (subNumber) => {

    const innerNum=Math.ceil(subNumber).toString();;
    

    if (innerNum.length > 6) {

        return innerNum.slice(0, innerNum.length - 6) + "." +innerNum.slice(innerNum.length - 6, innerNum.length - 3) + "." + innerNum.slice(innerNum.length - 3, innerNum.length)
   
    } else if (innerNum.length > 3) {

        return innerNum.slice(0, innerNum.length - 3) + "." + innerNum.slice(innerNum.length - 3, innerNum.length)
    
    }


    return subNumber

}

export const setFloorNumber = (floorNumber) => {

    const num = Math.floor(parseFloat(floorNumber));

    return num
}

// get number at the strign
export const getNumberFromString = (findNum) => {
    var numb = findNum.match(/\d/g);
    numb = numb.join("");
    return numb
}