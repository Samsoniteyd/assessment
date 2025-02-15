"use client";
import React from "react";
import { motion } from "framer-motion";
import ScanCreditCard from "./ScanCreditCard";
import OnlineAnalysis from "./OnlineAnalysis";
import PayMethod from "./PayMethod";

const Dashboard: React.FC = () => {
  const analysisData = {
    income: "2,334.67",
    expenses: "5.13M",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    currentMonth: "Mar",
  };

  const paymentMethods = [
    { id: 1, name: "PayPal", logo: "/paypal.png" },
    { id: 2, name: "Apple Pay", logo: "/apple.png" },
    { id: 3, name: "Visa", logo: "/visa.png" },
    { id: 4, name: "Shopify", logo: "/Shopify.png" },
  ];

  return (
    <motion.div
      className="relative flex items-center  justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{  amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Circles */}
      <motion.div
        className="absolute w-80 h-80 border-8 border-[#023d44] rounded-full"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>
      <motion.div
        className="absolute w-56 h-56 border-4 border-[#023d44] rounded-full"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      ></motion.div>
      <motion.div
        className="absolute w-32 h-32 border-4 border-[#023d44] rounded-full"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      ></motion.div>

      {/* Floating Components with Overlapping Effect */}
      <div className="relative flex flex-col items-center space-y-5">
        {/* Scan Credit Card */}
        <motion.div
          className="absolute -top-20 right-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <ScanCreditCard />
        </motion.div>

        {/* Online Analysis */}
        <motion.div
          className="absolute -top-32 left-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <OnlineAnalysis data={analysisData} />
        </motion.div>

        {/* Pay Methods */}
        <motion.div
          className="absolute top-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <PayMethod methods={paymentMethods} />
        </motion.div>
      </div>
    </motion.div>
    
  );
};

export default Dashboard;
