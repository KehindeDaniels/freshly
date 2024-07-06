import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <>{product.summary}</>
    </div>
  );
};

export default ProductCard;
