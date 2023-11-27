
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    // Get the payment method from the card element
    const cardElement = elements.getElement(CardElement);

    // Create a PaymentMethod
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      // Handle successful payment, you can send the paymentMethod.id to your server
      console.log('PaymentMethod:', paymentMethod);
      // Call your server to handle the payment and deduct the balance
      // Replace the following with your server-side logic to handle the payment
      // For example, you can use fetch to send the payment information to your server

      // fetch('/your-server-endpoint', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
      // })
      //   .then(response => response.json())
      //   .then(result => {
      //     // Handle server response (e.g., update UI, show success message)
      //     console.log(result);
      //   });

      // For now, let's just log a message
      console.log('Payment successful! Deduct the balance on your server.');
    }
  };
  return (
    <form onSubmit={handlePayment}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-purple-500 p-6 m-4">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Become a Pro User</h3>
          <div className="text-4xl font-bold mb-2">$58</div>
          <p className="text-gray-700">per month</p>
        </div>
        <div className="mt-4">
          <label className="block text-white">Card Details</label>
          <CardElement className="border p-2 rounded bg-white" />
        </div>
        <button
          type="submit"
          className="w-full mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline">
          Buy Now
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
