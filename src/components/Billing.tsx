"use client";
import React from "react";
import { motion } from "framer-motion";
import PaymentCard from "./PaymentCard";
import TransactionList from "./TransactionList";
import SuccessMessage from "./SuccessMessage";
import Image from "next/image";


const transactions = [
  { id: 1, name: "Dribbble Pro", logo: "/dribble.png", date: "15 Days ago", amount: "250.83", isNegative: true },
  { id: 2, name: "Netflix", logo: "/Netflix.png", date: "4 Days ago", amount: "250.83", isNegative: true },
  { id: 3, name: "Manulife Cash", logo: "/manu.png", date: "4 Days ago", amount: "250.83", isNegative: false },
];

const Billing: React.FC = () => {
  return (
    <section className="flex bg-[#00040F] px-10 flex-col lg:flex-row items-center justify-between    bg-no-repeat 
    bg-left-bottom bg-cover overflow-hidden  py-2 text-white"
    style={{
      backgroundImage: "url('/Ellipse3.png')",
      backgroundSize: "contain",
      backgroundPosition: "left center",
      backgroundRepeat: "no-repeat",
    }}>
      {/* Left Side  */}
      <motion.div 
        className="relative ml-20 flex flex-col items-center space-y-10 min-h-screen py-20"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{  amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative">
          {/* Payment Card */}
          <motion.div 
            className="absolute -top-16 left-48 transform -translate-x-1/2 z-10"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{  amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <PaymentCard balance={210} />
          </motion.div>

          {/* Transaction List */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{  amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <TransactionList transactions={transactions} />
          </motion.div>

          {/* Success Message */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{  amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <SuccessMessage />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side  */}
      <motion.div 
        className="max-w-lg lg:ml-16 mt-10 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{  amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <h2 className="font-poppins font-semibold text-[48px] leading-[76.8px] tracking-[1%]">
          Easily control your <br />
          <span className="">billing & invoicing.</span>
        </h2>
        <p className="text-white/70 font-poppins font-normal text-[18px] leading-[28.8px] tracking-[1%]">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliquet.
        </p>

        {/* App Store Buttons */}
        <div className="mt-6 flex space-x-4">
          <Image src="/appstore.png" alt="App Store" width={150} height={50} />
          <Image src="/googleplay.png" alt="Google Play" width={150} height={50} />
        </div>
      </motion.div>
    </section>
  );
};

export default Billing;
