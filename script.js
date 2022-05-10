const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btns');
const opBtns = document.querySelectorAll('.op-btns');
const division = document.querySelectorAll('.division');
const equalBtn = document.querySelector('.equals');

let displayValue = '';
let initialNum = [];
let chosenOperator = '';
let ifOp = '';
let converted = [];

let add = (...nums) => {
    return nums.reduce((a, b) => a + b);
}

let subtract = (...nums) => {
    return nums.reduce((a, b) => a - b);
}

let multiply = (...nums) => {
    return nums.reduce((a, b) => a * b);
}

let divide = (...nums) => {
    return nums.reduce((a, b) => a / b);
}

let operate = (op, ...nums) => {
    if (op === '+') {
        return add(...nums)
    } else if (op === '-') {
        return subtract(...nums)
    } else if (op === '×') {
        return multiply(...nums)
    } else if (op === '÷') {
        return divide(...nums)
    }
}

//console.log(operate('+', 4, 2));


function numberInput() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (display.textContent === '-') {
                display.textContent = '';
            } else if (display.textContent === '+') {
                display.textContent = '';
            } else if (display.textContent === '×') {
                display.textContent = '';
            } else if (display.textContent === '÷') {
                display.textContent = '';
            }
            displayValue = display.textContent += button.innerHTML;
            return initialNum;
        })
    });
}
numberInput();

function onOperator() {
    opBtns.forEach((opBtn) => {
        opBtn.addEventListener('click', () => {
            initialNum.push(displayValue);
            display.textContent += initialNum;
            newDisplayValue = display.textContent = opBtn.innerHTML;
            chosenOperator = newDisplayValue;
            console.log(chosenOperator);
            return chosenOperator;
        })
    })
}
onOperator();


function onEquals() {
    equalBtn.addEventListener('click', () => {
        initialNum.push(displayValue);
        converted = initialNum.map(Number);
        display.textContent = operate(chosenOperator, ...converted);
        console.log(operate(chosenOperator, ...converted));
    })
}
onEquals();