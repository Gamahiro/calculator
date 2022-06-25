/* <---- calculator ----->

Add

Subtract

Multiply

Divide

*/

const numButtons = document.querySelectorAll(".numButton");

// ---- why doesn't it work? -----
console.log('yep');


numButtons.forEach((btn) => {

    if (btn.id == "num1Button") {
        
        btn.addEventListener('click', () => {
            console.log("yep");
        });
    } else if (btn.id == "num2Button") {
        btn.addEventListener('click', () => {
            console.log("yep");
        });
    } else if (btn.id == "num3Button") {
        btn.addEventListener('click', () => {
            console.log("yep");
        });
    } else if (btn.id == "num4Button") {
        btn.addEventListener('click', () => {
            console.log("yep");
        });
    } else if (btn.id == "num5Button") {
        btn.addEventListener('click', () => {
            console.log("yep");
        });
    } else if (btn.id == "num6Button") {
        btn.addEventListener('click', () => {
            console.log("yep");
        });
    }else if (btn.id == "num7Button") {
        btn.addEventListener('click', () => {
            console.log("yep");
        });
    }else if (btn.id == "num8Button") {
        btn.addEventListener('click', () => {
            console.log("yep");
        });
    }else if (btn.id == "num9Button") {
        btn.addEventListener('click', () => {
            console.log("yep");
        });
    }else if (btn.id == "num0Button") {
        btn.addEventListener('click', () => {
            console.log("yep");
        });
    }










}); 





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