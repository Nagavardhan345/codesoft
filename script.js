let inputField = document.getElementById('input');

function addToDisplay(value) {
    inputField.value += value;
}

function clearDisplay() {
    inputField.value = '';
}

function calculateResult() {
    try {
        inputField.value = eval(inputField.value);
    } catch (error) {
        inputField.value = 'Error';
    }
}
