
import  { useState, useEffect } from "react";
const ManagePayment = () => {
  const [Payments, setPayments] = useState([]);

  const fetchPayments = async () => {
    try {
      const response = await fetch("http://localhost:5000/payments");
      const data = await response.json();
      setPayments(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    fetchPayments();
  }, []); 
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Payments By Pro Users</h2>
        <h2 className="text-3xl">Total Users: {Payments.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>TransactionId</th>  
              <th>Email</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {Payments.map((payment) => (
              <tr key={payment._id}>
                <th>{payment.transactionId}</th>
                <td>{payment.email}</td>
                <td>{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePayment;
