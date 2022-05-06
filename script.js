let add = (...nums) => {
    return nums.reduce((a, b) => a + b);
}
console.log(add(9, 9, 3, 80));


let subtract = (...nums) => {
    return nums.reduce((a, b) => a - b);
}
console.log(subtract(43, 3, 10));


let multiply = (...nums) => {
    return nums.reduce((a, b) => a * b);
}
console.log(multiply(9, 9, 2));

let divide = (...nums) => {
    return nums.reduce((a, b) => a / b);
}
console.log(divide(100, 10, 2));


