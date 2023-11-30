import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  // eslint-disable-next-line no-unused-vars
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(AuthContext);
  console.log(user);
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
        const response = await fetch(
          "https://survey-server-mu.vercel.app/create-payment-intent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
          }
        );
        const result = await response.json();
        console.log("result", result);
        const formattedClientSecret = `${result.clientSecret}`;
        setClientSecret(formattedClientSecret);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have become a Pro user",
          showConfirmButton: false,
          timer: 1500,
        });
        const { paymentIntent, error: cardError } =
          await stripe.confirmCardPayment(formattedClientSecret, {
            payment_method: {
              card: cardElement,
              billing_details: {
                email: user?.email || "anonymous",
                name: user?.displayName || "anonymous",
              },
            },
          });
        console.log(user.email);
        if (cardError) {
          console.log("confirm card", cardError);
        } else {
          console.log("payment intent", paymentIntent);
          if (paymentIntent.status === "succeeded") {
            fetch(`https://survey-server-mu.vercel.app/users?email=${user.email}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({}),
            })
              .then((response) => response.json())
              .then((data) => console.log(data));

            const payment = {
              email: user.email,
              transactionId: paymentIntent.id,
              date: new Date(),
              status: "pending",
            };
            console.log("success");
            try {
              const response = await fetch("https://survey-server-mu.vercel.app/payments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payment),
              });
              const data = await response.json();
              console.log("payment saved", data);
            } catch (error) {
              console.error("Error saving payment", error);
            }
          }
        }
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
        <button
          type="submit"
          className="w-full btn btn-outline btn-success mt-5"
        >
          Pro Now
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
