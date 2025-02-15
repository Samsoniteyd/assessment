"use client";
import React from "react";
import Image from "next/image";

const SuccessMessage: React.FC = () => {
  return (
    <div className="absolute  left-80 w-full -bottom-4 transform -translate-x-1/2 bg-white text-gray-900 px-2 py-2  rounded-lg shadow-lg font-medium flex items-center space-x-2 text-xs">
      <span className="text-green-500">
        <Image src="/maps.png" alt="" />
      </span>
      <p>Great! Your Payment is successfully.</p>
    </div>
  );
};

export default SuccessMessage;
