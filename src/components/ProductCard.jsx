import React from "react";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="p-2 rounded-lg bg-white shadow-md overflow-hidden relative group hover:bg-gray-50 transition-colors">
      <div className="image relative flex items-center justify-center bg-[#F6F6F6]">
        <img
          src={product.image}
          alt={product.name}
          className="w-1/2 h-48 object-cover"
        />
        <div className="absolute inset-0 bg-green-950 opacity-70 p-4 hidden group-hover:flex group-hover:justify-center group-hover:items-center">
          <button className=" bg-transparent border text-white py-2 px-2 rounded-full">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-600">{`₦${product.price} ${product.description}`}</p>
      </div>
      <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
        <FaHeart />
      </button>
    </div>
  );
};

export default ProductCard;
