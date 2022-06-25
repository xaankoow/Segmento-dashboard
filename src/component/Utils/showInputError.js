export const InputError = (element, text) => {
    debugger
    var textError = document.querySelector("."+element);
    var insideInput = document.querySelector(`.${element} + input`);
    insideInput.style.borderBottom = "2px solid #F35242";
    textError.style.display = "inline-block";
    textError.innerHTML = text;
    setTimeout(() => {
        insideInput.style.borderBottom = "1px solid #d3d5e2";
        textError.style.display = "none";
        textError.innerHTML = "";
    }, 5000);
}