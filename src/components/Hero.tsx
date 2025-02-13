'use client'
import React from "react";


// import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className=" bg-[#00040F] px-10 relative flex flex-col lg:flex-row items-center justify-between  py-20 text-white "
  >
      {/* Left Side Content */}
      <div className="max-w-lg ">
        {/* Discount Badge */}
        <div className="flex items-center w-60 bg-gradient-to-b from-[#272727] to-[#11101D] px-1 py-1 rounded-full text-sm text-gray-300 mb-4 justify-center">
         
         <img src="/discount.png" alt="" className="h-4" />
        </div>
{/* console.log('Hero component rendered'); */}
    {/* Hero Heading Section */}
<div className="flex flex-col lg:flex-row items-center justify-between w-full">
  {/* Left Content (Text) */}
  <div className="max-w-xl">
    <h1 className="font-poppins font-semibold text-[48px]  lg:text-[64px] leading-tight tracking-[1%]">
      The Next <br />
      <span className="bg-gradient-to-l from-[#DEF9FA] to-[#33BBCF] bg-clip-text text-transparent">
        Generation
      </span>
      <br />
      Payment Method.
    </h1>
  </div>

  {/* CTA Button */}
  <div className="mt-8 lg:mt-0">
    <button className="flex items-center justify-center w-24 h-24 rounded-full bg-primary hover:opacity-80 hover:scale-105 transition-transform">
      <img src="/get.png" alt="Get Started" className="w-14 h-14 object-contain" />
    </button>
  </div>
</div>

      

        {/* Description */}
        <p className="text-white/70 font-poppins font-normal text-[18px] leading-[30.6px] tracking-[0%] mt-4">
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rates, annual fees.
        </p>

        
      </div>

     
      
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
  {/* Background with Radial Gradient */}
  <div className="relative bg-gradient-radial z-20 from-gray-300 to-gray-500 rounded-3xl p-2">
    {/* Credit Cards Stack */}
    <div className="relative">
      {/* Back Card */}
      <div className="absolute transform rotate-12 translate-y-18 -translate-x-14 z-20">
        <img src="/Group2.png" alt="Credit card" className="w-full h-full object-cover rounded-xl" />
      </div>
      {/* Front Card */}
      <div className="rotate-12 -translate-y-12 z-50">
        <img src="/Group1.png" alt="Credit card" className="w-full h-full object-cover rounded-xl" />
      </div>
      {/* Bottom Card */}
      <div className="absolute rotate-12 -translate-y-40 translate-x-1">
        <img src="/Rectangle.png" alt="Credit card" className="w-full h-full object-cover" />
      </div>
    </div>

    {/* Floating Circles */}
    <img src="/circle1.png" alt="" className="absolute top-0 -left-10" />
    <img src="/circle2.png" alt="" className="absolute bottom-0 right-3" />
    <img src="/circle3.png" alt="" className="absolute -bottom-20 left-6 w-4 h-4" />

    {/* Robot Hand */}
    <div className="absolute top-1/2 right-0 transform">
      <img src="/robot.png" alt="Robot hand" className="w-[84rem]" />
    </div>
  </div>
</div>

      
    </section>
  );
};

export default Hero;
