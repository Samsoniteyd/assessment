"use client";
import React from "react";
// import Image from "next/image";

interface PaymentMethod {
  id: number;
  name: string;
  logo: string;
}

interface PayMethodProps {
  methods: PaymentMethod[];
}

const PayMethod: React.FC<PayMethodProps> = ({ methods }) => {
  return (
    <div className="relative w-44  bg-cover bg-center bg-no-repeat py-4 px-2 rounded-xl shadow-lg text-white"
    style={{ backgroundImage: "url('/Rectangle2.png')" }}  >
        <div className="flex justify-between">
        <h3 className="font-poppins font-semibold text-[16px] leading-[25.6px] tracking-[1%] text-center">Pay Method</h3>
        <span> <img src="/arrow_drop_down.png" alt="" /> </span>

        </div>
      <div className="flex items-center gap-2 mt-1">
        {methods.map((method) => (
          <div key={method.id} className="bg-white p-2 rounded-lg flex items-center justify-center">
            <img src={method.logo} alt={method.name} width={20} height={20} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayMethod;
