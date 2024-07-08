// Home.jsx
import React from "react";
import ProductGrid from "../components/ProductGrid";
import products from "../../data";

const Home = () => {
  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
};

export default Home;
