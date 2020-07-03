import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { ExchangeRate } from './exchangeRate';

function calculateExchangeRate(response, currencyCode, amount) {
  const conversionRate = response.conversion_rates[currencyCode];
  let returnRate = amount * conversionRate;
}

$(document).ready(function() {
  (async () => {
    let amount = 10;
    let currencyCode = "EUR";
    let exchangeRate = new ExchangeRate();
    const response = await exchangeRate.getExchangeRate();
    calculateExchangeRate(response, currencyCode, amount);
  })();
});