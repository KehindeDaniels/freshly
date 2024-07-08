import React from "react";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, addItem, decrementItem, removeItem, clearCart } = useCart();

  if (Object.keys(items).length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-8 px-4">
        <p className="font-bold text-3xl text-center md:text-4xl">
          So you came here without buying anything?
        </p>
        <div className="rounded-full bg-green-50 h-40 w-40 md:h-64 md:w-64">
          <img
            src="/assets/face.png"
            alt="Empty Cart"
            className="object-cover rounded-full h-full"
          />
        </div>
        <Link
          to="/"
          className="bg-red-500 text-white py-2 px-4 rounded text-lg"
        >
          Leave here
        </Link>
      </div>
    );
  }

  return (
    <>
      <Link
        to="/"
        className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition-colors m-4"
      >
        Back
      </Link>
      <div className="p-4">
        {Object.values(items).map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full md:w-20 md:h-20 object-cover rounded"
            />
            <div className="text-lg md:text-xl font-bold">{item.name}</div>
            <div className="flex items-center">
              <button
                onClick={() => decrementItem(item.id)}
                className="bg-red-300 hover:bg-red-400 text-white font-bold py-1 px-3 rounded"
              >
                -
              </button>
              <span className="px-4">{item.quantity}</span>
              <button
                onClick={() => addItem(item)}
                className="bg-green-300 hover:bg-green-400 text-white font-bold py-1 px-3 rounded"
              >
                +
              </button>
            </div>
            <div className="font-semibold">{`Price: ₦${
              item.price * item.quantity
            }`}</div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="flex justify-center gap-4 mt-4 flex-col md:flex-row">
          <button
            onClick={clearCart}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Clear Cart
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
