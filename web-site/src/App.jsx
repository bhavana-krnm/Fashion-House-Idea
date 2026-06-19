import { Routes, Route } from "react-router-dom";

import { CartProvider } from "./CartContext";

import IndexPage from "./IndexPage";
import CategoryPage from "./CategoryPage";
import ProductPage from "./ProductPage";
import ProductDetailPage from "./ProductDetailPage";

import CartPage from "./CartPage";
import BuyNowPage from "./BuyNowPage";
import OrderConfirmPage from "./OrderConfirmPage";
import OrderTrackingPage from "./OrderTrackingPage";

import Signup from "./Signup";
import Profile from "./Profile";
import Wishlist from "./Wishlist";
import CheckoutPage from "./CheckoutPage";

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<IndexPage />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<CartPage />} />
<Route path="/checkout" element={<CheckoutPage />} />
<Route path="/buy-now" element={<BuyNowPage />} />

        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/products/:category" element={<ProductPage />} />
        <Route
          path="/products/:category/:item"
          element={<ProductDetailPage />}
        />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/buy-now" element={<BuyNowPage />} />

        <Route path="/confirm" element={<OrderConfirmPage />} />
        <Route path="/tracking" element={<OrderTrackingPage />} />
      </Routes>
    </CartProvider>
  );
}