// Frontend: CheckoutForm.js
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      try {
        const response = await fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ paymentMethodId: paymentMethod.id }), // Send the paymentMethod.id
        });

        const result = await response.json();
      console.log(result);
        
        // Display success message if the payment is successful
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have become a Pro user",
          showConfirmButton: false,
          timer: 1500,
        });

        console.log("Payment successful! Deduct the balance on your server.",paymentMethod);
      } catch (error) {
        console.error("Error processing payment on the server:", error);
      }
    }
  };

  return (
    <form onSubmit={handlePayment}>
      <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-purple-500 p-6 m-4">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-2">
            Become a Pro User
          </h3>
          <div className="text-4xl font-bold text-white mb-2">$39</div>
        </div>
        <div className="mt-4">
          <label className="block text-white">Card Details</label>
          <CardElement className="border p-2 rounded bg-white" />
        </div>
        <button type="submit" className="w-full btn btn-outline btn-success mt-5">
          Pro Now
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
