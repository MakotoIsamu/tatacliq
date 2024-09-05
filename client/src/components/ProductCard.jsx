import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg">
      <img src={product.image} alt={product.name} className="w-96 object-cover" />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-gray-500">{product.category}</p>
      <p className="text-lg font-semibold">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 p-2 bg-green-500 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
