const calculationContent = document.getElementsByTagName('p')[0];
const resultContent = document.getElementsByTagName('p')[1];
var firstArg = "";
var secondArg = "";
var operator = "";
var equalHasBeenPressed = false;

// List of math operators

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


// Function operate

function operate(a, b, operator) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+":
            result = add(a,b);
            break;
        case "-":
            result = substract(a,b);
            break;
        case "x":
            result = multiply(a,b).toFixed(4);
            break;
        case "/":
            result = divide(a,b).toFixed(4);
            break;
        case "^":
            result = Math.pow(a,b).toExponential(4);
            break;
    }
    resultContent.textContent = result;
    firstArg = result;
    secondArg = "";
}

function clearEverything() {
    calculationContent.textContent = "";
    resultContent.textContent = "";
    firstArg = "";
    secondArg = "";
    operator = "";
    equalHasBeenPressed = false;
}

// add an event on each button to display their value on the screen and store their value in variables

const digitButtonList = document.getElementById('leftKeyboardBottom').querySelectorAll('button');
digitButtonList.forEach((button) => {
    button.addEventListener('click', () => {
        if (!equalHasBeenPressed) {
            calculationContent.textContent += button.value;
            if (operator === "") {
                firstArg += button.value;
            }
            else {
                secondArg += button.value;
            }
        }
    })
})

const operatorButtonList = document.getElementById('rightKeyboard').querySelectorAll('button');
operatorButtonList.forEach((button) => {
    button.addEventListener('click', () => {
        if (!equalHasBeenPressed) {
            calculationContent.textContent += button.value;
            if (operator === "") {
                operator = button.value;
            }
            else {
                operate(firstArg, secondArg, operator);
                operator = button.value;
            }
        }
        else if (equalHasBeenPressed && button.textContent !== "=") {
            calculationContent.textContent = `Ans${button.value}`;
            operator = button.value;
            equalHasBeenPressed = false;
        }
    })
})

const operatorButtonList2 = document.getElementById('leftKeyboardTop').querySelectorAll('button');
operatorButtonList2.forEach((button) => {
    button.addEventListener('click', () => {
        if (!equalHasBeenPressed) {
            calculationContent.textContent += button.value;
            if (operator === "") {
                operator = button.value;
            }
            else {
                operate(firstArg, secondArg, operator);
                operator = button.value;
            }
        }
        else if (equalHasBeenPressed && button.textContent !== "=") {
            calculationContent.textContent = `Ans${button.value}`;
            operator = button.value;
            equalHasBeenPressed = false;
        }
    })
})

//function equal that operate + provide the user to add digits right after

function equal() {
    if (!equalHasBeenPressed) {
        calculationContent.textContent += "=";
        operate(firstArg, secondArg, operator);
        equalHasBeenPressed = true;
        operator = "";
    }
}
