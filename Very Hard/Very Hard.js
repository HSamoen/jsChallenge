// VERY HARD: create simple calculator

//prompts user to enter first number, operator, second number
const num1 = parseFloat(prompt('Enter first number: '));
const operator = prompt('Enter an operator ( either +, -, * or / ) ');
const num2 = parseFloat(prompt('Enter second number: '));

//returns results using if..else if..else 
let res;

if (operator === '+') {
    res = num1 + num2;
}
else if (operator === '-') {
    res = num1 - num2;
}
else if (operator === '*') {
    res = num1 * num2;
}
else {
    res = num1 / num2;
} alert (num1 + operator + num2 +  '=' + res)  //Example output on alert box: "10 + 5 = 15"

console.log(`${num1} ${operator} ${num2} = ${res}`);  //Example output on console: "10 + 5 = 15"