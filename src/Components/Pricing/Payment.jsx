import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('import.meta.env.VITE_Payment_Gateway_PK');
const Payment = () => {
    return (
        <div>
            <h1 className="text-4xl text-center -mt-20 font-bold">Plans & pricing for everyone</h1>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;