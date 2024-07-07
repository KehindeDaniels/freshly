// Home.jsx
import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../../data";
const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="no-underline text-black">
          <ProductCard product={product} to={`/product/${product.name}`} />
        </div>
      ))}
    </div>
  );
};

export default Home;
