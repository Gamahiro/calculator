const numButtons = document.querySelectorAll(".numButton");
const displayNumbers = document.querySelector(".display");
const operatorButton = document.querySelectorAll(".operatorButton");



//EventListener number button: send button pressed to display

//update sum to += number


function add(num1, num2) {

    num1 += num2;
    console.log(num1);
}


function subtract(num1, num2) {

    num1 -= num2;
    console.log(num1);
}


function multiply(num1, num2) {

    num1 *= num2;
    console.log(num1);
}


function divide(num1, num2) {

    num1 /= num2;
    console.log(num1);
}

function operate(operator, num1, num2) {
    
    if(operator === '+') {
        add(num1, num2);
    } 
    else if(operator === '-') {
        subtract(num1, num2);
    }
    else if(operator === '*') {
        multiply(num1, num2);
    }
    else if(operator === '/') {
        divide(num1, num2);
    }







}