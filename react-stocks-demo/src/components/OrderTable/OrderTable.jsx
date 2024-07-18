import { useEffect, useState } from "react";
import { getDummyOrders } from "../../data/dummyData";
import OrderTableRow from "./OrderTableRow";
import { getOrders } from "../../data/dataFunctions";

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const [timedCounter, setTimedCounter] = useState(0);

  useEffect(() => {}, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimedCounter((counter) => counter + 1);
    }, 1000);

    getOrders().then((response) => {
      setOrders(response.data);
    });

    return () => clearInterval(interval);
  }, [timedCounter]);

  return (
    <div>
      <h1>Orders</h1>

      {orders.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <table className="OrderTable">
          <thead>
            <tr>
              <th>Created</th>
              <th> Status </th>
              <th> Type</th>
              <th> Ticker</th>
              <th> Quantity</th>
              <th> Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((transaction, index) => (
              <OrderTableRow key={index} transaction={transaction} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderTable;
