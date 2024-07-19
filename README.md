# React Stock Portfolio UI 

Demo react stock portfolio UI, connects to a Swagger back end.

## Run the Demo

```
git clone https://github.com/TamsinHuggins/stocks-ui.git
cd react-stocks-demo
npm install
npm run dev

```


## Features
### Transactions Component
- Stock purchase transactions displayed 
- Component performs timed GET requests to back end in order to update


### PurchaseStock Component
- Finds avilable stocks and their current prices (currently dummy data, no API call)
- Stock ticker can be selected from drop down
- "Buy Stock" menu appears when stock ticker selected 
-  Purchase volume can be selected via input box
- Performs POST request to back end when buy is clicked
