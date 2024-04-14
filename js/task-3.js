const inputEL = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
console.log(inputEL);
inputEL.addEventListener("input", (event) => {
  outputEl.textContent = event.currentTarget.value.trim();
  if (
    event.currentTarget.value === "" ||
    /^\s+$/.test(event.currentTarget.value)
  ) {
    outputEl.textContent = "Anonymous";
  }
});
