"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const companyLogos = ["/airbnb.png", "/binance.png", "/coinbase.png", "/dropbox.png"];

const TrustedCompanies: React.FC = () => {
  return (
    <motion.section
      className="py-20 bg-[#00040F] px-10  text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{  amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Logos Grid */}
      <div className="flex  flex-wrap justify-center gap-14">
        {companyLogos.map((logo, index) => (
          <Image
          key={index}
          src={logo}
          alt="Company Logo"
          width={160} // Adjust width as needed
          height={40} // Matches h-10 (10 * 4 = 40px)
          className="h-10 w-auto opacity-75 hover:opacity-100 transition-transform hover:scale-105 object-contain"
        />
         
        ))}
      </div>
    </motion.section>
  );
};

export default TrustedCompanies;
