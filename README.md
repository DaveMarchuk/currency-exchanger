# _Currency Exchanger_

#### By _**David Marchuk**_

## _Web Application created for Currency Exchanger_

## Technologies Used

* _HTML_
* _Javascript_
* _Markdown_
* _CSS_
* _ExchangeRate-API_

## Description
__This webpage was created using the ExchangeRate-API to handle the currency conversions. The user inputs and amount in US Dollars. Then the user selects the currency they would like to convert to from the radio forms. Once submitted, the converted amount is displayed to the user.__

## Setup/Installation Requirements
* _Clone this repository to your desktop_
* _Navigate to the currency-exchanger directory on your computer_
* _Open with a text editor_
* _To start a development server and view the project in your browser:_
  - Navigate to currency-exchanger
  - Run the command "npm install" to install dependencies
  - Run the command "npm run build" to bundle the files
  - Run the command "npm run start" to start the development server
* _You will need to create an account and obtain an API key:_
  - Visit the ExchangeRate-API site at https://www.exchangerate-api.com input your email address and click the "Get Free Key" button.
  - Once prompted create and account with your email, first name and password. Agree to the terms of use and click "Get Started"
  - You now have an API key with a dashboard displaying how many API calls you have for the month.
  - Create a .env file and add it to your .gitignore file. Make sure to commit .gitignore before moving on.
  - Place your API key in the .env file at the top level of the directory. Label it "API_KEY=INSERT_API_KEY_HERE"
* _Now with the development server running, input a dollar value and select a currency then submit. The converted currency will now be displayed._

## Known Bugs
* _Currently does not have error catching for the dollar input_
* _Free API key so the amount of API calls is lmited to 1500 per month._

## License 

_MIT_

Copyright (c) _2022_ _David Marchuk_