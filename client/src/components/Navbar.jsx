import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; 
import { Link } from 'react-router-dom';
import Logo from '../assets/image/tatacliq-logo-white-bg_ssr.svg';

const Navbar = () => {
  const { isAuth, handleLogout } = useContext(AuthContext);

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
      <div className='flex justify-between items-center px-6 py-4 bg-gray-950'>
        <div className='flex space-x-6'>
          <div className='cursor-pointer'>Categories</div>
          <Link to='/products' className='cursor-pointer'>Products</Link>
        </div>
        <input
          type='search'
          placeholder='Search for Products'
          className='bg-gray-700 text-white px-4 py-2 w-full max-w-lg rounded-md outline-none'
        />
        <div className='flex space-x-6'>
          <div className='cursor-pointer'>Wishlist</div>
          <Link to='/cart' className='cursor-pointer relative'>
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
