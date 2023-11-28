import { useEffect, useState } from "react";

const PaymentCard = () => {
  const [paymentCard, setPaymentCard] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/manual")
      .then((response) => response.json())
      .then((data) => setPaymentCard(data))
      .catch((error) => console.error("Error fetching surveys:", error));
  }, []);
  console.log(paymentCard);
  return (
    <div>
      {paymentCard.map((payment) => (
        <div key={payment._id}>
          <h1>Price{payment.price}</h1>
          <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-purple-500 p-6 m-4">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-2">
            Become a Pro User
          </h3>
          <div className="text-4xl font-bold text-white mb-2">$39</div>
        </div>
        <button
          type="submit"
          className="w-full btn btn-outline btn-success mt-5"
        >
          Pro Now
        </button>
      </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentCard;
