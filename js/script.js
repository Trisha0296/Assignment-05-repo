document.getElementById('calculatorButton').addEventListener('click', function () {
  const foodInput = document.getElementById('foodInput');
  const rentInput = document.getElementById('rentInput');
  const clothesInput = document.getElementById('clothesInput');
  const expensesOutput = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothesInput.value);
  document.getElementById('expenses-output').innerText = expensesOutput;

  const incomeInput = document.getElementById('income-input').value;
  const tatalBlances = parseFloat(incomeInput) - expensesOutput;
  document.getElementById('balanst-Output').innerText = tatalBlances;


})

//  
document.getElementById('Save-Button').addEventListener('click', function () {
  const saveInput = document.getElementById('save-input');
  const incomeInput = document.getElementById('income-input');
  const savingAmount = (parseFloat(incomeInput.value) * parseFloat(saveInput.value)) / 100;
  document.getElementById('saving-amount').innerText = savingAmount;;
  // 
  const blancesOutout = document.getElementById('balanst-Output');
  const remainingBlances = parseFloat(blancesOutout.innerText) - savingAmount;
  document.getElementById('remaining-blances').innerText = remainingBlances;

})