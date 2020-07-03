import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { ExchangeRate } from './exchangeRate';
import { calculateExchangeRate } from './calculateExchangeRate.js';

function outputExchangedCurrency (amount, countryCode, exchangedAmount) {
  if(exchangedAmount === "Currency not found"){
    $("#output").text(`There was an error: ${exchangedAmount}`);
    $("#output").show();
  } else {
    $("#output").text(`${amount} USD equals ${exchangedAmount} ${countryCode}`);
    $("#output").show();
  }
}

$(document).ready(function() {
  $("#currencyForm").submit(function(event) {
    event.preventDefault();
    let amount = $("input[name=amount]").val();
    let countryCode = $("select[name=country]").val();

    (async () => {
      let exchangeRate = new ExchangeRate();
      const response = await exchangeRate.getExchangeRate();
      let exchangedAmount = calculateExchangeRate(response, countryCode, amount);
      outputExchangedCurrency(amount, countryCode, exchangedAmount);
    })();
  });
});