import React from "react";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, addItem, decrementItem, removeItem, clearCart } = useCart();
  const subtotal = Object.values(items).reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const delivery = 500; // Fixed delivery cost
  const VAT = 0; // VAT not applied in this example, adjust as necessary
  const grossTotal = subtotal + delivery + VAT; // Calculating Gross Total

  if (Object.keys(items).length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-8 px-4">
        <p className="font-bold text-3xl text-center">Your cart is empty!</p>
        <div className="rounded-full bg-green-50 h-40 w-40">
          <img
            src="/assets/face.png"
            alt="Empty Cart"
            className="object-cover rounded-full h-full"
          />
        </div>
        <Link to="/" className="bg-red-500 text-white py-2 px-4 rounded">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container w-full p-8 mx-auto">
      <Link
        to="/"
        className="  rounded hover:bg-gray-300 transition-colors mb-4"
      >
        &#8592; Back
      </Link>
      <div className="flex flex-col lg:flex-row justify-between gap-6 mt-8 ">
        <div className="flex-1 ">
          <div className="font-bold text-lg mb-2">Your Cart</div>
          {Object.values(items).map((item) => (
            <div
              key={item.id}
              className="relative flex items-center gap-4 mb-4  p-4 border-b-2 border-gray-200"
            >
              <input type="checkbox" className="form-checkbox h-5 w-5" />
              {/* image count */}
              <div className="flex gap-6">
                {/* image */}
                <div className="flex-1 bg-[#E6FDE0] w-32 h-32 p-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className=" rounded-lg"
                  />
                </div>
                {/* price count */}
                <div className="flex-1  flex items-start sm:gap-32 flex-col w-full sm:flex-row ">
                  {/* name price */}
                  <div className="text-lg flex flex-col ">
                    <span className="font-bold">{item.name}</span>
                    <span className="text-[#1DA934] font-bold">
                      ₦{item.price}
                    </span>
                  </div>
                  {/* buttons count */}
                  <div className="flex items-center sm:min-w-32 justify-between rounded-lg border border-gray-400 ">
                    <button
                      onClick={() => decrementItem(item.id)}
                      className=" p-2 "
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button onClick={() => addItem(item)} className=" p-2 ">
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className=" absolute top-0 right-0"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-80 p-4 bg-white shadow-md rounded-lg">
          <h4 className="text-xl font-bold">Order Summary</h4>
          <div className="my-2 flex justify-between">
            <span>Subtotal</span>
            <span>₦{subtotal}</span>
          </div>
          <div className="my-2 flex justify-between">
            <span>Delivery</span>
            <span>₦{delivery}</span>
          </div>
          <div className="my-2 flex justify-between">
            <span>VAT</span>
            <span>₦{VAT}</span>
          </div>
          <div className="my-4 border-t pt-4 flex justify-between font-bold">
            <span>Total</span>
            <span>₦{grossTotal}</span>
          </div>
          <Link to="/checkout">
            <button className="bg-[#3F7039] hover:bg-green-700 text-white py-2 px-4 rounded w-full">
              Checkout Now
            </button>
          </Link>
          <button
            onClick={clearCart}
            className=" text-red-700 font-bold py-2 px-4 rounded w-full mt-2"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
