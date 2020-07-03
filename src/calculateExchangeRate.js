export function calculateExchangeRate(response, currencyCode, amount) {
  if(!response.conversion_rates[currencyCode]) {
    return "Currency not found";
  } else {
    const conversionRate = response.conversion_rates[currencyCode];
    return  (amount * conversionRate).toFixed(2);
  }
  
}
