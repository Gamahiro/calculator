const numButtons = document.querySelectorAll(".numButton");
const displayNumbers = document.querySelector(".display");
const operatorButton = document.querySelectorAll(".operatorButton");



//EventListener number button: send button pressed to display

//update sum to += number




let sum = 0;
let num2 = 0;

displayNumbers.textContent = sum;

numButtons.forEach((btn) => {


    if (btn.id == "num1Button") {
        

        btn.addEventListener('click', () => {
            num2 = '1';
            displayNumbers.textContent = num2;
            if (sum != 0) {
                
                num2 += '1'
                displayNumbers.textContent = num2;
                
            } 
        })
    }

    //button2

});




function add(number1, number2) {
    number1 = Number(number1);
    number2 = Number(number2);
    console.log("number1: ",number1, " number2 : ", number2)
    number1 += number2;
    sum = number1;
    displayNumbers.textContent = sum;
    console.log("number1: ",number1, " number2 : ", number2)

}

operatorButton.forEach((btn) => {


    if (btn.id === "addButton") {

        btn.addEventListener('click', () => {

            add(sum, num2);
            console.log(sum, num2);
        });
    }




    if (btn.id === "equalsButton") {
        
        btn.addEventListener('click', () => {

            add(sum, num2);
  

        })

    }






});