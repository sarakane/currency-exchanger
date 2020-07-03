export class ExchangeRate {
  async getExchangeRate() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
        if(!response.ok || response.status !== 200) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      })
      .then(function(jsonifiedResponse) {
        return jsonifiedResponse;
      });
  }
}
