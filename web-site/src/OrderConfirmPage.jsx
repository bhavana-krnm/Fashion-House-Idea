
import { Link } from "react-router-dom";

export default function OrderConfirmPage() {
  return (
    <div className="confirm">
      <h2>Order Confirmed!</h2>
      <p>Your product has been successfully ordered.</p>
      <Link to="/tracking">Track Order</Link>
    </div>
  );
}
