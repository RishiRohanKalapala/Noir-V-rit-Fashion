import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-noir-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="font-display text-2xl text-white mb-4 inline-block">
              Noir Vérité
            </Link>
            <p className="text-gray-400 mb-6">
              Elegance in darkness. Luxury with purpose. Our premium clothing line embodies the boldness of truth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shopping Column */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Shopping</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/mens" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/products/womens" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/products/accessories" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-noir-800 border border-noir-700 text-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
              <button
                type="submit"
                className="bg-gold-500 text-noir-950 font-medium px-4 py-2 rounded-md hover:bg-gold-600 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-noir-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Noir Vérité. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <img src="https://www.pngitem.com/pimgs/m/47-479964_visa-mastercard-rupay-logo-hd-png-download.png" alt="Payment Methods" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;