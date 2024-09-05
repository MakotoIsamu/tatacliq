import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom'; // To read search query from URL
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search') || ''; // Get search term from URL

  const { addToCart } = useCart();

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Filter, search, and sort products in one pass, memoized for performance
  const filteredAndSortedProducts = useMemo(() => {
    let filteredProducts = products;

    // Apply search filter
    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter if set
    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }

    // Sort products by price
    filteredProducts = filteredProducts.sort((a, b) => 
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );

    return filteredProducts;
  }, [products, category, sortOrder, searchTerm]); // Dependencies

  return (
    <>
    <Navbar/>
      <div className="flex justify-between items-center mb-6">
        <Filter handleFilter={setCategory} />
        <div>
          <button onClick={() => setSortOrder('asc')} className="mr-2 p-2 bg-blue-500 text-white rounded">
            Sort by Price: Low to High
          </button>
          <button onClick={() => setSortOrder('desc')} className="p-2 bg-blue-500 text-white rounded">
            Sort by Price: High to Low
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredAndSortedProducts.map((product) => (
          <ProductCard key={product.name} product={product} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
};

export default ProductPage;
