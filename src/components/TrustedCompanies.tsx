"use client";

import React from "react";
import { motion } from "framer-motion";

const companyLogos = ["/airbnb.png", "/binance.png", "/coinbase.png", "/dropbox.png"];

const TrustedCompanies: React.FC = () => {
  return (
    <motion.section
      className="py-20 bg-[#00040F] px-10  text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Logos Grid */}
      <div className="flex  flex-wrap justify-center gap-14">
        {companyLogos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt="Company Logo"
            className="h-10 opacity-75 hover:opacity-100 transition transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default TrustedCompanies;
