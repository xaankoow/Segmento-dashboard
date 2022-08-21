export const ClearInputs = () => {
  const inputs = document.querySelectorAll("input[type=text]");
  const inputPass = document.querySelectorAll("input[type=password]");
  for (let index = 0; index < inputPass.length; index++) {
    inputPass[index].value = "";
  }
  for (let index = 0; index < inputs.length; index++) {
    inputs[index].value = "";
  }
};
