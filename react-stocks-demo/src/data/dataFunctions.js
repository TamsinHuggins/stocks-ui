import axios from "axios";
import { getDummyStocks } from "./dummyData";

const serverURL = "http://frank-docker1.neueda.com:8081/v1";

export const getOrders = () => {
  return axios({
    url: `${serverURL}/trade`,
    method: "GET",
    headers: { Accept: "application/json" },
  });
};

export const placeNewOrder = (ticker, quantity, buyOrSell) => {
  // to be replaced with a call to 3rd party API
  const dummyStocks = getDummyStocks();

  const stock = dummyStocks.find((stock) => stock.ticker === ticker);

  const newOrder = {
    created: new Date(),
    statusCode: "PENDING",
    ticker: ticker,
    type: buyOrSell,
    quantity: quantity,
    price: stock.price,
  };

  return axios({
    url: `${serverURL}/trade`,
    method: "POST",
    headers: { Accept: "application/json" },
    data: newOrder,
  });
};
