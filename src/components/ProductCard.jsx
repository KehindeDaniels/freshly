import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext"; // Import useCart

const ProductCard = ({ product, to }) => {
  const { addItem } = useCart(); // Get addItem function from context

  return (
    <div className="p-2 rounded-lg bg-white border-t-[0.1px] shadow-md border-gray-300 overflow-hidden relative group hover:bg-gray-50 transition-colors">
      <div className="image relative flex items-center justify-center bg-[#F6F6F6] rounded">
        <img
          src={product.image}
          alt={product.name}
          className="w-1/2 h-48 object-cover"
        />
        <div className="absolute inset-0 bg-green-950 opacity-80 p-4 hidden group-hover:flex group-hover:justify-center group-hover:items-center">
          <button
            className=" bg-transparent border text-white py-2 px-4 rounded-full"
            onClick={() => addItem(product)} // Add product to cart
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="p-4 flex justify-between items-end">
        <Link
          to={to}
          className="name-priceper flex flex-col no-underline text-black"
        >
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-600">{`${product.pricePer}`}</p>
        </Link>
        <p className="text-gray-600">{`₦${product.price}`}</p>
      </div>
      <button className="absolute top-4 right-6 p-2 rounded-full bg-white text-gray-200 hover:text-red-500">
        <FaHeart />
      </button>
    </div>
  );
};

export default ProductCard;
