import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ for navigation
import Title from '../components/Title';
import './PlaceOrder.css';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';

const PlaceOrder = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const navigate = useNavigate(); // ✅ hook to navigate

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handlePlaceOrder = () => {
    if (!selectedPaymentMethod) {
      alert('Please select a payment method');
      return;
    }
    // ✅ Navigate to /orders page
    navigate('/orders');
  };

  return (
    <div className='place-order-page-layout'>
      {/* Left: Delivery Form */}
      <div className='delivery-form-container'>
        <div className='delivery-title-wrapper'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} alignment="left" />
        </div>

        <div className='form-row'>
          <input className='form-input' type='text' placeholder='First name' />
          <input className='form-input' type='text' placeholder='Last name' />
        </div>

        <input className='form-input' type='email' placeholder='Email address' />
        <input className='form-input' type='text' placeholder='Street' />

        <div className='form-row'>
          <input className='form-input' type='text' placeholder='City' />
          <input className='form-input' type='text' placeholder='State' />
        </div>

        <div className='form-row'>
          <input className='form-input' type='number' placeholder='Zipcode' />
          <input className='form-input' type='text' placeholder='Country' />
        </div>

        <input className='form-input' type='number' placeholder='Phone' />
      </div>

      {/* Right: Cart & Paymentt */}
      <div className='right-column-wrapper'>
        <div className='cart-total-section-wrapper'>
          <CartTotal />
        </div>

        <div className='payment-method-section'>
          <div className='payment-method-title'>
            <Title text1={'PAYMENT'} text2={'METHOD'} />
          </div>

          <div className='payment-options-row'>
            {/* Stripe */}
            <label className='payment-option-box' htmlFor='stripe'>
              <input
                type='radio'
                id='stripe'
                name='paymentMethod'
                value='stripe'
                className='hidden-radio'
                checked={selectedPaymentMethod === 'stripe'}
                onChange={() => handlePaymentMethodChange('stripe')}
              />
              <div className='custom-radio-circle'></div>
              <img className='payment-option-logo' src={assets.stripe_logo} alt='Stripe' />
            </label>

            {/* Razorpay */}
            <label className='payment-option-box' htmlFor='razorpay'>
              <input
                type='radio'
                id='razorpay'
                name='paymentMethod'
                value='razorpay'
                className='hidden-radio'
                checked={selectedPaymentMethod === 'razorpay'}
                onChange={() => handlePaymentMethodChange('razorpay')}
              />
              <div className='custom-radio-circle'></div>
              <img className='payment-option-logo' src={assets.razorpay_logo} alt='Razorpay' />
            </label>

            {/* Cash on Delivery */}
            <label className='payment-option-box' htmlFor='cashOnDelivery'>
              <input
                type='radio'
                id='cashOnDelivery'
                name='paymentMethod'
                value='cashOnDelivery'
                className='hidden-radio'
                checked={selectedPaymentMethod === 'cashOnDelivery'}
                onChange={() => handlePaymentMethodChange('cashOnDelivery')}
              />
              <div className='custom-radio-circle'></div>
              <p className='payment-option-text'>CASH ON DELIVERY</p>
            </label>
          </div>

          {/* ✅ Place Order Button */}
          <button
            className="place-order-button"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
