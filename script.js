const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btns');
const opBtns = document.querySelectorAll('.op-btns');
const division = document.querySelectorAll('.division');
const equalBtn = document.querySelectorAll('.equals');
let displayValue = '';
let initialNum = '';
let chosenOperator = '';
let ifOp = '';


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
    } else if (op === '*') {
        return multiply(...nums)
    } else if (op === '/') {
        return divide(...nums)
    }
}


function changeDisplay() {
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
            initialNum = displayValue
            console.log(initialNum);
            return initialNum;
        })
    });
}
changeDisplay();

function onOperator(operate) {
    opBtns.forEach((opBtn) => {
        opBtn.addEventListener('click', () => {
            //initialNum = displayValue;
            newDisplayValue = display.textContent = opBtn.innerHTML;
            chosenOperator = newDisplayValue;
            console.log(chosenOperator);
            return chosenOperator;
        })
    })
}
onOperator();




//operation

/*function onEquals() {
    equalBtn.addEventListener('click', () => {
        display.textContent = '';
        operate(onOperator, changeDisplay);
    })
}*/



/*display.textContent = equalBtn.innerHTML;
    if (display.textContent === '÷') {
        display.textContent = '';
            let solution = divide(initialNum, 2);
                console.log(solution);
}*/