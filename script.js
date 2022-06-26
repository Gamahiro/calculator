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

function clearDisplay() {
    displayNumbers.textContent = 0;
    num1 = "";
    operator = "";

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

let sum = 0;
let num1 = Number(displayNumbers.textContent);
let operator;


/** initialVar
 * +=
 * next num
 * 
 * 
 * 5 + 5 = 10 + 5 = 15 + 5 = 20 + 5
 * 
 * num1 += nextnum
 * 
 * 
 * click num > show num > click + > show num += new num
 * 
 *  sum += num1
 *  sum -= num1
    sum *= num1
    sum /= num1

 */
















operatorButton.forEach((btn) => {


    if (btn.id == "addButton") {

        btn.addEventListener('click', () => {

            console.log(sum, num1);
            add(sum, num1);


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









function add(sum, num1) {
    
    sum = Number(sum);
    sum += num1;
    displayNumbers.textContent = sum;
}

function subtract(num1, num2) {
    
    num1 -= num2;
    displayNumbers.textContent = num1;
}

function multiply(num1, num2) {
    
    num1 *= num2;
    displayNumbers.textContent = num1;
}

function divide(num1, num2) {
    
    num1 /= num2;
    displayNumbers.textContent = num1;
}

function operate(operator, num1, num2) {
    console.log(operator, num1, num2);



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