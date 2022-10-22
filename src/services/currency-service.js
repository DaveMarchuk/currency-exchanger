export default class CurrencyService  {
  static getWeather(selectCurrency) {
    return  fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${selectCurrency}`)
  }
}