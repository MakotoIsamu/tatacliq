import React from 'react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';

// Set your publishable key here
const stripePromise = loadStripe('pk_test_51PvjxcRtOcPKNpGz0rTYXBZHLBvrfMRIZc75YQPVLtQKdZD8ybk638CkVEN67PkB92J2OZK4jS4f5IiAUx5Q34P600hJmM3TDA');

const CheckoutPage = () => {
  const { cart } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>

          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cart.map((product, index) => (
                  <div key={index} className="flex items-center justify-between border-b py-2">
                    <div className="flex items-center">
                      <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-md mr-4" />
                      <div>
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="text-lg font-semibold">₹{product.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mt-4 font-semibold text-right">Total: ₹{totalPrice}</div>
              </div>
            )}
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
            <Elements stripe={stripePromise}>
              <CheckoutForm totalPrice={totalPrice} />
            </Elements>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
