// dummyOrders array:
// Resembles what the backend will return as data, when we make a GET request to /stocks
// Starts with 3 pre-loaded previous orders
// is returned by the getDummyOrders function
// is updated by the buyDummyStock function

const dummyOrders = [
  {
    created: new Date(6, 5, 2024),
    statusCode: "FILLED",
    ticker: "AMZN",
    type: "BUY",
    quantity: 10,
    price: 100.0,
  },
  {
    created: new Date(4, 4, 2024),
    statusCode: "FILLED",
    ticker: "TSLA",
    type: "BUY",
    quantity: 5,
    price: 240.0,
  },
  {
    created: new Date(28, 1, 2024),
    statusCode: "FILLED",
    ticker: "AAPL",
    type: "BUY",
    quantity: 2,
    price: 70.0,
  },
];

// getDummyOrders function:
// resembles the functionality of a GET request to /stocks
// returns the dummyOrders array
// Will be replaced by a call to our backend with the following features:
// REQUEST TYPE: GET
// REQUEST URL: */stocks
// RETURNS: array of order objects with the correct keys ( created, statusCode, ticker, type, quantity, price)

export const getDummyOrders = () => {
  return dummyOrders;
};

// getDummyStocks Function
// resembles functionality of a call to a 3rd party stock price API
// RETURNS: an array of objects with the current price of the stocks

export const getDummyStocks = () => {
  const dummyStocks = [
    { ticker: "AMZN", price: 200.0 },
    { ticker: "TSLA", price: 250.0 },
    { ticker: "AAPL", price: 100.0 },
  ];

  return dummyStocks;
};

// buyDummyStock function:
// resembles the functionality of writing a new order to /stocks via a POST request
// REQUEST URL: /stocks
// REQUEST TYPE: POST
// PARAMETERS: ticker, quantity
// RETURNS: order object with the correct keys ( created, statusCode, ticker, type, quantity, price)

export const buyDummyStock = (ticker, quantity) => {
  //find the current price of the chosen stock
  const dummyStocks = getDummyStocks();
  const stock = dummyStocks.find((stock) => stock.ticker === ticker);

  const newDummyOrder = {
    created: new Date(),
    statusCode: "PENDING",
    ticker: ticker,
    type: "BUY",
    quantity: quantity,
    price: stock.price,
  };

  dummyOrders.push(newDummyOrder);

  console.log(dummyOrders);
  return newDummyOrder;
};
