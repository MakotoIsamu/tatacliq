import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cart.map((product, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p>{product.description}</p>
              <p className="text-lg font-semibold">₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
