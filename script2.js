const numButtons = document.querySelectorAll(".numButton");
const displayNumbers = document.querySelector(".display");
const operatorButton = document.querySelectorAll(".operatorButton");

let val1 = null;
let val2 = null;
let op = null;
let op2 = null;
displayNumbers.textContent = null;




function add(num1, num2) {
    sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
    sum = num1 - num2;
    return sum;
}

function multiply(num1, num2) {
    sum = num1 * num2;
    return sum;
}

function divide(num1, num2) {
    sum = num1 / num2;
    console.log(sum);
    return sum;
}

function operate(operator, num1, num2) {
    console.log("val1: " + val1 + " val2: " + val2);

    if (operator === "+") {
        return add(num1, num2);
    }

    else if (operator === "-") {
        return subtract(num1, num2);
    }
    else if (operator === "*") {
        return multiply(num1, num2);
    }
    else if (operator === "/") {
        return divide(num1, num2);
    }

}

function addToDisplay(num) {
    if (displayNumbers.textContent === null) {
        displayNumbers.textContent = num;
    } else displayNumbers.textContent += num;
}


numButtons.forEach((btn) => {

    if (btn.id == "num1Button") {
        btn.addEventListener('click', () => {
            addToDisplay('1');
        });
    } else if (btn.id == "num2Button") {
        btn.addEventListener('click', () => {
            addToDisplay("2");
        });
    } else if (btn.id == "num3Button") {
        btn.addEventListener('click', () => {
            addToDisplay("3");
        });
    } else if (btn.id == "num4Button") {
        btn.addEventListener('click', () => {
            addToDisplay("4");
        });
    } else if (btn.id == "num5Button") {
        btn.addEventListener('click', () => {
            addToDisplay("5");
        });
    } else if (btn.id == "num6Button") {
        btn.addEventListener('click', () => {
            addToDisplay("6");
        });
    } else if (btn.id == "num7Button") {
        btn.addEventListener('click', () => {
            addToDisplay("7");
        });
    } else if (btn.id == "num8Button") {
        btn.addEventListener('click', () => {
            addToDisplay("8");
        });
    } else if (btn.id == "num9Button") {
        btn.addEventListener('click', () => {
            addToDisplay("9");
        });
    } else if (btn.id == "num0Button") {
        btn.addEventListener('click', () => {
            addToDisplay("0");
        });
    }
});

//val1 op val2 = 1 + 1
//val1 = val1 op val2
//val2 = null
//val2 = displaynumbers.txt
//val1 op val2 etc..

operatorButton.forEach((btn) => {


    btn.addEventListener('click', () => {

        if (btn.id === "addButton") {

            if(op != null) {
                op2 = '+';
                val2 = Number(displayNumbers.textContent);
                val1 = operate(op, Number(val1), Number(val2));
                op = op2;
                op2 = null;
                val2 = null;
                displayNumbers.textContent = null;
            } else {
            op = '+'
            val1 = displayNumbers.textContent;
            displayNumbers.textContent = null;
            }

        }
        else if (btn.id === "subtractButton") {
            if(op != null) {
                op2 = '-';
                val2 = Number(displayNumbers.textContent);
                val1 = operate(op, Number(val1), Number(val2));
                op = op2;
                op2 = null;
                val2 = null;
                displayNumbers.textContent = null;
            } else {
            op = '-'
            val1 = displayNumbers.textContent;
            displayNumbers.textContent = null;
            }
        }
        else if (btn.id === "multiplyButton") {
            if(op != null) {
                op2 = '*';
                val2 = Number(displayNumbers.textContent);
                val1 = operate(op, Number(val1), Number(val2));
                op = op2;
                op2 = null;
                val2 = null;
                displayNumbers.textContent = null;
            } else {
            op = '*'
            val1 = displayNumbers.textContent;
            displayNumbers.textContent = null;
            }
        }
        else if (btn.id === "divideButton") {
            if(op != null) {
                op2 = '/';
                val2 = Number(displayNumbers.textContent);
                val1 = operate(op, Number(val1), Number(val2));
                op = op2;
                op2 = null;
                val2 = null;
                displayNumbers.textContent = null;
            } else {
            op = '/'
            val1 = displayNumbers.textContent;
            displayNumbers.textContent = null;
            }
        }
        else if (btn.id === "equalsButton") {

            if (val1 === null) {return;} else {
            val2 = displayNumbers.textContent;
            console.log(val1 + " " + val2);
            displayNumbers.textContent = operate(op, Number(val1), Number(val2));
        }

        } else if (btn.id === "clearButton") {
             val1 = null;
             val2 = null;
             op = null;
             displayNumbers.textContent = null;
       
        }
    });

});

