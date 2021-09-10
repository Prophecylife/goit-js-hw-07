const inputValue = document.querySelector('#validation-input');
console.dir(inputValue);
const inputLength = inputValue.getAttribute('data-length');
inputValue.addEventListener('blur', () => {
    if (inputLength == inputValue.value.length) {
        inputValue.classList.remove('invalid');
        inputValue.classList.add('valid');
    }
    else {
        inputValue.classList.remove('valid');
        inputValue.classList.add('invalid');
    }
    }
);
