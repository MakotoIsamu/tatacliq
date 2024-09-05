import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg flex justify-between items-center"
            >
              <img src={item.image} alt={item.name} className="w-20 h-20" />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">
                  Total: ${item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
