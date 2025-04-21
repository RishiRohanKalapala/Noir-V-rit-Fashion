import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import { getFeaturedProducts, getNewProducts } from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg"
            alt="Noir Vérité Fashion"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir-950 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
            Embrace the <span className="text-gold-400">Darkness</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Discover the elegance of truth through our premium collection of sophisticated, bold designs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="bg-gold-500 text-noir-950 font-bold px-8 py-3 rounded-md hover:bg-gold-600 transition-colors duration-200"
            >
              Shop Now
            </Link>
            <Link
              to="/products/new"
              className="border border-white text-white font-medium px-8 py-3 rounded-md hover:bg-white/10 transition-colors duration-200"
            >
              New Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-noir-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-semibold text-white text-center mb-12">
            Explore Our Collections
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Men's Category */}
            <div className="relative overflow-hidden rounded-lg group h-96">
              <img
                src="https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg"
                alt="Men's Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-medium mb-2">Men's Collection</h3>
                <Link
                  to="/products/mens"
                  className="flex items-center text-gold-400 hover:text-gold-500 transition-colors duration-200"
                >
                  <span>Explore</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Women's Category */}
            <div className="relative overflow-hidden rounded-lg group h-96">
              <img
                src="https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg"
                alt="Women's Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-medium mb-2">Women's Collection</h3>
                <Link
                  to="/products/womens"
                  className="flex items-center text-gold-400 hover:text-gold-500 transition-colors duration-200"
                >
                  <span>Explore</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Accessories Category */}
            <div className="relative overflow-hidden rounded-lg group h-96">
              <img
                src="https://images.pexels.com/photos/9771988/pexels-photo-9771988.jpeg"
                alt="Accessories Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-medium mb-2">Accessories</h3>
                <Link
                  to="/products/accessories"
                  className="flex items-center text-gold-400 hover:text-gold-500 transition-colors duration-200"
                >
                  <span>Explore</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gradient-to-b from-noir-950 to-noir-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-display font-semibold text-white">
              Featured Products
            </h2>
            <Link
              to="/products"
              className="flex items-center text-gold-400 hover:text-gold-500 transition-colors duration-200"
            >
              <span>View All</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 bg-noir-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/5935738/pexels-photo-5935738.jpeg"
                alt="Noir Vérité Brand Story"
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-display font-semibold text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded with a passion for bold elegance, Noir Vérité emerges from the belief that truth resides in darkness.
                Our designs embody sophistication, quality, and a distinct character that transcends fleeting trends.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Each piece in our collection tells a story of meticulous craftsmanship and uncompromising attention to detail.
                We source the finest materials globally, ensuring that every garment not only looks exceptional but feels extraordinary.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-gold-400 hover:text-gold-500 transition-colors duration-200"
              >
                <span>Discover Our Journey</span>
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-noir-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-display font-semibold text-white">
              New Arrivals
            </h2>
            <Link
              to="/products/new"
              className="flex items-center text-gold-400 hover:text-gold-500 transition-colors duration-200"
            >
              <span>View All</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <ProductGrid products={newProducts} />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-b from-noir-900 to-noir-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-semibold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and style inspiration.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow bg-noir-800 text-white border border-noir-700 rounded-l-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
            />
            <button className="bg-gold-500 text-noir-950 font-bold px-6 py-3 rounded-r-md hover:bg-gold-600 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;