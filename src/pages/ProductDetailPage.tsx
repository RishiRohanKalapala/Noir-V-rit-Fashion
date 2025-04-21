import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Check } from 'lucide-react';
import { getProductById } from '../data/products';
import { formatCurrency } from '../utils/formatCurrency';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductGrid from '../components/product/ProductGrid';
import { getProductsByCategory } from '../data/products';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(parseInt(id || '0'));
  const navigate = useNavigate();
  
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<number>(0);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  
  // Get related products (from same category)
  const relatedProducts = product 
    ? getProductsByCategory(product.category)
        .filter(p => p.id !== product.id)
        .slice(0, 4) 
    : [];
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">Product Not Found</h2>
        <p className="text-gray-400 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <button 
          onClick={() => navigate('/products')}
          className="bg-gold-500 text-noir-950 font-bold px-6 py-2 rounded-md hover:bg-gold-600 transition-colors duration-200"
        >
          Back to Products
        </button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (!selectedSize) return;
    
    addToCart(product, quantity, selectedSize);
    setAddedToCart(true);
    
    // Reset added to cart status after 3 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };
  
  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <div className="relative aspect-[3/4] overflow-hidden bg-noir-900 rounded-lg mb-4">
            <img 
              src={product.images[activeImage]} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            
            {/* Tags */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.new && (
                <span className="bg-gold-500 text-noir-950 text-xs font-bold px-3 py-1 rounded">
                  NEW
                </span>
              )}
              {product.featured && (
                <span className="bg-noir-800/70 text-white text-xs font-bold px-3 py-1 rounded">
                  FEATURED
                </span>
              )}
            </div>
          </div>
          
          {/* Thumbnail Images */}
          <div className="flex gap-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-20 h-20 bg-noir-900 rounded-md overflow-hidden flex-shrink-0 transition-opacity ${
                  activeImage === index ? 'opacity-100 ring-2 ring-gold-500' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} - view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Details */}
        <div className="lg:w-1/2">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-semibold text-white mb-2">
              {product.name}
            </h1>
            <p className="text-gray-400 mb-4">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </p>
            <p className="text-2xl text-gold-500 font-bold mb-6">
              {formatCurrency(product.price)}
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              {product.description}
            </p>
          </div>
          
          {/* Size Selection */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white font-medium">Size</h3>
              <button className="text-gold-400 text-sm hover:text-gold-500 transition-colors duration-200">
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-10 min-w-10 px-3 rounded-md font-medium transition-colors duration-200 ${
                    selectedSize === size
                      ? 'bg-gold-500 text-noir-950'
                      : 'bg-noir-800 text-white hover:bg-noir-700'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {selectedSize === '' && (
              <p className="text-red-500 text-sm mt-2">Please select a size</p>
            )}
          </div>
          
          {/* Quantity Selection */}
          <div className="mb-8">
            <h3 className="text-white font-medium mb-2">Quantity</h3>
            <div className="flex items-center">
              <button
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="w-10 h-10 bg-noir-800 text-white hover:bg-noir-700 rounded-l-md flex items-center justify-center transition-colors duration-200"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="w-12 h-10 bg-noir-900 text-white flex items-center justify-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(prev => prev + 1)}
                className="w-10 h-10 bg-noir-800 text-white hover:bg-noir-700 rounded-r-md flex items-center justify-center transition-colors duration-200"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={handleAddToCart}
              disabled={selectedSize === ''}
              className={`flex-grow flex items-center justify-center gap-2 font-bold py-3 rounded-md transition-all duration-200 ${
                addedToCart
                  ? 'bg-green-600 text-white'
                  : selectedSize === ''
                  ? 'bg-noir-800 text-gray-400 cursor-not-allowed'
                  : 'bg-gold-500 text-noir-950 hover:bg-gold-600'
              }`}
            >
              {addedToCart ? (
                <>
                  <Check size={20} /> Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag size={20} /> Add to Cart
                </>
              )}
            </button>
            
            <button
              onClick={toggleWishlist}
              className={`flex items-center justify-center gap-2 font-medium py-3 px-8 rounded-md transition-colors duration-200 ${
                inWishlist
                  ? 'bg-noir-800 text-gold-500 border border-gold-500'
                  : 'bg-noir-800 text-white hover:bg-noir-700'
              }`}
            >
              <Heart size={20} fill={inWishlist ? "currentColor" : "none"} />
              {inWishlist ? 'Wishlisted' : 'Wishlist'}
            </button>
          </div>
          
          {/* Product Details Accordion */}
          <div className="border-t border-noir-800">
            <details className="group py-4 border-b border-noir-800">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-white font-medium">Details</span>
                <span className="text-gold-500 transition-transform group-open:rotate-180">
                  +
                </span>
              </summary>
              <div className="pt-4 text-gray-400">
                <p className="mb-2">
                  Our {product.name} is meticulously crafted for both style and comfort.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Premium quality materials</li>
                  <li>Expert tailoring and finishing</li>
                  <li>Designed in-house</li>
                  <li>Made with ethical manufacturing practices</li>
                </ul>
              </div>
            </details>
            
            <details className="group py-4 border-b border-noir-800">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-white font-medium">Shipping & Returns</span>
                <span className="text-gold-500 transition-transform group-open:rotate-180">
                  +
                </span>
              </summary>
              <div className="pt-4 text-gray-400">
                <p className="mb-2">
                  We offer free shipping on all orders above ₹10,000. Standard delivery takes 3-5 business days.
                </p>
                <p>
                  Returns are accepted within 14 days of delivery. Items must be unworn and in original packaging.
                </p>
              </div>
            </details>
            
            <details className="group py-4 border-b border-noir-800">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-white font-medium">Care Instructions</span>
                <span className="text-gold-500 transition-transform group-open:rotate-180">
                  +
                </span>
              </summary>
              <div className="pt-4 text-gray-400">
                <ul className="list-disc list-inside space-y-1">
                  <li>Dry clean only</li>
                  <li>Store in a cool, dry place</li>
                  <li>Handle with care to preserve quality</li>
                  <li>Refer to attached care label for specific instructions</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-display font-semibold text-white mb-8">
            You May Also Like
          </h2>
          <ProductGrid products={relatedProducts} />
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;