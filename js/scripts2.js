/*  expenses funtion */
function expenses() {
  const foodInput = document.getElementById('foodInput');
  const rentInput = document.getElementById('rentInput');
  const clothesInput = document.getElementById('clothesInput');
  // value
  const foodInputValue = parseFloat(foodInput.value);
  const rentInputValue = parseFloat(rentInput.value);
  const clothesInputValue = parseFloat(clothesInput.value);
  /*  error handling */
  if (foodInputValue > 0 && typeof foodInputValue == 'number' && rentInputValue > 0 && typeof rentInputValue == 'number' && clothesInputValue > 0 && typeof clothesInputValue == 'number') {

    const totalExpenses = foodInputValue + rentInputValue + clothesInputValue;

    subtraction('income-input', totalExpenses, 'balanst-Output')
  } else {
    alert('Please check your valid ..Number..')
  }

}

/*  subtraction */
function subtraction(incomeBalanceInput, expenses, amountId) {
  const incomeInput = document.getElementById(incomeBalanceInput).value;
  //error handling
  if (expenses > parseFloat(incomeInput)) {
    alert('please check  your  info....')
  } else if (parseFloat(incomeInput) > 0 && typeof parseFloat(incomeInput) == 'number') {
    const totalBalance = parseFloat(incomeInput) - expenses;
    document.getElementById(amountId).innerText = totalBalance;
    document.getElementById('expenses-output').innerText = expenses;
  } else {
    alert('Sorry, .')
  }

}

document.getElementById('calculatorButton').addEventListener('click', function () {
  expenses()

});

//  
document.getElementById('Save-Button').addEventListener('click', function () {
  const saveInput = document.getElementById('save-input');
  const incomeInput = document.getElementById('income-input');
  const savingAmount = (parseFloat(incomeInput.value) * parseFloat(saveInput.value)) / 100;
  const blancesOutout = document.getElementById('balanst-Output');
  const remainingBlances = parseFloat(blancesOutout.innerText) - savingAmount;
  console.log(remainingBlances);

  // //error handling
  // if (parseInt(blancesOutout.innerText) > savingAmount) {
  //   document.getElementById('saving-amount').innerText = savingAmount;;
  //   document.getElementById('remaining-blances').innerText = remainingBlances;

  // } else {
  //   alert('You do not have enough money to .....')
  // }

})