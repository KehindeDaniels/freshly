import React from "react";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, addItem, removeItem, clearCart } = useCart();

  if (Object.keys(items).length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-dvh gap-8">
        <p className="font-bold text-3xl text-center">
          So you came here without buying anything?
        </p>
        <div className="rounded-full bg-green-50 h-64 w-64">
          <img
            src="/assets/face.png"
            alt="Empty Cart"
            className="object-cover rounded-full  h-full"
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
      <Link to="/">Back</Link>
      <div className="p-4">
        {Object.values(items).map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover mr-4"
            />
            <div>{item.name}</div>
            <div className="flex items-center">
              <button onClick={() => removeItem(item.id)} className="px-2">
                -
              </button>
              <span className="px-4">{item.quantity}</span>
              <button onClick={() => addItem(item)} className="px-2">
                +
              </button>
            </div>
            <div>{`Price: ₦${item.price * item.quantity}`}</div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={clearCart}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Clear Cart
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded ml-4">
          Proceed to Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
