const OrderTableRow = (props) => {
  return (
    <tr key={props.key}>
      <td>{props.transaction.created.toLocaleString()}</td>
      <td>{props.transaction.statusCode}</td>
      <td>{props.transaction.type}</td>
      <td>{props.transaction.ticker}</td>
      <td>{props.transaction.quantity}</td>
      <td>{props.transaction.price}</td>
    </tr>
  );
};

export default OrderTableRow;
