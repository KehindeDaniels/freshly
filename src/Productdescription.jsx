import React from "react";
import { useParams } from "react-router-dom";

const ProductDescription = () => {
  const { productName } = useParams();
  return <div>productDescription</div>;
};

export default ProductDescription;
