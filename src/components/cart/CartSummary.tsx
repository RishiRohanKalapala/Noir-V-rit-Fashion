import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';

interface CartSummaryProps {
  subtotal: number;
  itemCount: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal, itemCount }) => {
  // Calculate additional costs
  const shipping = subtotal > 0 ? (subtotal < 10000 ? 599 : 0) : 0;
  const tax = subtotal * 0.18; // 18% GST
  
  const total = useMemo(() => {
    return subtotal + shipping + tax;
  }, [subtotal, shipping, tax]);

  return (
    <div className="bg-noir-900 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Order Summary</h2>
      
      {/* Summary Items */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-400">Subtotal ({itemCount} items)</span>
          <span className="text-white">{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Shipping</span>
          {shipping === 0 ? (
            <span className="text-green-500">Free</span>
          ) : (
            <span className="text-white">{formatCurrency(shipping)}</span>
          )}
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Tax (18% GST)</span>
          <span className="text-white">{formatCurrency(tax)}</span>
        </div>
        
        {shipping > 0 && (
          <div className="text-xs text-gold-500 mt-2">
            Free shipping on orders over ₹10,000
          </div>
        )}
      </div>
      
      {/* Divider */}
      <div className="border-t border-noir-800 my-4"></div>
      
      {/* Total */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-white font-medium">Total</span>
        <span className="text-gold-500 text-xl font-bold">{formatCurrency(total)}</span>
      </div>
      
      {/* Checkout Button */}
      <Link
        to="/checkout"
        className={`block w-full bg-gold-500 text-noir-950 font-bold text-center py-3 rounded-md hover:bg-gold-600 transition-colors duration-200 ${
          subtotal === 0 ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
        }`}
      >
        Proceed to Checkout
      </Link>
      
      {/* Continue Shopping Link */}
      <Link
        to="/products"
        className="block text-center mt-4 text-gold-400 hover:text-gold-500 transition-colors duration-200"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartSummary;