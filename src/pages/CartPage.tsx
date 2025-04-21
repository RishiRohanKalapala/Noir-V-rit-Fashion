import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

const CartPage: React.FC = () => {
  const { items, total, itemCount } = useCart();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-display font-semibold text-white mb-8">
        Shopping Cart
      </h1>
      
      {items.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-noir-900 rounded-lg p-6">
              {items.map((item) => (
                <CartItem
                  key={`${item.product.id}-${item.size}`}
                  id={item.product.id}
                  name={item.product.name}
                  price={item.product.price}
                  image={item.product.images[0]}
                  quantity={item.quantity}
                  size={item.size}
                />
              ))}
            </div>
            
            {/* Continue Shopping */}
            <div className="mt-6">
              <Link
                to="/products"
                className="inline-flex items-center text-gold-400 hover:text-gold-500 transition-colors duration-200"
              >
                <ArrowLeft size={18} className="mr-2" />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
          
          {/* Cart Summary */}
          <div className="lg:w-1/3">
            <CartSummary subtotal={total} itemCount={itemCount} />
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-noir-900 rounded-lg">
          <div className="flex justify-center mb-4">
            <ShoppingBag size={64} className="text-gray-500" />
          </div>
          <h2 className="text-2xl font-semibold text-white mb-2">Your cart is empty</h2>
          <p className="text-gray-400 mb-8">Add something to make me happy :)</p>
          <Link
            to="/products"
            className="bg-gold-500 text-noir-950 font-bold px-8 py-3 rounded-md hover:bg-gold-600 transition-colors duration-200"
          >
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;