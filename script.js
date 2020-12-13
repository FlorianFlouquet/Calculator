const calculationContent = document.getElementsByTagName('p')[0];
const resultContent = document.getElementsByTagName('p')[1];
var firstArg = "";
var secondArg = "";
var operator = "";
var equalHasBeenPressed = false;
var pointHasBeenPressed = false;

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
            result = multiply(a,b);
            break;
        case "/":
            if (b === 0) {
                alert("You can't do that !");
                clearEverything();
                return;
            }
            else {
                result = divide(a,b).toFixed(4);
            }
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
            pointHasBeenPressed = false;
        }
        else if (equalHasBeenPressed && button.textContent !== "=") {
            calculationContent.textContent = `Ans${button.value}`;
            operator = button.value;
            equalHasBeenPressed = false;
            pointHasBeenPressed = false;
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
            pointHasBeenPressed = false;
        }
        else if (equalHasBeenPressed && button.textContent !== "=") {
            calculationContent.textContent = `Ans${button.value}`;
            operator = button.value;
            equalHasBeenPressed = false;
            pointHasBeenPressed = false;
        }
    })
})

//function equal that operate + provide the user to add digits right after

function equal() {
    if (!equalHasBeenPressed && secondArg != "") {
        calculationContent.textContent += "=";
        operate(firstArg, secondArg, operator);
        equalHasBeenPressed = true;
        operator = "";
    }
}

//function that provide the user to add multiple decimal points on the same number

function decimalPoint() {
    if (!pointHasBeenPressed && operator === "") {
        calculationContent.textContent += ".";
        firstArg += ".";
        pointHasBeenPressed = true;
    }
    else if (!pointHasBeenPressed && operator !== "") {
        calculationContent.textContent += ".";
        secondArg += ".";
        pointHasBeenPressed = true;
    }
}

//function undo

function backspace() {
    //on the screen
    var x = calculationContent.textContent;
    var y = "";
    for (i=0; i < x.length-1; i++) {
        var z = x[i];
        y = y.concat(z);
    }
    calculationContent.textContent = y;
    //in the variables
    if (secondArg !== "") {
        var a = secondArg;
        var b = "";
        for (j=0; j < a.length-1; j++) {
            var c = a[j];
            b = b.concat(c);
        }
        secondArg = b;
    }
    else if (operator !== "") {
        operator = "";
    }
    else {
        var a = firstArg;
        var b = "";
        for (j=0; j < a.length-1; j++) {
            var c = a[j];
            b = b.concat(c);
        }
        firstArg = b;
    }
}
