import "./App.css";
import PurchaseStock from "./components/PurchaseStock/PurchaseStock";
import OrderTable from "./components/OrderTable/OrderTable";

function App() {
  return (
    <div>
      <OrderTable />
      <PurchaseStock />
    </div>
  );
}

export default App;
