

export default function CheckoutPage() {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <label>Delivery Address:</label>
        <textarea></textarea>
        <label>Payment Method:</label>
        <select>
          <option>Cash on Delivery</option>
          <option>PhonePe</option>
        </select>
        <button type="submit">Confirm Order</button>
      </form>
    </div>
  );
}
