/* <---- calculator ----->

Add

Subtract

Multiply

Divide

*/




function add(num1, num2) {
    //array?
    sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
    //array?
    sum = num1 - num2;
    return sum;
}

function multiply(num1, num2) {
    //array?
    sum = num1 * num2;
    return sum;
}

function divide(num1, num2) {
    //array?
    sum = num1 / num2;
    return sum;
}

function operate(operator, num1, num2) {

    if(operator === '+') {
        add(num1, num2);
    }else if (operator === '-') {
        subtract(num1, num2);
    }else if (operator === "*") {
        multiply(num1, num2);
    }else if (operator === "/") {
        divide(num1, num2);
    }




}