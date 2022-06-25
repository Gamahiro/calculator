/* <---- calculator ----->

Add

Subtract

Multiply

Divide

*/

const numButtons = document.querySelectorAll(".numButton");
const displayNumbers = document.querySelector(".display");
const operatorButton = document.querySelectorAll(".operatorButton");

// ---- why doesn't it work? -----
console.log('yep');



function addToDisplay(num) {
    if (displayNumbers.textContent === '0') {
        displayNumbers.textContent = "";
        displayNumbers.textContent += num;
    } else {
        displayNumbers.textContent += num;
    }

}


numButtons.forEach((btn) => {


    if (btn.id == "num1Button") {
        btn.addEventListener('click', () => {
            addToDisplay(1);
        });
    } else if (btn.id == "num2Button") {
        btn.addEventListener('click', () => {
            addToDisplay(2);
        });
    } else if (btn.id == "num3Button") {
        btn.addEventListener('click', () => {
            addToDisplay(3);
        });
    } else if (btn.id == "num4Button") {
        btn.addEventListener('click', () => {
            addToDisplay(4);
        });
    } else if (btn.id == "num5Button") {
        btn.addEventListener('click', () => {
            addToDisplay(5);
        });
    } else if (btn.id == "num6Button") {
        btn.addEventListener('click', () => {
            addToDisplay(6);
        });
    } else if (btn.id == "num7Button") {
        btn.addEventListener('click', () => {
            addToDisplay(7);
        });
    } else if (btn.id == "num8Button") {
        btn.addEventListener('click', () => {
            addToDisplay(8);
        });
    } else if (btn.id == "num9Button") {
        btn.addEventListener('click', () => {
            addToDisplay(9);
        });
    } else if (btn.id == "num0Button") {
        btn.addEventListener('click', () => {
            addToDisplay(0);
        });
    }

});

let num1;
let operator;


operatorButton.forEach((btn) => {


    if (btn.id == "addButton") {

        btn.addEventListener('click', () => {
            operator = '+';
            num1 = displayNumbers.textContent;
            displayNumbers.textContent = "";
        });
    }

    if (btn.id == "subtractButton") {

        btn.addEventListener('click', () => {
            operator = '-';
            num1 = displayNumbers.textContent;
            displayNumbers.textContent = "";

        });
    }

    if (btn.id == "multiplyButton") {

        btn.addEventListener('click', () => {
            operator = '*';
            num1 = displayNumbers.textContent;
            displayNumbers.textContent = "";

        });
    }

    if (btn.id == "divideButton") {

        btn.addEventListener('click', () => {
            operator = '/';
            num1 = displayNumbers.textContent;
            displayNumbers.textContent = "";

        });
    }

    if (btn.id == "equalsButton") {
        btn.addEventListener('click', () => {
            operate(operator, Number(num1), Number(displayNumbers.textContent));


        });
    }
});









function add(num1, num2) {
    
    sum = num1 + num2;
    displayNumbers.textContent = sum;
}

function subtract(num1, num2) {
    
    sum = num1 - num2;
    displayNumbers.textContent = sum;
}

function multiply(num1, num2) {
    
    sum = num1 * num2;
    displayNumbers.textContent = sum;
}

function divide(num1, num2) {
    
    sum = num1 / num2;
    displayNumbers.textContent = sum;
}

function operate(operator, num1, num2) {

    if (operator === '+') {
        add(num1, num2);
    } else if (operator === '-') {
        subtract(num1, num2);
    } else if (operator === "*") {
        multiply(num1, num2);
    } else if (operator === "/") {
        divide(num1, num2);
    }




}