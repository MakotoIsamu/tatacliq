import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProductsContainer from "./ProductsContainer";
import FilterContainer from "../components/FilterContainer";

const Products = () => {
  const [sortOption, setSortOption] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    brands: [],
    sizes: [],
    types: [],
    colors: [],
  });

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevFilters) => {
      const currentFilters = [...prevFilters[filterType]];
      if (currentFilters.includes(value)) {
        return {
          ...prevFilters,
          [filterType]: currentFilters.filter((item) => item !== value),
        };
      } else {
        return {
          ...prevFilters,
          [filterType]: [...currentFilters, value],
        };
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center w-full">
        <div className="w-full max-w-screen-xl flex justify-end p-4">
          <select
            name="sort"
            className="border p-2"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="">Sort by</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
          </select>
        </div>
        <div className="w-full max-w-screen-xl h-screen flex overflow-hidden">
          <FilterContainer onFilterChange={handleFilterChange} />
          <ProductsContainer sortOption={sortOption} filters={selectedFilters} />
        </div>
      </div>
    </>
  );
};

export default Products;
