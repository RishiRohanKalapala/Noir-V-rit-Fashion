import React from 'react';
import { formatCurrency } from '../../utils/formatCurrency';
import { useCart } from '../../context/CartContext';

const OrderSummary: React.FC = () => {
  const { items, total } = useCart();
  
  // Calculate additional costs
  const subtotal = total;
  const shipping = subtotal > 0 ? (subtotal < 10000 ? 599 : 0) : 0;
  const tax = subtotal * 0.18; // 18% GST
  const orderTotal = subtotal + shipping + tax;

  return (
    <div className="bg-noir-900 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Order Summary</h3>
      
      {/* Items Summary */}
      <div className="max-h-60 overflow-y-auto mb-6">
        {items.map((item) => (
          <div key={`${item.product.id}-${item.size}`} className="flex justify-between items-center py-2 border-b border-noir-800 last:border-0">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-noir-800 rounded-md overflow-hidden mr-3">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white text-sm">{item.product.name}</p>
                <p className="text-gray-400 text-xs">Size: {item.size} | Qty: {item.quantity}</p>
              </div>
            </div>
            <span className="text-white text-sm font-medium">
              {formatCurrency(item.product.price * item.quantity)}
            </span>
          </div>
        ))}
      </div>
      
      {/* Cost Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-400">Subtotal</span>
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
      </div>
      
      {/* Divider */}
      <div className="border-t border-noir-800 my-4"></div>
      
      {/* Total */}
      <div className="flex justify-between items-center">
        <span className="text-white font-medium">Total</span>
        <span className="text-gold-500 text-xl font-bold">{formatCurrency(orderTotal)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;