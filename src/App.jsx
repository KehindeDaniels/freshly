import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import { ProductProvider } from "./contexts/ProductContext"; // Adjust the import path as necessary
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutProduct from "./pages/AboutProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import F4o4 from "./pages/Error404";

export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="product/:productName" element={<AboutProduct />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="*" element={<F4o4 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}
