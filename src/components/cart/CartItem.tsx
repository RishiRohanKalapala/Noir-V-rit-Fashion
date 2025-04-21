import React from 'react';
import { Trash, Plus, Minus } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, image, quantity, size }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-6 border-b border-noir-800">
      {/* Product Image */}
      <div className="w-full sm:w-20 h-24 bg-noir-900 rounded-md overflow-hidden mb-4 sm:mb-0 sm:mr-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-grow mb-4 sm:mb-0">
        <Link 
          to={`/product/${id}`}
          className="text-white font-medium hover:text-gold-400 transition-colors duration-200"
        >
          {name}
        </Link>
        <p className="text-gray-400 text-sm mt-1">Size: {size}</p>
        <p className="text-gold-500 font-medium mt-1">{formatCurrency(price)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center border border-noir-700 rounded-md overflow-hidden mr-4">
        <button
          onClick={() => handleQuantityChange(quantity - 1)}
          className="px-2 py-1 bg-noir-800 text-white hover:bg-noir-700 transition-colors duration-200"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        <span className="px-4 py-1 bg-noir-900 text-white">{quantity}</span>
        <button
          onClick={() => handleQuantityChange(quantity + 1)}
          className="px-2 py-1 bg-noir-800 text-white hover:bg-noir-700 transition-colors duration-200"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(id)}
        className="text-gray-400 hover:text-red-500 transition-colors duration-200"
        aria-label="Remove item"
      >
        <Trash size={18} />
      </button>
    </div>
  );
};

export default CartItem;