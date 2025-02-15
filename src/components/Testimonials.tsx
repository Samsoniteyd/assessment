"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Harman Jansen",
    role: "Founder & Leader",
    image: "/Image1.png",
  },
  {
    id: 2,
    quote:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    role: "Founder & Leader",
    image: "/Image2.png",
  },
  {
    id: 3,
    quote:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Karen Gallagher",
    role: "Investor",
    image: "/Image3.png",
  },
];

const Testimonials: React.FC = () => {
  return (
    <motion.section
      className="relative py-20 px-10 mx-auto  text-white
                 bg-[#00040F] bg-[url('/rec.png')] bg-no-repeat 
                 bg-right-bottom bg-contain "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{  amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Heading */}
      <motion.div
        className="flex ml-20 flex-col md:flex-row justify-between items-start md:items-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{  amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <h2 className="font-poppins font-semibold text-[40px] md:text-[48px] leading-tight">
          What people are <br className="hidden md:block" /> saying about us
        </h2>
        <p className="text-white/80 font-poppins text-[18px] leading-[30px] mt-6 md:mt-0">
          Everything you need to accept card payments <br className="hidden md:block" />
          and grow your business anywhere on the planet.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="mt-12 ml-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className={`p-8 rounded-xl backdrop-blur-md 
                        transition-transform duration-300 transform hover:scale-105 ${
              index === 0 ? "bg-white/10" : ""
            }`}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{  amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
          >
              <Image 
                src="/apro.png" 
                alt="Quote Icon" 
                width={32}  // Matches w-8 (8 * 4 = 32px)
                height={32} // Matches h-8 (8 * 4 = 32px)
                className="w-8 h-8 object-contain"
              />          
                <p className="text-white/90 mt-6 font-poppins text-[18px] leading-[32px] italic">
              “{testimonial.quote}”
            </p>
            <div className="flex items-center mt-8">
                          <Image 
                src={testimonial.image} 
                alt={testimonial.name} 
                width={48}  // Matches w-12 (12 * 4 = 48px)
                height={48} // Matches h-12 (12 * 4 = 48px)
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-white/70 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
