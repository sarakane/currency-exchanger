export function calculateExchangeRate(response, currencyCode, amount) {
  const conversionRate = response.conversion_rates[currencyCode];
  return  amount * conversionRate;
}
