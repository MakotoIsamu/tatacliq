import React from 'react';

const categories = [
  'Westside', 'WomensWear', 'MensWear', 'Footwear', 'Beauty',
  'Watches', 'Kids', 'Gadgets', 'HomeFurniture', 'Bags', 'Jwellery'
];

const Filter = ({ handleFilter }) => {
  return (
    <select onChange={(e) => handleFilter(e.target.value)} className="p-2 bg-white border rounded">
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Filter;
