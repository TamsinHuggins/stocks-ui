# React Stock Portfolio UI 

Demo react stock portfolio UI, connects to a Swagger back end.

## Run the Demo

```
git clone https://github.com/TamsinHuggins/stocks-ui-no-backend.git
cd react-stocks-demo
npm install
npm run dev

```


## Features
### Transactions Component
- Stock purchase transactions displayed 
- Component performs timed requests to back end in order to update


### PurchaseStock Component
- Finds avilable stocks and their current prices (currently dummy data, no API call)
- Stock ticker can be selected from drop down
- "Buy Stock" menu appears when stock ticker selected 
-  Purchase volume can be selected via input box
- Transactions array updated with new transaction based on chosen ticker and volume (will become a POST request when backend is hooked up)

