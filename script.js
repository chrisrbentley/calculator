const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btns')
let displayValue = '';


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
            console.log(displayValue);
            return displayValue;
        })
    });
}
changeDisplay();

console.log(changeDisplay);
