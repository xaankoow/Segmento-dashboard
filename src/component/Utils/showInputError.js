export const InputError = (id, text) => {
    var textError = document.getElementById(id);
    var insideInput = document.querySelector(`#${id} + input`);
    insideInput.style.borderBottom = "2px solid #F35242";
    textError.style.display = "inline-block";
    textError.innerHTML = text;
    setTimeout(() => {
        insideInput.style.borderBottom = "1px solid #d3d5e2";
        textError.style.display = "none";
        textError.innerHTML = "";
    }, 5000);
}