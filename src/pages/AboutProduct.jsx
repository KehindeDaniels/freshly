import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../CartContext";
import products from "../../data";

const AboutProduct = () => {
  const { productName } = useParams();
  const { addItem, decrementItem } = useCart();
  const product = products.find((p) => p.name === productName);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Assuming each product has a star rating and a number of reviews
  const renderStars = (starsCount) => {
    let stars = [];
    for (let i = 0; i < starsCount; i++) {
      stars.push(
        <span key={i} className="text-green-500">
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="text-blue-500 hover:text-blue-700 flex items-center mb-4"
      >
        &#8592; Back
      </Link>
      <div className="flex flex-col items-center md:flex-row gap-8">
        <div className="flex-1 max-w-96">
          <div className="rounded-lg shadow-lg bg-green-50">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-52 mx-auto object-center"
            />
          </div>

          <div className="flex justify-center gap-4 mt-4">
            {/* Small size preview */}
            <img
              src={product.image}
              alt="Small"
              className="w-20 h-20 rounded-lg cursor-pointer"
            />
            {/* Medium size preview */}
            <img
              src={product.image}
              alt="Medium"
              className="w-24 h-24 rounded-lg cursor-pointer"
            />
            {/* Large size preview */}
            <img
              src={product.image}
              alt="Large"
              className="w-28 h-28 rounded-lg cursor-pointer"
            />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            {product.name}{" "}
            <span className="text-green-600 text-xl">₦{product.price}</span>
          </h1>
          <div className="flex items-center mt-2">
            {renderStars(product.stars)}
            <span className="text-sm text-gray-500 ml-2">
              ({product.rating} reviews)
            </span>
          </div>
          <div className="mt-4 ">
            <label className="font-bold">Quantity</label>
            <div className="flex items-center justify-between w-32 border rounded overflow-hidden mt-1">
              <button
                onClick={() => decrementItem(product.id)}
                className="p-2 bg-gray-200 hover:bg-gray-300"
              >
                -
              </button>
              <div className="p-2">1</div>
              <button
                onClick={() => addItem(product)}
                className="p-2 bg-gray-200 hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
          <p className="mt-4">
            <strong>Description:</strong>
            <br />
            {product.description}
          </p>
          <div className="mt-4 flex gap-4">
            <button className="bg-green-600 hover:bg-green-600 text-white py-2 px-4 rounded">
              Buy Now
            </button>
            <button
              onClick={() => addItem(product)}
              className=" text-green-800 font-bold py-2 px-4 rounded"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
