import React from 'react';
import image1 from '../assets/image/BlockbusterDeals/51869116956702.avif';
import image2 from '../assets/image/BlockbusterDeals/51869117022238.avif';
import image3 from '../assets/image/BlockbusterDeals/51869117087774.avif';
import image4 from '../assets/image/BlockbusterDeals/51869117153310.avif';
import image5 from '../assets/image/BlockbusterDeals/51869117284382.avif';
import image6 from '../assets/image/BlockbusterDeals/51869117349918.avif';
import image7 from '../assets/image/BlockbusterDeals/51869117415454.avif';
import image8 from '../assets/image/BlockbusterDeals/51869117480990.avif';
import image9 from '../assets/image/BlockbusterDeals/51869117612062.avif';
import image10 from '../assets/image/BlockbusterDeals/51869117972510.avif';
import image11 from '../assets/image/BlockbusterDeals/51869118103582.avif';
import image12 from '../assets/image/BlockbusterDeals/51869120135198.avif';

const BlockbusterDeals = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-6xl text-center p-20 font-bold'>Blockbuster Deals</h2>
      <div className='grid grid-cols-2 gap-4 p-4 max-w-screen-xl'>
        {[
          image1, image2, image3, image4, image5, image6, image7, image8,
          image9, image10, image11, image12
        ].map((e, i) => (
          <div key={i} className='rounded-lg shadow-lg'>
            <img src={e} alt="" className='w-full h-full object-cover transition duration-700 hover:cursor-pointer hover:scale-105'/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlockbusterDeals;
