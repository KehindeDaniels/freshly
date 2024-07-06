import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product, to }) => {
  // State to manage visibility of the Add to Cart button on mobile
  const [showAddToCart, setShowAddToCart] = useState(false);

  // Toggle the Add to Cart button visibility
  const toggleAddToCart = () => {
    setShowAddToCart(!showAddToCart);
  };

  return (
    <div className="p-2 rounded-lg bg-white shadow-md overflow-hidden relative group hover:bg-gray-50 transition-colors">
      <div
        className="image relative flex items-center justify-center bg-[#F6F6F6]"
        onClick={toggleAddToCart} // Toggle on image click
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-1/2 h-48 object-cover"
        />
        {/* Toggle visibility based on showAddToCart state or hover */}
        <div
          className={`absolute inset-0 bg-green-950 opacity-70 p-4 ${
            showAddToCart ? "flex" : "hidden"
          } group-hover:flex justify-center items-center`}
        >
          <button className="bg-transparent border text-white py-2 px-2 rounded-full">
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
      <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
        <FaHeart />
      </button>
    </div>
  );
};

export default ProductCard;
