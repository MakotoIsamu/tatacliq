import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react'; 
import { useCart } from '../context/CartContext'; // Import useCart

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart(); // Destructure addToCart from useCart

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        const filteredProducts = data.filter(product => product.category === categoryName);
        setProducts(filteredProducts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl mb-8 text-gray-800">
          {categoryName} Products
        </h1>
        {products.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="text-lg font-bold text-gray-800 mb-2">₹{product.price}</p>
                  <p className="text-sm text-gray-500 mb-4">Stock: {product.stock}</p>
                  <button 
                    onClick={() => handleAddToCart(product)} // Add click handler
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    <ShoppingCart className="mr-2" size={20} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-600">No products available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
