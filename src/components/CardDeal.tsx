"use client";

import React from "react";
import { motion } from "framer-motion";
import Dashboard from "./Dashboard";

const CardDeal: React.FC = () => {
  return (
    <section
      className="relative bg-[#00040F] text-white w-full  mx-auto px-6 lg:px-10 py-20 flex flex-col lg:flex-row items-center justify-between"
      style={{
        backgroundImage: "url('/Ellipse3.png')",
        backgroundSize: "contain",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Side */}
      <motion.div
        className="max-w-xl text-center ml-20 lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-poppins font-semibold  text-[40px] md:text-[48px] leading-tight">
          Find a better card deal in{" "}
          <span className="text-gradient">few easy steps.</span>
        </h2>
        <p className="text-white/70 font-poppins font-normal text-[16px] md:text-[18px] leading-[30px] mt-4">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
        </p>

        {/* Animated Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 font-poppins font-medium text-[18px] leading-[27px] tracking-[0%] text-black rounded-lg bg-gradient-to-b from-[#DEF9FA] to-[#33BBCF]"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="relative w-full max-w-md lg:max-w-lg mt-10 lg:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <Dashboard />
      </motion.div>
    </section>
  );
};

export default CardDeal;
