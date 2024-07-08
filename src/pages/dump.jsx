import React from "react";

const Checkout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Shipping and Payment Information */}
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

        {/* Order Summary */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="flex justify-between mt-4">
            <span>Subtotal</span>
            <span>₦4500</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery</span>
            <span>₦500</span>
          </div>
          <div className="flex justify-between">
            <span>VAT</span>
            <span>₦0</span>
          </div>
          <div className="flex justify-between font-bold mt-4">
            <span>Gross Total</span>
            <span>₦5000</span>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mt-4 w-full">
            Pay ₦5000
          </button>
          <p className="text-xs text-center mt-4">
            *By clicking this button, you agree to the Terms and Conditions of
            Freshly inc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
