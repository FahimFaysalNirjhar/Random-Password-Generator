const lengthValue = document.querySelector("#length-value");
const slider = document.querySelector("#slider");
const checkboxs = document.querySelectorAll(".checkbox");
const includeLabels = document.querySelectorAll(".include-label");
const btn = document.querySelector("button");
const password = document.querySelector("#password");

lengthValue.textContent = slider.value;

slider.addEventListener("input", () => {
  lengthValue.textContent = slider.value;
});

checkboxs.forEach((checkbox) => {
  checkbox.addEventListener("click", (event) => {
    if (event.target.innerText === "radio_button_unchecked") {
      event.target.innerText = "task_alt";
      event.target.nextElementSibling.nextElementSibling.checked = true;
    } else {
      event.target.innerText = "radio_button_unchecked";
      event.target.nextElementSibling.nextElementSibling.checked = false;
    }
  });
});

includeLabels.forEach((label) => {
  label.addEventListener("click", (event) => {
    if (
      event.target.previousElementSibling.innerText === "radio_button_unchecked"
    ) {
      event.target.previousElementSibling.innerText = "task_alt";
    } else {
      event.target.previousElementSibling.innerText = "radio_button_unchecked";
    }
  });
});

btn.addEventListener("click", () => {
  let length = slider.value;
  let upperCase = document.querySelector("#upparCase").checked;
  let lowerCase = document.querySelector("#lowerCase").checked;
  let symbols = document.querySelector("#symbols").checked;
  let numbers = document.querySelector("#numbers").checked;
  let passwordGenerated = generatePassword(
    length,
    upperCase,
    lowerCase,
    symbols,
    numbers
  );
  password.value = passwordGenerated;
});

function generatePassword(length, upperCase, lowerCase, symbols, numbers) {
  let charSet = "";
  let str = "";
  if (upperCase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowerCase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
  if (symbols) charSet += "!@#$%^&*()-<>?";
  if (numbers) charSet += "0123456789";
  for (i = 0; i < length; i++) {
    str += charSet.charAt(Math.round(Math.random() * charSet.length));
  }
  console.log(str);
  return str;
}
