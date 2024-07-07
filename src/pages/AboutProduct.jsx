// AboutProduct.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../../data";

const AboutProduct = () => {
  const { productName } = useParams();
  const product = products.find((p) => p.name.toString() === productName);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <Link
        to="/"
        className="text-blue-500 hover:text-blue-700 flex items-center"
      >
        <svg
          className="w-6 h-6 mr-1"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15 19l-7-7 7-7"></path>
        </svg>
        Back
      </Link>
      <div className="flex flex-col items-center p-4">
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md"
        />
        <div className="text-lg my-2">{`Price: ₦${product.price} (${product.pricePer})`}</div>
        <p className="text-gray-700 text-base mb-4">{product.description}</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AboutProduct;
