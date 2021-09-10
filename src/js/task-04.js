let counterValue = 0;

const incBtn = document.querySelector('[data-action="increment"]')
const decBtn = document.querySelector('[data-action="decrement"]')
const valP = document.querySelector('#value');

const incFunc = function () {
    counterValue += 1;
    valP.textContent = counterValue;
};
const decFunc = function () {
    counterValue -= 1;
    valP.textContent = counterValue;
};

incBtn.addEventListener('click', incFunc)
decBtn.addEventListener('click', decFunc)