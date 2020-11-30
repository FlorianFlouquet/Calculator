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
    var result = 0;
    switch (operator) {
        case "+":
            result = add(a,b);
            break;
        case "-":
            result = substract(a,b);
            break;
        case "*":
            result = multiply(a,b);
            break;
        case "/":
            result = divide(a,b);
            break;
    }
    return result;
}

// add an event on each button to display their value on the screen

document.getElementById('keyboard').querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementsByTagName('p')[0].textContent += button.textContent;
    })
})
