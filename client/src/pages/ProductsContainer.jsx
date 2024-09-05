import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductsContainer = ({ sortOption, filters }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        if (!response.ok) {
          alert(data.message);
        } else {
          setProducts(data);
          setFilteredProducts(data); // Initialize with all products
        }
      } catch (error) {
        alert("Failed to fetch products");
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Apply sorting
    let sortedProducts = [...filteredProducts];
    if (sortOption === "price-low-to-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high-to-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProducts);
  }, [sortOption]);

  useEffect(() => {
    // Apply filters
    let filtered = products.filter((product) => {
      const matchesCategory = filters.categories.length
        ? filters.categories.includes(product.category)
        : true;
      const matchesBrand = filters.brands.length
        ? filters.brands.includes(product.brand)
        : true;
      const matchesSize = filters.sizes.length
        ? filters.sizes.includes(product.size)
        : true;
      const matchesType = filters.types.length
        ? filters.types.includes(product.type)
        : true;
      const matchesColor = filters.colors.length
        ? filters.colors.includes(product.color)
        : true;
      return (
        matchesCategory &&
        matchesBrand &&
        matchesSize &&
        matchesType &&
        matchesColor
      );
    });

    setFilteredProducts(filtered);
  }, [filters, products]);

  return (
    <div className="w-3/4 mx-auto p-6 overflow-auto">
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, i) => (
            <div
              key={i}
              className="border rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="mt-2 text-gray-600 text-sm">
                  {product.description || product.desc}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-lg font-bold text-green-600">{`$${product.price}`}</p>
                  <button
                    className="bg-red-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-500 transition-colors"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductsContainer;
