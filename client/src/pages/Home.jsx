import React from 'react';
import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import Categories from '../components/Categories';
import InFocus from '../components/InFocus';
import BlockbusterDeals from '../components/BlockbusterDeals';
import Footer from '../components/Footer';
import SealTheDeal from '../components/SealTheDeal';

const Home = () => {
  return (
    <>
    <div className="bg-gray-50 overflow-hidden">
      <Navbar />
      <HeroCarousel />
      <Categories />
      <InFocus />
      <BlockbusterDeals />
      <SealTheDeal/>
      <Footer />
    </div>
    </>
  )
}

export default Home
