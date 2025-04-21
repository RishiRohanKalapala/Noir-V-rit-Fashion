import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();
  const { user, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
  }, [location]);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-noir-950/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl md:text-3xl text-white">
            Noir Vérité
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-gold-400 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-gray-300 hover:text-gold-400 transition-colors duration-200"
            >
              All Products
            </Link>
            <Link 
              to="/products/mens" 
              className="text-gray-300 hover:text-gold-400 transition-colors duration-200"
            >
              Men
            </Link>
            <Link 
              to="/products/womens" 
              className="text-gray-300 hover:text-gold-400 transition-colors duration-200"
            >
              Women
            </Link>
            <Link 
              to="/products/accessories" 
              className="text-gray-300 hover:text-gold-400 transition-colors duration-200"
            >
              Accessories
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              className="text-gray-300 hover:text-gold-400 transition-colors duration-200"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link 
              to="/wishlist" 
              className="text-gray-300 hover:text-gold-400 transition-colors duration-200 relative"
              aria-label="Wishlist"
            >
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-500 text-noir-950 rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link 
              to="/cart" 
              className="text-gray-300 hover:text-gold-400 transition-colors duration-200 relative"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-500 text-noir-950 rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
                  {itemCount}
                </span>
              )}
            </Link>
            
            {/* Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="text-gray-300 hover:text-gold-400 transition-colors duration-200"
                aria-label="User Profile"
              >
                <User size={20} />
              </button>
              
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-noir-900 rounded-md shadow-lg py-1">
                  {user ? (
                    <>
                      <div className="px-4 py-2 text-sm text-gray-400 border-b border-noir-800">
                        {user.email}
                      </div>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-noir-800"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-noir-800"
                      >
                        Orders
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-noir-800"
                      >
                        Sign out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/signin"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-noir-800"
                      >
                        Sign in
                      </Link>
                      <Link
                        to="/signup"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-noir-800"
                      >
                        Create account
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300 hover:text-gold-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-noir-900 absolute top-full left-0 right-0 animate-slide-down">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-gold-400 transition-colors duration-200 py-2"
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-gray-300 hover:text-gold-400 transition-colors duration-200 py-2"
            >
              All Products
            </Link>
            <Link 
              to="/products/mens" 
              className="text-gray-300 hover:text-gold-400 transition-colors duration-200 py-2"
            >
              Men
            </Link>
            <Link 
              to="/products/womens" 
              className="text-gray-300 hover:text-gold-400 transition-colors duration-200 py-2"
            >
              Women
            </Link>
            <Link 
              to="/products/accessories" 
              className="text-gray-300 hover:text-gold-400 transition-colors duration-200 py-2"
            >
              Accessories
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;