const form = document.forms.calcForm;
const container = document.querySelector('.container');
const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const multiplyButton = document.querySelector('.multiply');
const sqrtButton = document.querySelector('.sqrt');
let firstNumber = document.querySelector('.first__number');
let secondNumber = document.querySelector('.second__number');


plusButton.addEventListener('click', (ev) =>{
    ev.preventDefault();

    const aPlusInp = Number (firstNumber.value);
    const bPlusInp = Number (secondNumber.value);

    const sum = aPlusInp + bPlusInp;
    container.innerHTML = sum;

});


minusButton.addEventListener('click', (ev) => {
    ev.preventDefault();


    const aMinusInp = Number (firstNumber.value);
    const bMinusInp = Number (secondNumber.value);
    const diff = aMinusInp - bMinusInp;

    container.innerHTML = diff;
});

multiplyButton.addEventListener('click', (ev) => {
    ev.preventDefault();

    const aMultiplyInp = Number (firstNumber.value);
    const bMultiplyInp = Number (secondNumber.value);
    const multiply = Math.pow(aMultiplyInp, bMultiplyInp);

    container.innerHTML = multiply;

});

sqrtButton.addEventListener('click', (ev) => {
    ev.preventDefault();

    const aSqrtInp = Number (firstNumber.value);
    const bSqrtInp = Number (secondNumber.value);
    const sqrt = Math.pow(aSqrtInp, 1/bSqrtInp);

    container.innerHTML = sqrt;
});

const t = 12.231241412;

console.log(Math.ceil(t));

console.log(t.toFixed());