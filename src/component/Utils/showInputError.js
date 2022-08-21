export const InputError = (element, text, textErrorColor, timerStop) => {

    var textError = document.querySelector("." + element);
    var insideInput = document.querySelector(`.${element} + input`);
    
    //  if(insideInput!=null){
    insideInput.style.borderBottom = `2px solid ${textErrorColor != undefined ? textErrorColor : "#F35242"}`;
    // } 
    textError.style.display = "inline-block";
    textError.style.color = textErrorColor && textErrorColor;
    textError.innerHTML = text;
    if (!timerStop) {
        setTimeout(() => {
            if(insideInput!=null){
                insideInput.style.borderBottom = `1px solid ${textErrorColor != undefined ? textErrorColor : "#d3d5e2"}`;
            }
            textError.style.display = "none";
            textError.innerHTML = "";
        }, 5000)
    }
}