export default class CurrencyService  {
  static getCurrency(selectCurrency) {
    return  fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${selectCurrency}`)
    .then(function(response) {
      if  (!response.ok)  {
        console.log(response.target_code);
        if  (selectCurrency != response.target_code)  {
          const errorMessage = "Select a real currency the one you selected doesn't exist.";
          throw new Error(errorMessage);
        }
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      } else  {
        return response.json();
      }
    })
    .catch(function(error) {
      return error;
    });
  }
}