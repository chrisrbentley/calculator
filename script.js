const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btns');
const opBtns = document.querySelectorAll('.op-btns');
const division = document.querySelectorAll('.division');
let displayValue = '';
let initialNum = '';
let chosenOperator = '';


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
            displayValue = display.textContent = opBtn.innerHTML;
            chosenOperator = displayValue;
            console.log(chosenOperator);
            return chosenOperator;
        })
    })
}
onOperator();


//operation
/*display.textContent = opBtn.innerHTML;
            if (display.textContent === '÷') {
                let solution = divide(initialNum, 2);
                console.log(solution);
            }
            console.log(initialNum);*/