window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  intiialValues = {amount: 10000, years: 1, rate: 20}; 
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = intiialValues.amount;
  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = intiialValues.years;
  const rateUI = document.getElementById("loan-rate");
  rateUI.value = intiialValues.rate;
  update();
  
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let userValues = getCurrentUIValues();
  let userPayment = calculateMonthlyPayment(userValues);
  updateMonthly(userPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  principle = values.amount;
  interestRate = values.rate/1200;
  numberOfPayments = values.years * 12;

  return (((principle * interestRate) / (1 - (1+interestRate)**(-numberOfPayments))).toFixed(2)).toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const payment = document.getElementById("monthly-payment");
  payment.textContent = `$${monthly}`;
}
