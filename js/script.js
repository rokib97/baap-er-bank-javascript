// function to get the values from input
function getValue(inputId) {
  const inputElement = document.getElementById(inputId);
  const inputValue = parseFloat(inputElement.value);
  inputElement.value = "";
  return inputValue;
}
// function to set the values
function setValue(inputId, inputValue) {
  const getEliment = document.getElementById(inputId);
  const elimentValue = parseFloat(getEliment.innerText);
  getEliment.innerText = inputValue + elimentValue;
}
//function to get the current balance
function getCurrentBalance() {
  const getbalanceElement = document.getElementById("current-balance");
  return parseFloat(getbalanceElement.innerText);
}
// function to update the balance
function updateValue(inputValue, isAdd) {
  const getbalanceElement = document.getElementById("current-balance");
  const balanceValue = getCurrentBalance();
  if (isAdd == true) {
    getbalanceElement.innerText = balanceValue + inputValue;
  } else {
    getbalanceElement.innerText = balanceValue - inputValue;
  }
}
// for deposite event handler
document.getElementById("deposite-btn").addEventListener("click", function () {
  const depositAmount = getValue("deposite-input");
  if (depositAmount > 0) {
    setValue("depCurrentValue", depositAmount);
    updateValue(depositAmount, true);
  } else {
    alert("Please input a valid number");
  }
});

// for withdraw Event handler
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawAmount = getValue("withdraw-input");
  const currentBalance = getCurrentBalance();
  if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
    setValue("currnet-withdraw", withdrawAmount);
    updateValue(withdrawAmount, false);
  } else {
    alert("Please input a valid number");
  }
  if (withdrawAmount > currentBalance) {
    alert("You Don't have sufficient balance!");
  }
});
