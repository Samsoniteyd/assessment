import React from "react";
// import { FaPaypal } from "react-icons/fa";

const transactions = [
  { id: 1, name: "Dribbble Pro", daysAgo: "10 days ago", amount: "-$250.83", color: "text-red-500" },
  { id: 2, name: "Netflix", daysAgo: "4 days ago", amount: "-$250.83", color: "text-red-500" },
  { id: 3, name: "Manulife Cash", daysAgo: "4 days ago", amount: "+$250.83", color: "text-green-500" },
];

const TransactionCard: React.FC = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-80">
      {/* Paypal Checkout Card */}
      <div className="bg-gray-800 p-5 rounded-lg mb-5">
        <div className="flex items-center justify-between">
          {/* <FaPaypal className="text-blue-500 text-2xl" /> */}
          <button className="text-sm text-blue-400 border border-blue-400 px-2 py-1 rounded-md hover:bg-blue-500 hover:text-white transition">
            Change
          </button>
        </div>
        <p className="text-white mt-2">Total</p>
        <h2 className="text-white text-2xl font-bold">$210</h2>
        <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          Make Payment
        </button>
      </div>

      {/* Last Transactions */}
      <h3 className="text-white text-lg mb-3">Last Transaction</h3>
      <div className="space-y-3">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex justify-between items-center bg-gray-800 p-3 rounded-md">
            <p className="text-white">{tx.name}</p>
            <span className={`${tx.color} font-bold`}>{tx.amount}</span>
          </div>
        ))}
      </div>

      {/* Payment Success Message */}
      <div className="mt-5 bg-white text-green-500 px-4 py-2 rounded-md">
        ✅ Great! Your Payment is successful.
      </div>
    </div>
  );
};

export default TransactionCard;
