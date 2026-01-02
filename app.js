const lengthValue = document.querySelector("#length-value");
const slider = document.querySelector("#slider");
lengthValue.textContent = slider.value;

slider.addEventListener("input", () => {
  lengthValue.textContent = slider.value;
});
