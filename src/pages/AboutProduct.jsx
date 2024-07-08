import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../CartContext";
import products from "../../data";
import ProductGrid from "../components/ProductGrid";

const AboutProduct = () => {
  const { productName } = useParams();
  const { addItem, decrementItem } = useCart();
  const product = products.find((p) => p.name === productName);

  // State to manage quantity
  const [quantity, setQuantity] = useState(0);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Function to render stars based on rating
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

  // Handle increment and decrement
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  // Add to cart with specific quantity
  const handleAddToCart = () => {
    if (quantity > 0) {
      addItem({ ...product, quantity });
      setQuantity(0); // Reset quantity after adding to cart
    }
  };

  return (
    <div className="contain mt-8 ">
      <Link to="/" className=" hover:text-green-700 flex items-center mb-4">
        &#8592; Back
      </Link>
      <div className="flex flex-col items-center md:flex-row gap-8 w-full">
        <div className="flex-1 rounded-lg bg-green-50 py-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-1/3  mx-auto object-center"
          />
        </div>

        <div className="description md:pr-16 flex-1 flex flex-col justify-center items-center text-center md:text-left md:items-start">
          <h1 className="text-3xl font-bold md:flex md:justify-between md:items-center md:w-full">
            {product.name}{" "}
            <span className="text-green-600 text-xl">₦{product.price}</span>
          </h1>
          <div className="flex items-center mt-2">
            {renderStars(product.stars)}
            <span className="text-sm text-gray-500 ml-2">
              ({product.rating} reviews)
            </span>
          </div>
          <div className="mt-4">
            <label className="font-bold">Quantity</label>
            <div className="flex items-center justify-between w-36 border rounded-lg overflow-hidden  mt-1">
              <button onClick={handleDecrement} className="p-2">
                -
              </button>
              <div className="p-2">{quantity}</div>
              <button onClick={handleIncrement} className="p-2">
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
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-8 rounded">
              Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              className=" text-green-800 font-bold py-2 px-4 rounded"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="more mt-16 text-center sm:text-left ">
        <h3 className="font-bold pl-4">MORE FOR YOU</h3>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default AboutProduct;
