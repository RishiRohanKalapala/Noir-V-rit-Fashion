import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import CheckoutForm from '../components/checkout/CheckoutForm';
import OrderSummary from '../components/checkout/OrderSummary';
import { useCart } from '../context/CartContext';
import { CheckoutFormData } from '../types/product';

const CheckoutPage: React.FC = () => {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderDetails, setOrderDetails] = useState<CheckoutFormData | null>(null);

  // Handle form submission
  const handleCheckout = (data: CheckoutFormData) => {
    // In a real app, this would send data to a payment processor and backend
    console.log('Order submitted:', data);
    
    // Simulate order processing
    setIsOrdered(true);
    setOrderDetails(data);
    clearCart();
    
    // In a real app, this would be after successful payment
    window.scrollTo(0, 0);
  };

  // Redirect to products if cart is empty and not after successful order
  if (items.length === 0 && !isOrdered) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center py-16 bg-noir-900 rounded-lg">
          <h2 className="text-2xl font-semibold text-white mb-2">Your cart is empty</h2>
          <p className="text-gray-400 mb-8">Add products to your cart before proceeding to checkout</p>
          <Link
            to="/products"
            className="bg-gold-500 text-noir-950 font-bold px-8 py-3 rounded-md hover:bg-gold-600 transition-colors duration-200"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  // Order success screen
  if (isOrdered) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center bg-noir-900 rounded-lg p-8">
          <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-white" />
          </div>
          <h1 className="text-3xl font-display font-semibold text-white mb-4">
            Order Confirmed!
          </h1>
          <p className="text-gray-300 mb-8">
            Thank you for your purchase, {orderDetails?.firstName}. Your order has been received and is being processed.
          </p>
          
          <div className="bg-noir-800 rounded-lg p-6 mb-8 text-left">
            <h3 className="text-xl font-medium text-white mb-4">Order Details</h3>
            <div className="space-y-3 text-gray-300">
              <p><span className="text-gray-400">Order ID:</span> NV{Math.floor(Math.random() * 100000)}</p>
              <p><span className="text-gray-400">Date:</span> {new Date().toLocaleDateString()}</p>
              <p><span className="text-gray-400">Shipping Address:</span> {orderDetails?.address}, {orderDetails?.city}, {orderDetails?.state} - {orderDetails?.zipCode}</p>
              <p><span className="text-gray-400">Payment Method:</span> {orderDetails?.paymentMethod === 'card' ? 'Credit/Debit Card' : orderDetails?.paymentMethod === 'upi' ? 'UPI' : 'Cash on Delivery'}</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-gold-500 text-noir-950 font-bold px-8 py-3 rounded-md hover:bg-gold-600 transition-colors duration-200"
            >
              Back to Home
            </Link>
            <button
              onClick={() => navigate('/products')}
              className="bg-noir-800 text-white font-medium px-8 py-3 rounded-md hover:bg-noir-700 transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-display font-semibold text-white mb-2">
        Checkout
      </h1>
      <div className="mb-8">
        <Link
          to="/cart"
          className="inline-flex items-center text-gold-400 hover:text-gold-500 transition-colors duration-200"
        >
          <ArrowLeft size={18} className="mr-2" />
          <span>Back to Cart</span>
        </Link>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Checkout Form */}
        <div className="lg:w-2/3">
          <div className="bg-noir-900 rounded-lg p-6">
            <CheckoutForm onSubmit={handleCheckout} />
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;