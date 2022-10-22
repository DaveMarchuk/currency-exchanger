import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service';

// Business Logic

function getCurrency(selectCurrency)  {
  CurrencyService.getCurrency(selectCurrency)
    .then(function(response)  {
      if (response.data)  {
        printElements(response, selectCurrency);
      } else {
        printError(response, selectCurrency);
      }
    });
}

// UI Logic

function printElements(response, selectCurrency)  {
  
}

function printError(error, selectCurrency)  {

}

function handleFormSubmission(event)  {
  event.preventDefault();
  const currency = document.querySelector("input[type=radio]:checked").value;
  getCurrency(currency);
}

window.addEventListener("load", function()  {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});