//const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btns');
const opBtns = document.querySelectorAll('.op-btns');
//const division = document.querySelectorAll('.division');
const equalBtn = document.querySelector('.equals');

let sum = [];
let nums = [];
let num2 = [];
let op;
let newNum;
let secondNum;
let bothNums = [];

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


function numberClick() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (nums.length === 0) {
                nums.push(button.innerHTML);
                return nums
            } else if (nums.length > 0) {
                num2.push(button.innerHTML);
                return nums
            }
        })
    })
}
numberClick();
 
function onOperator() {
    opBtns.forEach((opBtn) => {
        opBtn.addEventListener('click', () => {
            if (bothNums.length > 0 && sum.length < 1) {
                newNum = nums.concat(num2);
                newNum = newNum.join('');
                bothNums.push(newNum);
                bothNums = bothNums.map(Number);
                sum = operate(chosenOperator, ...bothNums);
                bothNums = []
                bothNums.push(sum);
                nums = [];
                chosenOperator = opBtn.innerHTML;
                return sum;
            } else if (bothNums.length > 0 && sum != '') {
                if (nums.length === 0 && num2.length === 0) {
                    chosenOperator = opBtn.innerHTML;
                    newNum = [];
                } else if (nums.length > 0) {
                    newNum = nums.concat(num2);
                    newNum = newNum.join('');
                    bothNums.push(newNum);
                    bothNums = bothNums.map(Number);
                    sum = operate(chosenOperator, ...bothNums);
                    newNum = [];
                    nums = [];
                    num2 = [];
                    bothNums = [];
                    bothNums.push(sum); /////
                    chosenOperator = opBtn.innerHTML;
                } else if (nums.length > 0 && num2.length < 1) {
                    console.log('newtest');
                }
                else {
                    num2 = num2.join('');
                    num2 = parseInt(num2);
                    bothNums.push(num2);
                    sum = operate(chosenOperator, ...bothNums)
                    chosenOperator = opBtn.innerHTML;
                    num2 = [];
                    bothNums = []
                    bothNums.push(sum);
                    return sum;
                }
            } else {
                chosenOperator = opBtn.innerHTML;
                newNum = nums.concat(num2);
                newNum = newNum.join('');
                bothNums.push(newNum);
                bothNums = bothNums.map(Number);
                nums = [];
                num2 = [];
                return bothNums;
            };
        })
    })
}
onOperator();

function onEquals() {
    equalBtn.addEventListener('click', () => {
        if (sum != '') {
            if (nums.length > 0 && num2.length === 0) {
                newNum = nums.concat(num2);
                bothNums.push(newNum[0]);
                bothNums = bothNums.map(Number);
                sum = operate(chosenOperator, ...bothNums);
                nums = [];
                num2 = [];
                bothNums = []; //
                bothNums.push(sum); //
            } else if (nums.length > 0 && num2.length > 0) {
                console.log('222');
                newNum = nums.concat(num2);
                newNum = newNum.join('');
                bothNums.push(newNum);
                bothNums = bothNums.map(Number);
                sum = operate(chosenOperator, ...bothNums);
                nums = [];
                num2 = [];
            } else {
                num2 = num2.join('');
                num2 = parseInt(num2);
                bothNums.push(num2);
                sum = operate(chosenOperator, ...bothNums)
                bothNums = [];
                bothNums.push(sum);
                num2 = [];
                return sum;
            }
        } else {
            newNum = nums.concat(num2);
            newNum = newNum.join('');
            bothNums.push(newNum);
            bothNums = bothNums.map(Number);
            nums = [];
            num2 = [];
            sum = operate(chosenOperator, ...bothNums);
            bothNums = [];
            bothNums.push(sum);
            return sum;
        }
        
    })
}
onEquals();