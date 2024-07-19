const OrderTableRow = (props) => {
  return (
    <tr>
      <td>{props.order.created}</td>
      <td>{props.order.statusCode}</td>
      <td>{props.order.type}</td>
      <td>{props.order.ticker}</td>
      <td>{props.order.quantity}</td>
      <td>{props.order.price}</td>
    </tr>
  );
};

export default OrderTableRow;
