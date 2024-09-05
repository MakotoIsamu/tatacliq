import React from "react";

const FilterContainer = ({ onFilterChange }) => {
  const handleCheckboxChange = (e, filterType) => {
    const { name, checked } = e.target;
    onFilterChange(filterType, name);
  };

  return (
    <div className="w-1/4 bg-white p-4 rounded shadow-lg overflow-auto">
      <h2 className="text-2xl font-bold mb-4">Filters</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Category</h3>
        <ul className="space-y-2">
          {["Westside", "WomensWear", "MensWear", "Footwear", "Beauty", "Watches", "Kids", "Gadgets", "HomeFurniture", "Bags", "Jewellery"].map((category) => (
            <li key={category}>
              <input
                type="checkbox"
                id={category}
                name={category}
                className="mr-2"
                onChange={(e) => handleCheckboxChange(e, "categories")}
              />
              <label htmlFor={category}>{category}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* Brands Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Brands</h3>
        <ul className="space-y-2">
          {["Brand 1", "Brand 2", "Brand 3"].map((brand) => (
            <li key={brand}>
              <input
                type="checkbox"
                id={brand}
                name={brand}
                className="mr-2"
                onChange={(e) => handleCheckboxChange(e, "brands")}
              />
              <label htmlFor={brand}>{brand}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* Size Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Size</h3>
        <ul className="space-y-2">
          {["Small", "Medium", "Large"].map((size) => (
            <li key={size}>
              <input
                type="checkbox"
                id={size}
                name={size}
                className="mr-2"
                onChange={(e) => handleCheckboxChange(e, "sizes")}
              />
              <label htmlFor={size}>{size}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* Type Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Type</h3>
        <ul className="space-y-2">
          {["Type 1", "Type 2", "Type 3"].map((type) => (
            <li key={type}>
              <input
                type="checkbox"
                id={type}
                name={type}
                className="mr-2"
                onChange={(e) => handleCheckboxChange(e, "types")}
              />
              <label htmlFor={type}>{type}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* Colour Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Colour</h3>
        <ul className="space-y-2">
          {["Red", "Blue", "Green"].map((color) => (
            <li key={color}>
              <input
                type="checkbox"
                id={color}
                name={color}
                className="mr-2"
                onChange={(e) => handleCheckboxChange(e, "colors")}
              />
              <label htmlFor={color}>{color}</label>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        onClick={() => {}}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterContainer;
