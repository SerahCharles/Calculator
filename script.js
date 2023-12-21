const history = [];

function addToHistory(expression, result) {
    history.push({ expression, result });
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const historyElement = document.querySelector('.history');
    historyElement.innerHTML = history.map(entry => `${entry.expression} = ${entry.result}`).join('<br>');
}

function calculate() {
    const expression = document.forms[0].display.value;
    const result = eval(expression);
    document.forms[0].display.value = result;
    addToHistory(expression, result);
}

function setTheme(theme) {
  document
    .querySelector(".calculator")
    .classList.remove("dark-theme", "light-theme");
  document.querySelector(".calculator").classList.add(theme);
}

function changeButtonColor(button, color) {
  button.style.backgroundColor = color;
}

function resetButtonColor(button) {
  button.style.backgroundColor = "#ffa952";
}
