"use client";
import React from "react";
// import Image from "next/image";

interface Transaction {
  id: number;
  name: string;
  logo: string;
  date: string;
  amount: string;
  isNegative: boolean;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="relative w-72 bg-cover bg-center bg-no-repeatp-2  rounded-xl shadow-lg p-5 mt-10"
    style={{ backgroundImage: "url('/Rectangle2.png')" }}>
      <h3 className="text-white font-semibold mb-3">Last Transaction</h3>

      {transactions.map((transaction) => {
        // Apply different background styles based on transaction name
        let logoBgClass = ""; // Default background
        if (transaction.name.toLowerCase().includes("netflix")) {
          logoBgClass = "bg-white";
        } else if (transaction.name.toLowerCase().includes("manulife")) {
          logoBgClass = "bg-green-200";
        }

        return (
          <div key={transaction.id} className="flex items-center justify-between py-3">
            {/* Logo & Name */}
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 ${logoBgClass} flex items-center justify-center rounded-full`}>
                <img src={transaction.logo} alt={transaction.name} width={20} height={20} className="object-contain" />
              </div>
              <div>
                <h4 className="text-white text-sm">{transaction.name}</h4>
                <p className="text-gray-400 text-xs">{transaction.date}</p>
              </div>
            </div>

            {/* Amount & Arrow Icon */}
            <div className="flex items-center space-x-2">
              <img
                src={transaction.isNegative ? "/Polygon3.png" : "/Polygon4.png"} // Replace with your actual up/down icons
                alt={transaction.isNegative ? "Down" : "Up"}
                width={15}
                height={15}
              />
              <p className={`${transaction.isNegative ? "" : ""} font-semibold`}>
                ${transaction.amount}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionList;
