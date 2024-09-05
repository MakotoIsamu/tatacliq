import React from 'react';
import image1 from '../assets/image/categories/51869107945502.avif';
import image2 from '../assets/image/categories/51869108011038.avif';
import image3 from '../assets/image/categories/51869108076574.avif';
import image4 from '../assets/image/categories/51869108142110.avif';
import image5 from '../assets/image/categories/51869108207646.avif';
import image6 from '../assets/image/categories/51869108273182.avif';
import image7 from '../assets/image/categories/51869108404254.avif';
import image8 from '../assets/image/categories/51869108469790.avif';
import image9 from '../assets/image/categories/51869108535326.avif';
import image10 from '../assets/image/categories/51869108600862.avif';
import image11 from '../assets/image/categories/51869108338718.avif';
import {Link} from 'react-router-dom'

const Categories = () => {
  const categories = [
    { id: 0, image: image1 },
    { id: 1, image: image2 },
    { id: 2, image: image3 },
    { id: 3, image: image4 },
    { id: 4, image: image5 },
    { id: 5, image: image6 },
    { id: 6, image: image7 },
    { id: 7, image: image8 },
    { id: 8, image: image9 },
    { id: 9, image: image10 },
    { id: 10, image: image11 },
  ];

  const categoriesPages = ['Westside','WomensWear','MensWear','Footwear','Beauty','Watches','Kids','Gadgets','HomeFurniture','Bags','Jwellery',]

  return (
    <div className='flex justify-center items-center' >
      <div className='bg-gray-100 p-4 flex justify-between items-end gap-3 overflow-x-auto h-56 max-w-screen-xl'>
        {categories.map((category) => (
          <Link to={`/category/${categoriesPages[category.id]}`} key={category.id} className='flex-shrink-0'>
            <img src={category.image} alt="Category" className='object-cover h-40 w-40 rounded-md' />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
