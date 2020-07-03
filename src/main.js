import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { ExchangeRate } from './exchangeRate';
import { calculateExchangeRate } from './calculateExchangeRate.js';

function outputExchangedCurrency (amount, currencyCode, exchangedAmount) {
  $("#outputInitialValue").text(amount);
  $("#outputConvertedAmount").text(exchangedAmount);
  $("#outputCountryConversion").text(currencyCode);
  $("#output").show();
}

$(document).ready(function() {
  $("#currencyForm").submit(function(event) {
    event.preventDefault();
    let amount = $("input[name=amount]").val();
    let currencyCode = $("select[name=country]").val();

    (async () => {
      let exchangeRate = new ExchangeRate();
      const response = await exchangeRate.getExchangeRate();
      let exchangedAmount = calculateExchangeRate(response, currencyCode, amount);
      outputExchangedCurrency(amount, currencyCode, exchangedAmount);
    })();
  });
});