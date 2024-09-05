import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // asc or desc

  const { addToCart } = useCart();

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleSort = (order) => {
    setSortOrder(order);
    const sortedProducts = [...filteredProducts].sort((a, b) =>
      order === 'asc' ? a.price - b.price : b.price - a.price
    );
    setFilteredProducts(sortedProducts);
  };

  const handleFilter = (category) => {
    setCategory(category);
    const filtered = products.filter((product) =>
      category ? product.category === category : true
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <Filter handleFilter={handleFilter} />
        <div>
          <button onClick={() => handleSort('asc')} className="mr-2 p-2 bg-blue-500 text-white rounded">
            Sort by Price: Low to High
          </button>
          <button onClick={() => handleSort('desc')} className="p-2 bg-blue-500 text-white rounded">
            Sort by Price: High to Low
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.name} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
