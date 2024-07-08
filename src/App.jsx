import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext"; // Import the provider
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutProduct from "./pages/AboutProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <CartProvider>
      {" "}
      {/* Wrap routes with CartProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:productName" element={<AboutProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
