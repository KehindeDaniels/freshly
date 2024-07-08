import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../CartContext";
import products from "../../data";

const AboutProduct = () => {
  const { productName } = useParams();
  const { items, addItem, decrementItem, totalItems } = useCart();
  const product = products.find((p) => p.name === productName);

  const imageSizes = [
    { size: "s", src: product.image },
    { size: "m", src: product.image },
    { size: "l", src: product.image },
    { size: "+" },
  ];

  const sizes = imageSizes.map((imageSize, index) => (
    <div
      key={index}
      className="flex flex-col justify-center items-center gap-2 flex-1"
    >
      {imageSize.src && (
        <div className="img w-28 bg-green-100 p-2 rounded-lg hover:border hover:border-orange-300">
          <img
            src={imageSize.src}
            alt={imageSize.size}
            className="max-w-16 mx-auto"
          />
        </div>
      )}
      <p className="font-bold text-lg">{imageSize.size}</p>
    </div>
  ));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="">
      <Link
        to="/"
        className="text-blue-500 hover:text-blue-700 flex items-center"
      >
        Back
      </Link>
      <div className="container flex flex-col md:flex-row  gap-8">
        <div className="images flex-1 flex flex-col gap-4 ">
          <div className="image-top">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md"
            />
          </div>
          <div className="image-bottom flex gap-4">{sizes}</div>
        </div>
        <div className="description flex-1">
          <div className="flex flex-col  ">
            <div className="name-price flex justify-between items-start">
              <div className="name ">
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                {product.stars}
              </div>

              <div className="text-lg text-green-400">{product.price} </div>
            </div>

            <div className="quantity flex flex-col items-start">
              <p>Quantity</p>
              <div className="buttons text-xl flex border border-gray-300 rounded-lg w-16 justify-between items-center py-2 px-2 w-48 ">
                <button className="" onClick={() => decrementItem(items.id)}>
                  -
                </button>
                {totalItems}
                {/* {console.log(items)} */}
                <button className="" onClick={() => addItem(items)}>
                  +
                </button>
              </div>
            </div>

            <p className="text-gray-700 text-base my-4">
              <span className="block mb-2">DESCRIPTION</span>
              {product.description}
            </p>

            <div className="button flex gap-4 flex-col  md:flex-row ">
              <button className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-8 rounded">
                Buy Now
              </button>
              <button
                onClick={() => addItem(product)}
                className="text-green-800 font-bold"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <button onClick={() => addItem(items)}>+</button>
      <button onClick={() => addItem(items)}>+</button> */}
    </div>
  );
};

export default AboutProduct;
