import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext'; 
import { useCart } from '../context/CartContext'; // Import useCart
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/image/tatacliq-logo-white-bg_ssr.svg';

const Navbar = () => {
  const { isAuth, handleLogout } = useContext(AuthContext);
  const { cart } = useCart(); // Access cart state from useCart
  const [searchTerm, setSearchTerm] = useState('');
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const navigate = useNavigate();

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // When the user presses Enter, navigate to the Product page and pass the search term
  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      navigate(`/products?search=${searchTerm}`);
    }
  };

  // Count the number of items in the cart
  const cartItemCount = cart.length;

  // Toggle categories dropdown
  const handleMouseEnter = () => {
    setIsCategoriesOpen(true);
  };

  const handleMouseLeave = () => {
    setIsCategoriesOpen(false);
  };

  return (
    <nav className='bg-black text-white'>
      <div className='flex justify-between items-center px-6 py-4'>
        <Link to='/'><img src={Logo} alt="Logo" className='h-10' /></Link>
        <div className='hidden md:flex space-x-6'>
          <p className='cursor-pointer'>Tata CLiQ Luxury</p>
          <p className='cursor-pointer'>CLiQ Cash</p>
          <p className='cursor-pointer'>Gift Card</p>
          <p className='cursor-pointer'>CLiQ Care</p>
          <p className='cursor-pointer'>Track Orders</p>
          {isAuth ? (
            <button className='cursor-pointer' onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link className='cursor-pointer' to='/signup'>
              Sign in / Sign Up
            </Link>
          )}
        </div>
      </div>
      <div className='relative flex justify-between items-center px-6 py-4 bg-gray-950'>
        <div 
          className='relative cursor-pointer'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className='flex items-center'>
            Categories
          </button>
          {isCategoriesOpen && (
            <div className='absolute top-full left-0 bg-gray-800 text-white mt-2 rounded-md shadow-lg z-10'>
              <Link to='/category/Westside' className='block px-4 py-2 hover:bg-gray-700'>Westside</Link>
              <Link to='/category/WomensWear' className='block px-4 py-2 hover:bg-gray-700'>WomensWear</Link>
              <Link to='/category/MensWear' className='block px-4 py-2 hover:bg-gray-700'>MensWear</Link>
              <Link to='/category/Footwear' className='block px-4 py-2 hover:bg-gray-700'>Footwear</Link>
              <Link to='/category/Beauty' className='block px-4 py-2 hover:bg-gray-700'>Beauty</Link>
              <Link to='/category/Watches' className='block px-4 py-2 hover:bg-gray-700'>Watches</Link>
              <Link to='/category/Kids' className='block px-4 py-2 hover:bg-gray-700'>Kids</Link>
              <Link to='/category/Gadgets' className='block px-4 py-2 hover:bg-gray-700'>Gadgets</Link>
              <Link to='/category/HomeFurniture' className='block px-4 py-2 hover:bg-gray-700'>HomeFurniture</Link>
              <Link to='/category/Bags' className='block px-4 py-2 hover:bg-gray-700'>Bags</Link>
              <Link to='/category/Jewellery' className='block px-4 py-2 hover:bg-gray-700'>Jewellery</Link>
            </div>
          )}
        </div>
        <Link to='/products' className='cursor-pointer'>Products</Link>
        <input
          type='search'
          placeholder='Search for Products'
          className='bg-gray-700 text-white px-4 py-2 w-full max-w-lg rounded-md outline-none'
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleSearchSubmit} // Submit search when "Enter" is pressed
        />
        <div className='flex space-x-6'>
          <div className='cursor-pointer'>Wishlist</div>
          <Link to='/cart' className='cursor-pointer relative'>
            <span className='mr-2'>Cart</span>
            {cartItemCount > 0 && (
              <span className='bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1'>
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
