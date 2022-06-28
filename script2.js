const numButtons = document.querySelectorAll(".numButton");
const displayNumbers = document.querySelector(".display");
const operatorButton = document.querySelectorAll(".operatorButton");



//EventListener number button: send button pressed to display

//update sum to += number




let displayValue = 0;
let operator;
let secondaryValue;




function add() {

    displayValue = Number(displayValue);
    displayValue += Number(secondaryValue);
    console.log("displayValue: " + displayValue + " secondaryValue: " + secondaryValue);
    secondaryValue = undefined;
    displayNumbers.textContent = displayValue;
    
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

function operate(operator) {
    
    if(operator === '+') {
        add(displayValue, secondaryValue);
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

function addToDisplay(num) {
    if (displayNumbers.textContent === '0') {
        displayNumbers.textContent = "";
        displayNumbers.textContent += num;
        
    } else {
        displayNumbers.textContent += num;
        secondaryValue = displayNumbers.textContent;
        console.log(displayValue)
    }

}

function clearAll() {
    displayNumbers.textContent = 0;
    displayValue = "0";
    secondaryValue = undefined;
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
            add(displayValue, secondaryValue);


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
        btn.addEventListener('click', clearAll);
    }
});
