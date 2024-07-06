import React from "react";
import { Link, useParams } from "react-router-dom";

const AboutProduct = () => {
  const { productId } = useParams();

  return (
    <div>
      <Link to={".."}>back</Link>AboutProduct
    </div>
  );
};

export default AboutProduct;
