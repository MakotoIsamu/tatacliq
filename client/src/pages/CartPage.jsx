import React from 'react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  // Handle proceed to checkout
  const handleCheckout = () => {
    navigate('/checkout'); // Adjust this route based on your app's structure
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-lg">Your cart is empty.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {cart.map((product, index) => (
                <div key={index} className="border p-4 rounded-lg flex flex-col items-center">
                  <img src={product.image} alt={product.name} className="w-80 h-60 object-cover mb-4" />
                  <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                  <p className="text-gray-700 mb-2">{product.description}</p>
                  <p className="text-lg font-semibold mb-4">₹{product.price}</p>
                  <button
                    onClick={() => removeFromCart(product.name)}
                    className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove from Cart
                  </button>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Total Price: ₹{totalPrice}</h2>
              <button
                onClick={handleCheckout}
                className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
