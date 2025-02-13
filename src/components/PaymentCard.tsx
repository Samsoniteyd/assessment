"use client";
import React from "react";
// import Image from "next/image";

interface PaymentCardProps {
  balance: number;
}

const PaymentCard: React.FC<PaymentCardProps> = ({ balance }) => {
  return (
    <div
      className="relative w-72  rounded-xl shadow-lg p-5 bg-cover bg-center"
      style={{ backgroundImage: "url('/Rectangle2.png')" }} // Update with your image path
    >
      {/* PayPal Header */}
      <div className="flex items-center space-x-3">
        <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
          <img src="/paypal.png" alt="PayPal" className="w-6 h-6" />
        </div>

        <div>
          <h3 className="text-white font-semibold">Paypal</h3>
          <p className="text-gray-400 text-sm">Checkout</p>
        </div>
      </div>

      {/* Balance */}
      <div className="mt-4 flex justify-between items-center">
        <div>
          <p className="text-gray-400 text-sm">Total</p>
          <h2 className="text-white text-2xl font-bold">${balance}</h2>
        </div>
        <button className="border border-[#33BBCF] text-[#33BBCF] text-xs px-3 py-1 rounded-md transition hover:bg-[#33BBCF] hover:text-white">
          Change
        </button>
      </div>

      {/* Make Payment Button */}
      <div className="mt-5">
        <button className="bg-gradient-to-b from-[#DEF9FA] to-[#33BBCF] w-full text-black text-xs font-medium px-4 py-2 rounded-lg transition hover:opacity-90">
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentCard;
