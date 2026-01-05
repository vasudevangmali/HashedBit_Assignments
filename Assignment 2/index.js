// Program 1
function evenNumbers() {
    for (let i = 1; i < 101; i++) {
        if (i % 2 == 0) {
           console.log(i)
        }
    }
}

console.log("Program 1")
evenNumbers()
console.log("\n------------------------------");

// Program 2
function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return "Error: Invalid Operator.";
    }

    return result;
}

console.log("\nProgram 2")
console.log("10 + 5 =",calculate(10, 5, '+'));      
console.log("10 - 5 =",calculate(10, 5, '-'));   
console.log("10 * 5 =",calculate(10, 5, '*'));
console.log("10 / 5 =",calculate(10, 5, '/'));
console.log("\n------------------------------");

// Program 3
function findTax(salary) {
    let tax = 0;
    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10;
            break
        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20;
            break
        case (salary > 1500000):
            tax = salary * 0.30;
            break;
    }

    return tax;
}

console.log("\nProgram 3")
console.log("Tax on 400000 salary :",findTax(400000));   
console.log("Tax on 750000 salary :",findTax(750000));   
console.log("Tax on 1200000 salary :",findTax(1200000));  
console.log("Tax on 2000000 salary :",findTax(2000000));  
console.log("\n------------------------------");

// Program 4
function sumOfProducts(num1, num2) {
    console.log("Number 1 :",num1);
    console.log("Number 2 :",num2);
    let sum = 0;
    while (num1 > 0 || num2 > 0) {
        let d1 = num1 % 10;
        let d2 = num2 % 10;

        sum += d1 * d2;

        num1 = Math.floor(num1 / 10);
        num2 = Math.floor(num2 / 10);
    }

    return sum;
}

console.log("\nProgram 4")
console.log("Sum of Products :",sumOfProducts(6, 34)); 