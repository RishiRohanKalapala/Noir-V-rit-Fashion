import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '../../types/product';
import { formatCurrency } from '../../utils/formatCurrency';
import { useWishlist } from '../../context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="relative overflow-hidden bg-noir-900 rounded-lg transition-all duration-300 hover:shadow-xl">
        {/* Product Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Wishlist Button */}
          <button 
            onClick={toggleWishlist}
            className={`absolute top-4 right-4 p-2 rounded-full ${
              isWishlisted ? 'bg-gold-500 text-noir-950' : 'bg-noir-800/70 text-white'
            } transition-all duration-300 hover:scale-110`}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
          
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
        
        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-white font-medium mb-1 group-hover:text-gold-400 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-gray-400 text-sm mb-2">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </p>
          <p className="text-gold-500 font-bold">
            {formatCurrency(product.price)}
          </p>
        </div>
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-noir-950/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 pointer-events-none">
          <span className="bg-gold-500 text-noir-950 font-bold px-4 py-2 rounded transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;