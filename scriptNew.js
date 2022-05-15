const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btns');
const opBtns = document.querySelectorAll('.op-btns');
const division = document.querySelectorAll('.division');
const equalBtn = document.querySelector('.equals');

let sum;
let nums = [10, 2];
let op = '*';

function add(a, b) {
    sum = a + b;
    return sum
}

function subtract(a, b) {
    sum = a - b
    return sum
}

function multiply(a, b) {
    sum = a * b;
    return sum
}

function divide(a, b) {
    sum = a / b;
    return sum
}

function operate(op, ...nums) {
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
console.log(operate(op, ...nums));


/*let displayValue = '';
let chosenOperator = '';
let storedNums = [];
let result = [];
let temp = 1;

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


function numInput() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (display.textContent === '+' || display.textContent === '-' || display.textContent === '×' || display.textContent === '÷' || temp > 1) {
                display.textContent = '';
                temp++
            }
            if (display.textContent === displayValue.toString() && chosenOperator != '') {
                console.log('test');
                temp++
            }

            displayValue = display.textContent += button.innerHTML;
        })
    })
}
numInput();

function opInput() {
    opBtns.forEach((opBtn) => {
        opBtn.addEventListener('click', () => {
            if (storedNums > 0) {
                storedNums.push(display.textContent);
                storedNums = storedNums.map(Number);
                displayValue = display.textContent = operate(chosenOperator, ...storedNums);
                chosenOperator = opBtn.innerHTML;
                storedNums = [];
                storedNums.push(display.textContent);
                storedNums = storedNums.map(Number);
            } else {
                chosenOperator = display.textContent = opBtn.innerHTML;
                storedNums.push(displayValue)
            }
        })
    })
}
opInput();

function onEquals() {
    equalBtn.addEventListener('click', () => {
        storedNums.push(displayValue);
        storedNums = storedNums.map(Number);
        result = display.textContent = operate(chosenOperator, ...storedNums);
    })
}
onEquals();*/