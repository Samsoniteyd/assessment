"use client";
import React from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
import { Feature } from "@/types/index";

interface BusinessSectionProps {
  features: Feature[];
}

const BusinessSection: React.FC<BusinessSectionProps> = ({ features }) => {
  // Find the middle feature index
  const middleIndex = Math.floor(features.length / 2);

  return (
    <section className="relative bg-[#00040F] px-10 flex flex-col lg:flex-row items-center justify-between  py-20 text-white">
      {/* Left Side Content */}
      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="font-poppins font-semibold text-[48px] leading-[76.8px] tracking-[1%]">
        You do the business, we’ll handle the money.
        </h3>
        <p className="text-white/70 mt-4 font-poppins font-normal text-[18px] leading-[30.6px] tracking-[1%]">
          With the right credit card, you can improve your financial life by building credit, earning rewards, and saving money. 
          But with hundreds of credit cards on the market, it can be overwhelming.
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 font-poppins font-medium text-[18px] leading-[27px] tracking-[0%] bg-gradient-to-b from-[#DEF9FA] to-[#33BBCF] text-black rounded-lg"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Right Side - Features List */}
      <motion.div
        className="mt-10 lg:mt-0 space-y-6 w-full max-w-md"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className={`flex items-start space-x-4 p-6 rounded-xl transition-all duration-300 ${
              index === middleIndex ? "shadow-lg" : "bg-transparent"
            }`}
            style={
              index === middleIndex
                ? {
                    backgroundImage: "url('/Rectangle2.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {}
            }
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
          >
            {/* Icon Container */}
            <div className="flex items-center justify-center bg-gray-800 p-2 rounded-full">
              <img src={feature.icon} alt={feature.title} width={30} height={30} />
            </div>

            {/* Feature Content */}
            <div>
              <h3 className="font-poppins font-semibold text-[18px] leading-[23.4px] tracking-[1%]">{feature.title}</h3>
              <p className="text-white/70 font-poppins font-normal text-[16px] leading-[24px] tracking-[0%]">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BusinessSection;
