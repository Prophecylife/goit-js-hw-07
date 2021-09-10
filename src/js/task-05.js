const nameOutput = document.querySelector('#name-output');
const nameInput = document.querySelector('#name-input');

nameInput.addEventListener("input", ()=>{
 nameInput.value === ""
  ? (nameOutput.textContent = "незнакомец")
  : (nameOutput.textContent = nameInput.value);
});