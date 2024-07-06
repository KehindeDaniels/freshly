import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutProduct from "./pages/AboutProduct";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:productName" element={<AboutProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
