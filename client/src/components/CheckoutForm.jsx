import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log('[error]', error);
      setLoading(false);
    } else {
      // Handle successful payment here
      console.log('[PaymentMethod]', paymentMethod);
      // You can send paymentMethod.id to your server for further processing
      alert('Payment successful!');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Card Details</label>
        <CardElement className="border p-4 rounded-md" />
      </div>
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
      >
        {loading ? 'Processing...' : `Pay ₹${totalPrice}`}
      </button>
    </form>
  );
};

export default CheckoutForm;
