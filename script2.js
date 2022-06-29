const numButtons = document.querySelectorAll(".numButton");
const displayNumbers = document.querySelector(".display");
const operatorButton = document.querySelectorAll(".operatorButton");




//buttons set operator when pressed. Operator is later used when using operate()
//operate() gets operator to determine what function to call, add(), subtract() etc.
// number buttons (0-9) calls addToDisplay() where secondaryValue and textContent of displayNumbers is set



let displayValue = "0";
let operator;
let secondaryValue;
displayNumbers.textContent = displayValue;


function add() {

    displayValue = Number(displayValue);
    displayValue += Number(secondaryValue);
    secondaryValue = "";
    displayNumbers.textContent = displayValue;
    
}


function subtract() {
console.log(displayValue)

    if(displayValue === 0 || displayValue === '0') {
        displayValue = secondaryValue;
        secondaryValue = "";
        displayNumbers.textContent = displayValue;
    } else {
    displayValue = Number(displayValue);
    displayValue -= Number(secondaryValue);
    secondaryValue = "";
    displayNumbers.textContent = displayValue;
}
}


function multiply() {

    if(displayValue === 0 || displayValue === '0') {
        displayValue = secondaryValue;
        secondaryValue = "";
        displayNumbers.textContent = displayValue;
    } else {
    displayValue = Number(displayValue);
    displayValue *= Number(secondaryValue);
    secondaryValue = "";
    displayNumbers.textContent = displayValue;
}
}


function divide() {
console.log("displayValue: " + displayValue + " secondary: " + secondaryValue)

    if(displayValue === 0 || displayValue === '0') {
        displayValue = secondaryValue;
        secondaryValue = "";
        displayNumbers.textContent = displayValue;
    } else {
    displayValue = Number(displayValue);
    displayValue /= Number(secondaryValue);
    secondaryValue = "";
    displayNumbers.textContent = displayValue;
}
}


function operate() {
    
    if(operator === '+') {
        add();
    } 
    else if(operator === '-') {
        subtract();
    }
    else if(operator === '*') {
        multiply();
    }
    else if(operator === '/') {
        divide();
    }


}

function addToDisplay(num) {
    if(secondaryValue === undefined) {
        secondaryValue = num;
        displayNumbers.textContent = secondaryValue;
    }else {
        secondaryValue += num;
        displayNumbers.textContent = secondaryValue;
    }

}

function clearAll() {
    displayNumbers.textContent = 0;
    displayValue = "0";
    secondaryValue = "";
    operator = "";

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

operatorButton.forEach((btn) => {


    if (btn.id == "addButton") {

        btn.addEventListener('click', () => {

            operator = '+'
            add();


        });
    }

    if (btn.id == "subtractButton") {

        btn.addEventListener('click', () => {
            operator = '-'
            subtract();
        });
    }

    if (btn.id == "multiplyButton") {

        btn.addEventListener('click', () => {
            operator = '*'
            multiply();

        });
    }

    if (btn.id == "divideButton") {

        btn.addEventListener('click', () => {
            operator = '/'
            divide();

        });
    }

    if (btn.id == "equalsButton") {
        btn.addEventListener('click', () => {
            operate(operator);
        });
    }

    if (btn.id == "clearButton") {
        btn.addEventListener('click', clearAll);
    }
});
