import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../../data";

const Home = () => {
  return (
    <div>
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.name}`}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
