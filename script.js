add = (...numbers) => {
    let sum = 0;
    numbers.forEach(function(number) {
        sum += number;
    });
    console.log(sum);
    return sum;
};

add(1, 9, 30);

subtract = (a, ...numbers) => {
    let sum = a;
    numbers.forEach(function(number) {
        sum -= number;
    })
    console.log(sum);
    return sum;
}

subtract(50, 10, 20);

multiply = (a, ...numbers) => {
    let sum = a;
    numbers.forEach(function(number) {
        sum *= number;
    })
    console.log(sum);
    return sum;
}

multiply(8, 3, 2, 100);

divide = (a, ...numbers) => {
    let sum = a;
    numbers.forEach(function(number) {
        sum /= number;
    })
    console.log(sum);
    return sum;
}

divide(80, 10, 2)