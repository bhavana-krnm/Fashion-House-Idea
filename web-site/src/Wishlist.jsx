import { useState } from "react";

export default function Wishlist() {
  const [wishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("wishlist")) || [];
    } catch {
      return [];
    }
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Wishlist</h2>

      {wishlist.length === 0 ? (
        <p style={{ marginTop: "10px", color: "gray" }}>
          Wishlist is empty ❤️
        </p>
      ) : (
        <div style={{ display: "grid", gap: "10px", marginTop: "10px" }}>
          {wishlist.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                borderRadius: "8px",
              }}
            >
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}