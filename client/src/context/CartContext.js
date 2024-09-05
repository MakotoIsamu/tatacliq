import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to the cart or update the price if already exists
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item.name === product.name);
      if (existingProductIndex !== -1) {
        // If product exists, update its price
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          price: updatedCart[existingProductIndex].price + product.price
        };
        return updatedCart;
      } else {
        // If product does not exist, add it to the cart
        return [...prevCart, product];
      }
    });
  };

  // Remove product from the cart
  const removeFromCart = (productName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
