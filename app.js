const lengthValue = document.querySelector("#length-value");
const slider = document.querySelector("#slider");
const checkboxs = document.querySelectorAll(".checkbox");
const includeLabels = document.querySelectorAll(".include-label");
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
