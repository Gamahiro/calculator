const numButtons = document.querySelectorAll(".numButton");
const displayNumbers = document.querySelector(".display");
const operatorButton = document.querySelectorAll(".operatorButton");



// calc

// add, subtract, multiply, divide ()


let numberCalc = 0;
let number2;




function add(numberCalc, numToAdd) {
    numberCalc += numToAdd;
    displayNumbers.textContent = numberCalc;
}

function subtract(numberCalc, numToSubtract) {
    numberCalc -= numToSubtract;
    displayNumbers.textContent = numberCalc;
}

function multiply(numberCalc, numToMultiply) {
    numberCalc *= numToMultiply;
    displayNumbers.textContent = numberCalc;
}

function divide(numberCalc, numToDivide) {
    numberCalc /= numToDivide;
    displayNumbers.textContent = numberCalc;
}

function operate (btn, numberCalc, number2) {

    if(btn.id === "addButton") {
        add(numberCalc, number2);
    } else if (btn.id === "subtractButton") {
        subtract(numberCalc, number2);
    } else if (btn.id === "subtractButton") {
        multiply(numberCalc, number2);
    } else if (btn.id === "subtractButton") {
        divide(numberCalc, number2);
    }



    


}

function clearDisplay() {
    numberCalc = 0;
    number2 = undefined;
    displayNumbers.textContent = numberCalc;
}

operatorButton.forEach((btn) => {


    if (btn.id == "addButton") {

        btn.addEventListener('click', () => {

            operate(btn.id, Number(numberCalc), Number(number2));
            console.log(btn.id, numberCalc, number2)

        });
    }

    if (btn.id == "subtractButton") {

        btn.addEventListener('click', () => {
            if (operator != undefined) {
                num1 = Number(num1);
                num1 -= Number(displayNumbers.textContent);
                displayNumbers.textContent = "";
            }else {
            operator = '-';
            num1 = displayNumbers.textContent;
            displayNumbers.textContent = "";
        }
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

    if (btn.id == "clearButton") {
        btn.addEventListener('click', clearDisplay);
    }
});



numButtons.forEach((btn) => {


    if (btn.id == "num1Button") {
        btn.addEventListener('click', () => {
            number2 += '1';
            displayNumbers.textContent = number2;
        });
    } else if (btn.id == "num2Button") {
        btn.addEventListener('click', () => {
            number2 = 2;
            displayNumbers.textContent = number2;
        });
    } else if (btn.id == "num3Button") {
        btn.addEventListener('click', () => {
            number2 = 3;
            displayNumbers.textContent = number2;
        });
    } else if (btn.id == "num4Button") {
        btn.addEventListener('click', () => {
            number2 = 4;
            displayNumbers.textContent = number2;
        });
    } else if (btn.id == "num5Button") {
        btn.addEventListener('click', () => {
            number2 = 5;
            displayNumbers.textContent = number2;
        });
    } else if (btn.id == "num6Button") {
        btn.addEventListener('click', () => {
            number2 = 6;
            displayNumbers.textContent = number2;
        });
    } else if (btn.id == "num7Button") {
        btn.addEventListener('click', () => {
            number2 = 7;
            displayNumbers.textContent = number2;
        });
    } else if (btn.id == "num8Button") {
        btn.addEventListener('click', () => {
            number2 = 8;
            displayNumbers.textContent = number2;
        });
    } else if (btn.id == "num9Button") {
        btn.addEventListener('click', () => {
            number2 = 9;
            displayNumbers.textContent = number2;
        });
    } else if (btn.id == "num0Button") {
        btn.addEventListener('click', () => {
            number2 = 0;
            displayNumbers.textContent = number2;
        });
    }
    
});

