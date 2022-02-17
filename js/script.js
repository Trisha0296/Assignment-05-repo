function calculatorButton() {
  let incomeInput = document.getElementById('income-input');
  let incomeOutput = document.getElementById('income-output')
  incomeOutput.innerText = parseFloat(incomeOutput.innerText) + parseFloat(incomeInput.value);
  incomeInput.value = " ";
}