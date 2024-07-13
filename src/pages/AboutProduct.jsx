import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../CartContext";
import ProductGrid from "../components/ProductGrid";
import axios from "axios";

const AboutProduct = () => {
  const { productName } = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const url = `https://timbu-get-all-products.reavdev.workers.dev/${encodeURIComponent(
          productName
        )}`; // Correctly encoding the product name
        const response = await axios.get(url);
        if (response.status === 200 && response.data) {
          setProduct(response.data);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        const message = err.response ? err.response.data.message : err.message;
        setError("Error fetching product details: " + message);
        console.error("Error fetching product details:", message);
      }
    };

    fetchProduct();
  }, [productName]);

  if (error) {
    return <div className="container mt-8 p-4">{error}</div>;
  }

  if (!product) {
    return <div className="container mt-8 p-4">Loading...</div>;
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addItem({ ...product, quantity });
      setQuantity(0);
    }
  };

  const getImageUrl = (product) => {
    return product && product.photos && product.photos.length > 0
      ? `https://api.timbu.cloud/images/${product.photos[0].url}`
      : "path_to_default_image.jpg"; // Provide a default image if not available
  };

  return (
    <div className="container mt-8 p-4">
      <Link to="/" className="hover:text-green-700 flex items-center mb-4">
        &#8592; Back
      </Link>
      <div className="flex flex-col items-center md:flex-row gap-8 w-full">
        <div className="flex-1 rounded-lg bg-green-100 py-8">
          <img
            src={getImageUrl(product)}
            alt={product.name}
            className="w-1/3 mx-auto object-center"
          />
        </div>

        <div className="description md:pr-16 flex-1 flex flex-col justify-center items-center text-center md:text-left md:items-start">
          <h1 className="text-3xl font-bold flex flex-col md:flex-row md:justify-between md:items-center md:w-full">
            {product.name}
            <span className="text-green-600 text-xl">
              ₦{product.price || "N/A"}
            </span>
          </h1>
          <div className="mt-4">
            <label className="font-bold">Quantity</label>
            <div className="flex items-center justify-between w-36 border rounded-lg mt-1">
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
            {product.description || "No description available."}
          </p>
          <div className="mt-4 flex gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-8 rounded">
              Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              className="text-green-800 font-bold py-2 px-4 rounded"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="more mt-16 text-center sm:text-left">
        <h3 className="font-bold pl-4">MORE FOR YOU</h3>
        <ProductGrid products={[product]} />
      </div>
    </div>
  );
};

export default AboutProduct;
