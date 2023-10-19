// script.js
const display = document.getElementById("display");
let currentInput = "";
let currentOperator = "";
let firstOperand = "";
let result = "";

function updateDisplay() {
    display.innerText = currentInput || "0";
}

function clearCalculator() {
    currentInput = "";
    currentOperator = "";
    firstOperand = "";
    result = "";
    updateDisplay();
}

function handleButtonClick(event) {
    const buttonValue = event.target.innerText;

    if (!isNaN(buttonValue) || buttonValue === ".") {
        currentInput += buttonValue;
    } else if (["+", "-", "*", "/"].includes(buttonValue)) {
        if (currentInput !== "") {
            if (firstOperand === "") {
                firstOperand = currentInput;
                currentInput = "";
            } else {
                calculate();
            }
            currentOperator = buttonValue;
        }
    } else if (buttonValue === "=") {
        calculate();
    } else if (buttonValue === "C") {
        clearCalculator();
    } else if (buttonValue === "←") {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
}

function calculate() {
    if (currentInput !== "") {
        switch (currentOperator) {
            case "+":
                result = String(parseFloat(firstOperand) + parseFloat(currentInput));
                break;
            case "-":
                result = String(parseFloat(firstOperand) - parseFloat(currentInput));
                break;
            case "*":
                result = String(parseFloat(firstOperand) * parseFloat(currentInput));
                break;
            case "/":
                result = String(parseFloat(firstOperand) / parseFloat(currentInput));
                break;
        }
        currentInput = result;
        firstOperand = "";
        currentOperator = "";
    }
    updateDisplay();
}

// Add event listeners to buttons
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});

updateDisplay();
