import { Routes, Route } from "react-router-dom";
import IndexPage from "./IndexPage";
import CategoryPage from "./CategoryPage";
import ProductPage from "./ProductPage";
import ProductDetailPage from "./ProductDetailPage"; // ✅ ADD THIS

import OrderConfirmPage from "./OrderConfirmPage";
import OrderTrackingPage from "./OrderTrackingPage";

import Signup from "./Signup";
import Profile from "./Profile";
import Wishlist from "./Wishlist";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />

      {/* Auth pages */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/wishlist" element={<Wishlist />} />

      {/* Main flow */}
      <Route path="/categories" element={<CategoryPage />} />
      <Route path="/products/:category" element={<ProductPage />} />

      {/* ✅ IMPORTANT MISSING ROUTE (THIS FIXES BLANK PAGE) */}
      <Route path="/products/:category/:item" element={<ProductDetailPage />} />

      <Route path="/confirm" element={<OrderConfirmPage />} />
      <Route path="/tracking" element={<OrderTrackingPage />} />
    </Routes>
  );
}