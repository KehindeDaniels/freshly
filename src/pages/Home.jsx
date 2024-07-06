import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../../data";

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.name}`}
          className="no-underline text-black"
        >
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
