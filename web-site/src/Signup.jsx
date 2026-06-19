import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Please fill all required fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));

    alert("Signup successful!");
    navigate("/categories");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "300px" }}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0", padding: "8px" }}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0", padding: "8px" }}
        />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0", padding: "8px" }}
        />

        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}