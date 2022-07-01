const numButtons = document.querySelectorAll(".numButton");
const displayNumbers = document.querySelector(".display");
const operatorButton = document.querySelectorAll(".operatorButton");




//buttons set operator when pressed. Operator is later used when using operate()
//operate() gets operator to determine what function to call, add(), subtract() etc.
// number buttons (0-9) calls addToDisplay() where secondaryValue and textContent of displayNumbers is set



let primaryValue = 0;
let operator = null;
let secondOperator = null;
let secondaryValue = null;
displayNumbers.textContent = val2;


function add() {

    if (secondaryValue === null) {
        secondaryValue = ""
        displayNumbers.textContent = val2;

    }


    if (val2 === 0 || val2 === '0') {
        val2 = secondaryValue;
        secondaryValue = "";
        displayNumbers.textContent = val2;
    } else {
        val2 = Number(val2);
        val2 += Number(secondaryValue);
        secondaryValue = "";
        displayNumbers.textContent = val2;
    }
}


function subtract() {
    console.log(val2)

    if (val2 === 0 || val2 === '0') {
        val2 = Number(val2);
        val2 = Number(secondaryValue);
        secondaryValue = "";
        displayNumbers.textContent = val2;
    } else {
        console.log("1. displayValue: " + val2 + "secondaryValue: " + secondaryValue)
        val2 = Number(val2);
        val2 -= Number(secondaryValue);
        console.log("2. displayValue: " + val2 + "secondaryValue: " + secondaryValue)
        secondaryValue = "";
        displayNumbers.textContent = val2;
        console.log("3. displayValue: " + val2 + "secondaryValue: " + secondaryValue)
    }
}


function multiply() {


    if (val2 === 0 || val2 === '0' || val2 === "") {
        val2 = secondaryValue;
        secondaryValue = "";
        displayNumbers.textContent = val2;
    } else {
        val2 = Number(val2);
        val2 *= Number(secondaryValue);
        secondaryValue = "";
        displayNumbers.textContent = val2;
    }
}


function divide() {
    console.log("displayValue: " + val2 + " secondary: " + secondaryValue)



    if (val2 === 0 || val2 === '0' || val2 === "") {
        val2 += secondaryValue;
        secondaryValue = "";
        displayNumbers.textContent = val2;
    } else if (secondaryValue != "" || secondaryValue != null) {

    } else {
        val2 = Number(val2);
        val2 /= Number(secondaryValue);
        secondaryValue = "";
        displayNumbers.textContent = val2;
    }
}


function operate() {

    

    if (op === '+') {
        add();
    }
    else if (op === '-') {
        subtract();
    }
    else if (op === '*') {
        multiply();
    }
    else if (op === '/') {
        if (secondaryValue === 0 || secondaryValue === '0') {
            alert('no');
        } else {
            divide();
        }
    }


}

function addToDisplay(num) {
    if (secondaryValue === null || secondaryValue === undefined) {
        secondaryValue = num;
        displayNumbers.textContent = secondaryValue;
        console.log("displayValue: " + val2 + " secondaryValue: " + secondaryValue)

    } else {
        secondaryValue += num;
        displayNumbers.textContent = secondaryValue;
        console.log("displayValue: " + val2 + " secondaryValue: " + secondaryValue)

    }

}

function clearAll() {
    displayNumbers.textContent = 0;
    val2 = "0";
    secondaryValue = "";
    op = "";

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
            if (op != null) {
                op2 = '+';
            } else {
                op = '+';
                add();
            }


        });
    }

    if (btn.id == "subtractButton") {

        btn.addEventListener('click', () => {
            if (op != null) {
                op2 = '-';
            } else {
                op = '-'
                subtract();
            }
        });
    }

    if (btn.id == "multiplyButton") {

        btn.addEventListener('click', () => {
            if (op != null) {
                op2 = '*';
            } else {
                op = '*'
                multiply();
            }
        });
    }

    if (btn.id == "divideButton") {

        btn.addEventListener('click', () => {
            if (op != null) {
                op2 = '/';
            } else {
                op = '/'
                divide();
            }

        });
    }

    if (btn.id == "equalsButton") {
        btn.addEventListener('click', () => {
            operate(op);
        });
    }

    if (btn.id == "clearButton") {
        btn.addEventListener('click', clearAll);
    }
});
