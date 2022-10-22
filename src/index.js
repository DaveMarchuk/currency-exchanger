import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service';

// Business Logic

function getCurrency(selectCurrency, usdAmount)  {
  CurrencyService.getCurrency(selectCurrency, usdAmount)
    .then(function(response)  {
      if (response.result == 'success')  {
        printElements(response, selectCurrency, usdAmount);
      } else {
        printError(response, selectCurrency);
      }
    });
}

// UI Logic

function printElements(response, selectCurrency, usdAmount)  {
  let convertRate = usdAmount * response.conversion_rate;
  document.querySelector('#showResponse').innerText = `The USD equivalent of ${selectCurrency} is ${convertRate}`;
}

function printError(error, selectCurrency)  {
  document.querySelector('#showResponse').innerText = `There was an error accessing the data for ${selectCurrency}   ${error}`;
}

function handleFormSubmission(event)  {
  event.preventDefault();
  const usdAmount = document.getElementById("currency").value;
  const currency = document.querySelector("input[type=radio]:checked").value;
  getCurrency(currency, usdAmount);
}

window.addEventListener("load", function()  {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});