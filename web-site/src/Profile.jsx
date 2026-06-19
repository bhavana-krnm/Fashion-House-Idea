import { useState } from "react";

export default function Profile() {
  const [user] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  });

  if (!user) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Profile</h2>
        <p>No user data found. Please sign up first.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile</h2>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "16px",
          borderRadius: "8px",
          maxWidth: "400px",
        }}
      >
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
    </div>
  );
}