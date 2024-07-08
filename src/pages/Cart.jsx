import React from "react";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, addItem, decrementItem, removeItem, clearCart } = useCart();

  // Calculate subtotal
  const subtotal = Object.values(items).reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  // Assume delivery is a flat rate; could also be dynamic
  const delivery = 500;

  // Calculate total
  const total = subtotal + delivery;

  if (Object.keys(items).length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-8 px-4">
        <p className="font-bold text-3xl text-center">
          So you came here without buying anything?
        </p>
        <div className="rounded-full bg-green-50 h-40 w-40">
          <img
            src="/assets/face.png"
            alt="Empty Cart"
            className="object-cover rounded-full h-full"
          />
        </div>
        <Link to="/" className="bg-red-500 text-white py-2 px-4 rounded">
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
      <div className="flex flex-col md:flex-row justify-between p-4">
        <div className="flex-1 ">
          {Object.values(items).map((item) => (
            <div
              key={item.id}
              className="flex flex-col relative md:flex-row justify-between items-center mb-4 gap-4 p-4 shadow rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded"
              />
              <div className="flex-1">
                <h5 className="text-xl font-bold">{item.name}</h5>
                {/* <p className="text-gray-500">{item.description}</p> */}
                <p className="text-sm">Size: S</p>
                <p className="text-lg">₦{item.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => decrementItem(item.id)}
                  className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-1 px-3 rounded"
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => addItem(item)}
                  className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-1 px-3 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className=" hover:text-red-700 text-2xl absolute top-0 right-8"
              >
                x
              </button>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Clear Cart
          </button>
        </div>
        <div className="w-80 p-4 ml-4 bg-white shadow rounded-lg">
          <h4 className="text-xl font-bold mb-4">Order Summary</h4>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>₦{subtotal}</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery</p>
            <p>₦{delivery}</p>
          </div>
          <div className="flex justify-between font-bold mt-4">
            <p>Total</p>
            <p>₦{total}</p>
          </div>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">
            Checkout Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
