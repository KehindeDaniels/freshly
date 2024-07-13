// ProductGrid.jsx
import React from "react";
import ProductCard from "./ProductCard"; // Ensure this import path is correct

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          to={`/product/${product.id}`}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
