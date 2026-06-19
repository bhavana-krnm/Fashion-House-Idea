

export default function OrderTrackingPage() {
  const stages = [
    "Ordered ✅",
    "Cutting ✂️",
    "Stitching 🧵",
    "Stitched ✔️",
    "Out for Delivery 🚚",
    "Delivery 📦",
    "Delivered 🎉"
  ];

  return (
    <div className="tracking">
      <h2>Order Tracking</h2>
      <ul>
        {stages.map((stage, i) => <li key={i}>{stage}</li>)}
      </ul>
    </div>
  );
}
