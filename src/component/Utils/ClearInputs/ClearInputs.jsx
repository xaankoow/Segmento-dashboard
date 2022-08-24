export const ClearInputs = () => {
  const inputs = document.querySelectorAll("input[type=text]");
  for (let index = 0; index < inputs.length; index++) {
    inputs[index].value = "";
  }
};
