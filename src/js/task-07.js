const fontSizeBar = document.querySelector("#font-size-control");
const fontSizeOutput = document.querySelector("#text");

const scrollSize = (event) => {
  fontSizeOutput.style.fontSize = event.currentTarget.value + `px`;
};

fontSizeBar.addEventListener("input", scrollSize);