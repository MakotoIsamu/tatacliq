import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductPage from './pages/ProductPage';
import CategoryProducts from './pages/CategoryProducts'
import CartProvider from './context/CartContext'; // Default import
import { AuthProvider } from './context/AuthContext';
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage';


function App() {
  return (
    <>
    <CartProvider>
      <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/products' element={<ProductPage/>}/>
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/checkout' element={<CheckoutPage/>} />
          <Route path='/category/:categoryName' element={<CategoryProducts/>}/>
        </Routes>
      </Router>
      </AuthProvider>
      </CartProvider>
    </>
  );
}

export default App;