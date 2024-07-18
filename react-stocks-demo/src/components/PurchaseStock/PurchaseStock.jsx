import { useState } from "react";
import { getDummyStocks } from "../../data/dummyData";
import { placeNewOrder } from "../../data/dataFunctions";

const PurchaseStock = (props) => {
  const dummyStocks = getDummyStocks();

  const [selectedTicker, setSelectedTicker] = useState("xxx");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [bought, setBought] = useState(0); // currently can only be used once per page load

  const handleBuy = (ticker, quantity, buyOrSell) => {
    setBought(1);

    placeNewOrder(ticker, quantity, buyOrSell);
  };

  const changeTicker = (e) => {
    const chosenTicker = e.target.value;
    setSelectedTicker(chosenTicker);
    console.log(chosenTicker);
  };

  const changeQuantity = (e) => {
    console.log(typeof e.target.value);
    const chosenQuantity = Math.abs(e.target.value);
    setSelectedQuantity(chosenQuantity);
  };

  const findPrice = (ticker) => {
    const stock = dummyStocks.find((stock) => stock.ticker === ticker);
    return stock.price;
  };

  return (
    <div>
      <div>
        <h1>Buy a Stock</h1>

        <select
          id="tickerSelector"
          onChange={changeTicker}
          value={selectedTicker}
        >
          <option key="xxx" value="xxx">
            --select--
          </option>
          {dummyStocks.map((stock) => (
            <option key={stock.ticker} value={stock.ticker}>
              {stock.ticker}
            </option>
          ))}
        </select>
      </div>

      {selectedTicker !== "xxx" && (
        <div id="buyBar">
          <h2>Buy {selectedTicker}</h2>
          <p>Current Price: {findPrice(selectedTicker)}</p>

          <label htmlFor="Quantity">Quantity</label>
          <input
            id="orderId"
            type="number"
            min="1"
            value={selectedQuantity}
            onChange={changeQuantity}
          />

          <button
            onClick={() => handleBuy(selectedTicker, selectedQuantity, "BUY")}
          >
            Buy
          </button>
        </div>
      )}
    </div>
  );
};

export default PurchaseStock;
