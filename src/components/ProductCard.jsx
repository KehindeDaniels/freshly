// ProductCard.jsx
import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  // Safe access to nested properties
  const imageUrl =
    product && product.photos && product.photos.length > 0
      ? `https://api.timbu.cloud/images/${product.photos[0].url}`
      : "path_to_default_image.jpg"; // Provide a default image if not available

  return (
    <div className="p-2 rounded-lg bg-white border-t-[0.1px] shadow-md border-gray-300 overflow-hidden relative group hover:bg-gray-50 transition-colors">
      <div className="image relative flex items-center justify-center bg-[#F6F6F6] rounded">
        <img
          src={imageUrl}
          alt={product ? product.name : "Product"}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-green-950 opacity-80 p-4 hidden group-hover:flex group-hover:justify-center group-hover:items-center">
          <button
            className="bg-transparent border text-white py-2 px-4 rounded-full"
            onClick={() => product && addItem(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      {product && (
        <Link
          to={`/product/${product.name}`}
          className="name-price flex flex-col no-underline text-black"
        >
          <div className="p-4 flex justify-between items-end">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600">
              Price:₦{" "}
              {product.current_price
                ? product.current_price[0]["NGN"][0]
                : "N/A"}
            </p>
          </div>
        </Link>
      )}
      <button className="absolute top-4 right-6 p-2 rounded-full bg-white text-gray-200 hover:text-red-500">
        <FaHeart />
      </button>
    </div>
  );
};

export default ProductCard;
