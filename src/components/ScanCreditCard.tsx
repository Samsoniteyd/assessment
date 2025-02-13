"use client";
import React from "react";
// import Image from "next/image";

const ScanCreditCard: React.FC = () => {
  return (
    <div className="relative w-40  bg-cover bg-center bg-no-repeat p-4 rounded-xl shadow-lg flex flex-col items-center text-white"
    style={{ backgroundImage: "url('/Rectangle2.png')" }}>
      <div className="bg-[#00030C] p-1 rounded-lg flex items-center justify-center mb-2">
        <img src="/Scan.png" alt="Scan Icon" width={20} height={20} />
      </div>
      <h3 className="text-xs font-semibold">Scan Credit Cards</h3>
      <p className="text-gray-400 text-xs text-center">Scan your credit card in 4 minutes.</p>
    </div>
  );
};

export default ScanCreditCard;
