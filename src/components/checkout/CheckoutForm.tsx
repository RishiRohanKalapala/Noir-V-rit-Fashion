import React from 'react';
import { useForm } from 'react-hook-form';
import { CheckoutFormData } from '../../types/product';

interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormData) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    defaultValues: {
      paymentMethod: 'card',
    },
  });

  const paymentMethod = watch('paymentMethod');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Contact Information */}
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-400 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              className={`w-full bg-noir-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 ${
                errors.firstName ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-gold-500'
              }`}
              {...register('firstName', { required: 'First name is required' })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-400 mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              className={`w-full bg-noir-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 ${
                errors.lastName ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-gold-500'
              }`}
              {...register('lastName', { required: 'Last name is required' })}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-400 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              className={`w-full bg-noir-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 ${
                errors.email ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-gold-500'
              }`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-400 mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              className={`w-full bg-noir-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 ${
                errors.phone ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-gold-500'
              }`}
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: 'Please enter a valid Indian phone number',
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Shipping Address */}
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Shipping Address</h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="address" className="block text-gray-400 mb-1">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              id="address"
              type="text"
              className={`w-full bg-noir-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 ${
                errors.address ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-gold-500'
              }`}
              {...register('address', { required: 'Address is required' })}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="city" className="block text-gray-400 mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <input
                id="city"
                type="text"
                className={`w-full bg-noir-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 ${
                  errors.city ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-gold-500'
                }`}
                {...register('city', { required: 'City is required' })}
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="state" className="block text-gray-400 mb-1">
                State <span className="text-red-500">*</span>
              </label>
              <select
                id="state"
                className={`w-full bg-noir-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 ${
                  errors.state ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-gold-500'
                }`}
                {...register('state', { required: 'State is required' })}
              >
                <option value="">Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Delhi">Delhi</option>
              </select>
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-gray-400 mb-1">
                PIN Code <span className="text-red-500">*</span>
              </label>
              <input
                id="zipCode"
                type="text"
                className={`w-full bg-noir-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 ${
                  errors.zipCode ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-gold-500'
                }`}
                {...register('zipCode', {
                  required: 'PIN Code is required',
                  pattern: {
                    value: /^[1-9][0-9]{5}$/,
                    message: 'Please enter a valid 6-digit PIN code',
                  },
                })}
              />
              {errors.zipCode && (
                <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Payment Method</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                id="card"
                type="radio"
                value="card"
                className="hidden"
                {...register('paymentMethod')}
              />
              <label
                htmlFor="card"
                className={`flex items-center cursor-pointer py-2 px-4 rounded-md ${
                  paymentMethod === 'card' ? 'bg-gold-500 text-noir-950' : 'bg-noir-800 text-white'
                }`}
              >
                <span
                  className={`inline-block w-4 h-4 mr-2 rounded-full border ${
                    paymentMethod === 'card'
                      ? 'border-noir-950 bg-noir-950'
                      : 'border-gray-400'
                  }`}
                />
                Credit/Debit Card
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="upi"
                type="radio"
                value="upi"
                className="hidden"
                {...register('paymentMethod')}
              />
              <label
                htmlFor="upi"
                className={`flex items-center cursor-pointer py-2 px-4 rounded-md ${
                  paymentMethod === 'upi' ? 'bg-gold-500 text-noir-950' : 'bg-noir-800 text-white'
                }`}
              >
                <span
                  className={`inline-block w-4 h-4 mr-2 rounded-full border ${
                    paymentMethod === 'upi'
                      ? 'border-noir-950 bg-noir-950'
                      : 'border-gray-400'
                  }`}
                />
                UPI
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="cod"
                type="radio"
                value="cod"
                className="hidden"
                {...register('paymentMethod')}
              />
              <label
                htmlFor="cod"
                className={`flex items-center cursor-pointer py-2 px-4 rounded-md ${
                  paymentMethod === 'cod' ? 'bg-gold-500 text-noir-950' : 'bg-noir-800 text-white'
                }`}
              >
                <span
                  className={`inline-block w-4 h-4 mr-2 rounded-full border ${
                    paymentMethod === 'cod'
                      ? 'border-noir-950 bg-noir-950'
                      : 'border-gray-400'
                  }`}
                />
                Cash on Delivery
              </label>
            </div>
          </div>

          {/* Card Payment Fields */}
          {paymentMethod === 'card' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="md:col-span-2">
                <label htmlFor="cardNumber" className="block text-gray-400 mb-1">
                  Card Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className={`w-full bg-noir-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 ${
                    errors.cardNumber ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-gold-500'
                  }`}
                  {...register('cardNumber', {
                    required: paymentMethod === 'card' ? 'Card number is required' : false,
                    pattern: {
                      value: /^[0-9]{16}$/,
                      message: 'Please enter a valid 16-digit card number',
                    },
                  })}
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="cardName" className="block text-gray-400 mb-1">
                  Name on Card <span className="text-red-500">*</span>
                </label>
                <input
                  id="cardName"
                  type="text"
                  className={`w-full bg-noir-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 ${
                    errors.cardName ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-gold-500'
                  }`}
                  {...register('cardName', {
                    required: paymentMethod === 'card' ? 'Name on card is required' : false,
                  })}
                />
                {errors.cardName && (
                  <p className="text-red-500 text-sm mt-1">{errors.cardName.message}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiration" className="block text-gray-400 mb-1">
                    Expiry Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="expiration"
                    type="text"
                    placeholder="MM/YY"
                    className={`w-full bg-noir-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 ${
                      errors.expiration ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-gold-500'
                    }`}
                    {...register('expiration', {
                      required: paymentMethod === 'card' ? 'Expiration date is required' : false,
                      pattern: {
                        value: /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
                        message: 'Please enter a valid date (MM/YY)',
                      },
                    })}
                  />
                  {errors.expiration && (
                    <p className="text-red-500 text-sm mt-1">{errors.expiration.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-gray-400 mb-1">
                    CVV <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="cvv"
                    type="text"
                    className={`w-full bg-noir-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 ${
                      errors.cvv ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-gold-500'
                    }`}
                    {...register('cvv', {
                      required: paymentMethod === 'card' ? 'CVV is required' : false,
                      pattern: {
                        value: /^[0-9]{3,4}$/,
                        message: 'Please enter a valid CVV',
                      },
                    })}
                  />
                  {errors.cvv && (
                    <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* UPI Payment Fields */}
          {paymentMethod === 'upi' && (
            <div className="mt-4">
              <label htmlFor="upiId" className="block text-gray-400 mb-1">
                UPI ID <span className="text-red-500">*</span>
              </label>
              <input
                id="upiId"
                type="text"
                placeholder="username@upi"
                className={`w-full bg-noir-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 ${
                  errors.upiId ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-gold-500'
                }`}
                {...register('upiId', {
                  required: paymentMethod === 'upi' ? 'UPI ID is required' : false,
                  pattern: {
                    value: /^[a-zA-Z0-9.\-_]{3,}@[a-zA-Z]{3,}$/,
                    message: 'Please enter a valid UPI ID',
                  },
                })}
              />
              {errors.upiId && (
                <p className="text-red-500 text-sm mt-1">{errors.upiId.message}</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gold-500 text-noir-950 font-bold py-3 rounded-md hover:bg-gold-600 transition-colors duration-200"
      >
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;