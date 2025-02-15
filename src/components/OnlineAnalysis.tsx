"use client";
import React from "react";
import Image from "next/image";

interface AnalysisData {
  income: string;
  expenses: string;
  months: string[];
  currentMonth: string;
}

interface OnlineAnalysisProps {
  data: AnalysisData;
}

const OnlineAnalysis: React.FC<OnlineAnalysisProps> = ({ data }) => {
  return (
    <div className="relative   bg-cover bg-center bg-no-repeat p-3 rounded-xl shadow-lg text-white"
    style={{ backgroundImage: "url('/Rectangle2.png')" }}>
        <div className=" flex items-center justify-between">
        <h3 className="font-poppins font-semibold text-[16px] leading-[25.6px] tracking-[1%] text-center">Online Analysis</h3>
        <div className="flex gap-1  items-center gap-x-1">

        <p className="font-poppins font-normal text-[10px] leading-[13px] tracking-[0%] text-white/70">1 Month</p><span> <img src="/arrow_drop_down.png" alt="" /></span>

        </div>
      

        </div>
      

      {/* Income & Expenses */}
      <div className="flex justify-between mt-1">
        <p className="text-[#00D2AA] text-xs font-semibold">${data.income} <br /> Income</p>
        <p className="text-[#00D9F5] text-xs font-semibold">${data.expenses} <br /> Expenses</p>
      </div>

      {/* Simple Line Chart Representation */}
      <div className="mt-1  flex items-center justify-center">
      <div className="flex items-center">
      <Image 
        src="/line3.png" 
        alt="Line Decoration" 
        width={100}  
        height={10}  
        className="w-auto h-4 object-contain"
      />
    </div>
      </div>

      {/* Months Navigation */}
      <div className="flex  mt-1 text-gray-400 text-xs">
        {data.months.map((month) => (
          <span
            key={month}
            className={`px-2 py-1 rounded-md ${
              month === data.currentMonth ? "bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-black" : ""
            }`}
          >
            {month}
          </span>
        ))}
      </div>
    </div>
  );
};

export default OnlineAnalysis;
