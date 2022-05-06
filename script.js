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

console.log(operate('+', 9, 3, 3, 100));
console.log(operate('-', 100, 10, 40));
console.log(operate('*', 8, 3, 2));
console.log(operate('/', 40, 2, 4));



