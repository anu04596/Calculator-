const display = document.getElementById('display');
const keys = document.querySelectorAll('.key');

let currentNumber = '';
let previousNumber = '';
let operator = '';

keys.forEach(key => {
	key.addEventListener('click', () => {
		const keyValue = key.textContent;
		switch (keyValue) {
			case 'C':
				clearDisplay();
				break;
			case '&lt;':
				backspace();
				break;
			case '=':
				calculate();
				break;
			default:
				updateDisplay(keyValue);
		}
	});
});

function updateDisplay(value) {
	currentNumber += value;
	display.value = currentNumber;
}

function clearDisplay() {
	currentNumber = '';
	previousNumber = '';
	operator = '';
	display.value = '';
}

function backspace() {
	currentNumber = currentNumber.slice(0, -1);
	display.value = currentNumber;
}

function calculate() {
	const result = eval(previousNumber + operator + currentNumber);
	display.value = result;
	previousNumber = '';
	currentNumber = '';
	operator = '';
}

function setOperator(op) {
	operator = op;
	previousNumber = currentNumber;
	currentNumber = '';
}