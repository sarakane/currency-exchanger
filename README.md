# _Currency Exchanger_

#### _JavaScript/jQuery Project for [Epicodus](https://www.epicodus.com/), 2020.07.03_

#### By **Sara Kane**

## Description
This is a currency exchange application using the API from [ExchangeRate-API](https://www.exchangerate-api.com/). It allows a user to enter an amount in U.S. dollars and convert that amount into other currencies. 

## Specifications

| Behavior                                                                                                                                                        |  Input | Output                              |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|:------:|-------------------------------------|
| User should be able to enter an amount in U.S dollars and convert that amount into Euros                                                                        | 10 USD | 8.88 EUR                            |
| User should be able to enter an amount in U.S dollars and convert that amount into Canadian Dollars                                                             | 10 USD | 13.59 CAD                           |
| User should be able to enter an amount in U.S dollars and convert that amount into Australian Dollars                                                           | 10 USD | 14.44 AUD                           |
| User should be able to enter an amount in U.S dollars and convert that amount into Chinese Renminbi                                                             | 10 USD | 70.68 CNY                           |
| User should be able to enter an amount in U.S dollars and convert that amount into Indian Rupees                                                                | 10 USD | 748.79 INR                          |
| If the API call results in an error, the application should return a notification that states what the error is                                                 |        | Your request could not be completed |
| If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist | AAA    | Currency not recognized             |

## Known Bugs
* No known bugs.   

## Setup/Installation Requirements

#### View locally
To clone this repository from your command line you will need [Git](https://git-scm.com/) installed. You will also need [Node.js and npm](https://nodejs.org/en/download/).

First navigate in the command line to where you want to clone this repository. 

Then from your command line run:

`$ git clone https://github.com/sarakane/currency-exchanger`

Once the repository has been cloned, navigate to the to the application directory and run `$ npm install`.

To view locally or test this application, you will need an API key from [ExchangeRate-API](https://www.exchangerate-api.com/). Once you have this key, create a file in the application directory called `.env` and in this file enter `API_KEY = [your-api-key]`. Copy your API key from the ExchangeRate-API into the section marked [your-api-key].

#### View locally
* In the application directory run: `$ npm start`

#### Edit
* Open the application in your preferred code editor, such as Visual Studio Code.

## Technologies Used
* Visual Studio Code (code editor)
* HTML /CSS
* Bootstrap-3.3.7
* JavaScript/jQuery-3.5.1
* Node.js/npm
* Webpack
* ExchangeRate-API

## License
This software is licensed under the MIT license. Copyright (c) 2020 Sara Kane.