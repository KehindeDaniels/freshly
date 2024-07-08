import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Checkout = () => {
  const { items, clearCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const subtotal = Object.values(items).reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const delivery = 500;
  const VAT = 0; // Adjust VAT as per your local tax laws if necessary
  const total = subtotal + delivery + VAT;

  const handlePayment = () => {
    setShowModal(true); // Show the modal
    clearCart(); // Optionally clear the cart
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-6">
          <section>
            <h2 className="text-xl font-semibold">Shipping Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="Address"
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="City/Town"
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="State"
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Country"
                className="p-2 border rounded"
              />
            </div>
          </section>
          <section>
            <h2 className="text-xl font-semibold mt-6">Card Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <input
                type="text"
                placeholder="Card Number"
                className="p-2 border rounded sm:col-span-2"
              />
              <input
                type="text"
                placeholder="Expiry Date"
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="CVV"
                className="p-2 border rounded"
              />
            </div>
          </section>
          <p className="text-sm text-gray-500 mt-4">
            *This transaction is secured by DNS encryption
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="flex justify-between mt-4">
            <span>Subtotal</span>
            <span>₦{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery</span>
            <span>₦{delivery}</span>
          </div>
          <div className="flex justify-between">
            <span>VAT</span>
            <span>₦{VAT}</span>
          </div>
          <div className="flex justify-between font-bold mt-4">
            <span>Total</span>
            <span>₦{total}</span>
          </div>
          <button
            onClick={handlePayment}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mt-4 w-full"
          >
            Pay ₦{total}
          </button>
          {showModal && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white py-8 px-16 rounded text-center">
                <img
                  src="/assets/Check.png"
                  alt="check"
                  className="w-10 mx-auto"
                />
                <h2 className="font-bold mt-8">Order Successful!</h2>
                <p className="mb-8 text-gray-400">
                  Your order should be delivered to you within 2-3 days!
                </p>
                <Link
                  to="/"
                  className="bg-gray-800 text-white py-2 px-4 rounded-lg mt-4"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          )}
          <p className="text-xs text-center mt-4">
            *By clicking this button, you agree to the Terms and Conditions of
            Freshly Inc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
