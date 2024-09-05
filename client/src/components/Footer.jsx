import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="flex justify-between items-center mb-8">
          <img src="/api/placeholder/120/40" alt="TATA TRUST" className="h-10" />
          <div className="flex space-x-8">
            <div className="flex flex-col items-center">
              <svg className="w-6 h-6 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span className="text-xs">Authentic Brands</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-6 h-6 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="17 1 21 5 17 9"></polyline>
                <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                <polyline points="7 23 3 19 7 15"></polyline>
                <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
              </svg>
              <span className="text-xs">Easy Returns</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-6 h-6 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
              <span className="text-xs">Easy Payments</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Tata MarketPlace</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Sell with Us</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Affiliates</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>Shopping</li>
              <li>Offers & Promotions</li>
              <li>Payments</li>
              <li>Cancellation</li>
              <li>Returns & Refunds</li>
              <li>CliQ And PIQ</li>
              <li>Return To Store</li>
              <li>Electronics Return Policy</li>
              <li>Contact Us</li>
              <li>Reviews Guidelines</li>
              <li>Furniture Return Policy</li>
              <li>Replacement Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">My Tata CLiQ</h3>
            <ul className="space-y-2">
              <li>My Account</li>
              <li>My Orders</li>
              <li>My Shopping Bag</li>
              <li>My Wishlist</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Tata CLiQ Offerings</h3>
            <ul className="space-y-2 text-xs">
              <li>Watches for Men | Campus Shoes | Sandals for Men | Sneakers for Men |</li>
              <li>Reebok Shoes | Cotton Kurtis | Woodland Shoes | Jumpsuits | Allen Solly |</li>
              <li>Sparx Shoes | Gold Rings | Formal Shoes for Men | Sports Shoes for Men |</li>
              <li>Wallets for Men | Ladies Watches | Trolley Bags | Handbags for Women |</li>
              <li>Sling Bags for Women | Casual Shoes for Men | Boots for Men | Digital Watches |</li>
              <li>Sonata Watches | Sneakers for Women | Running Shoes | Puma Shoes |</li>
              <li>Boots for Women | Skechers | Malabargold | Fabindia | Utsa | Vark | Gia |</li>
              <li>LOV | Sitemap</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <span>Download App</span>
            <img src="/api/placeholder/24/24" alt="Android" className="h-6" />
            <img src="/api/placeholder/24/24" alt="iOS" className="h-6" />
          </div>
          <div className="flex space-x-4">
            <Facebook size={24} />
            <Twitter size={24} />
            <Instagram size={24} />
            <Youtube size={24} />
            <Linkedin size={24} />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm">
          © 2024 Tata CLiQ | All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;