"use client";

import React from "react";
import { motion } from "framer-motion";

interface Statistic {
  id: number;
  value: string;
  label: string;
}

interface StatisticsProps {
  stats: Statistic[];
}

const Statistics: React.FC<StatisticsProps> = ({ stats }) => {
  return (
    <motion.div
      className="flex bg-[#00040F] px-10w-full flex-wrap items-center justify-center  gap-20  py-20 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          className="flex items-center space-x-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
        >
          {/* Number Value */}
          <h3 className="font-poppins font-semibold text-[40.89px] leading-[53.16px] tracking-[0px]">{stat.value}</h3>

          {/* Gradient Text */}
          <div className="flex gap-10">

         
          <p className="uppercase  bg-gradient-to-r from-[#33BBCF] to-[#DEF9FA] bg-clip-text text-transparent font-poppins font-normal text-[20.45px] leading-[26.58px] tracking-[0px]">
            {stat.label}
          </p>

          {/* Separator (Hidden on small screens) */}
          {index < stats.length - 1 && (
            <span className="hidden lg:block text-gray-600 ">|</span>
          )}
           </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Statistics;
