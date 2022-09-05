export const ClearInputs = (type) => {
  const inputs = document.querySelectorAll("input[type=text]");
  const passInputs = document.querySelectorAll("input[type=password]");
  if (type == "password") {
    for (let index = 0; index < passInputs.length; index++) {
      passInputs[index].value = "";
    }
  } else {
    for (let index = 0; index < inputs.length; index++) {
      inputs[index].value = "";
    }
  }
};
