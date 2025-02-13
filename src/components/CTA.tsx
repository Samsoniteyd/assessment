"use client"

import React from "react";

const CTA: React.FC = () => {
  return (
    // <section className="py-16 bg-[#00040F] px-10 ">
    // <img src="/Group48.png" alt="" />
    // </section>
    // bg-gradient-to-b from-[#141414] to-[#0F0F1A]

    <section className="bg-[#00040F] text-white px-10 py-20 mx-auto">
    {/* CTA Container */}
    <div
      className="px-10 ml-40 py-20 flex justify-between items-center rounded-xl bg-cover bg-center"
      style={{
        backgroundImage: "url('/Rectangle3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Content */}
      <div className="ml-20">
        <h2 className="font-poppins font-semibold text-[48px] leading-[67.2px] tracking-[0%]">
          Let’s try our service now!
        </h2>
        <p className="text-white/70 font-poppins font-normal text-[18px] leading-[28.8px] tracking-[1%] mt-2">
          Everything you need to accept card payments <br />
          and grow your business anywhere on the planet.
        </p>
      </div>
  
      {/* Right Button */}
      <button className="px-6 py-3 mt-6 font-poppins font-medium text-[18px] leading-[27px] text-black rounded-lg bg-gradient-to-b from-[#DEF9FA] to-[#33BBCF] hover:opacity-80 transition">
        Get Started
      </button>
    </div>
  </section>
  );
};

export default CTA;
