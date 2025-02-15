'use client'
import React from "react";
import { motion } from "framer-motion";


import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className=" bg-[#00040F] px-10 relative flex flex-col lg:flex-row items-center justify-between  py-20 text-white "
    style={{
      backgroundImage: "url('/Ellipse3.png')",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      
      {/* Left Side Content */}
      <motion.div className="max-w-lg ml-20 "
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
        {/* Discount Badge */}
        <div className="flex items-center justify-center w-72 sm:w-80 bg-gradient-to-b from-[#272727] to-[#11101D] px-3 py-2 rounded-full text-gray-300 text-xs sm:text-sm mb-4">
        <Image 
        src="/discount.png" 
        alt="Discount Badge" 
        width={170} 
        height={90} 
        className="h-6 w-96 object-contain"
      />
     
    </div>
   

    {/* Hero Heading Section */}
  <div className="relative flex flex-col lg:flex-row items-center  w-full">
  {/* Left Content (Text) */}
  {/* <div className=""> */}
    <h1 className="font-poppins font-semibold text-[72px]   leading-tight tracking-[1%]">
      The Next <br />
      <span className="bg-gradient-to-l from-[#DEF9FA] to-[#33BBCF] bg-clip-text text-transparent">
        Generation
      </span><br/>
      PaymentMethod.
    </h1>
  {/* </div> */}

  {/* CTA Button */}
  <div className="absolute top-2 right-6 lg:top-4 lg:right-10">
      <button className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary hover:opacity-80 hover:scale-105 transition-transform duration-300">
        <Image 
          src="/get.png" 
          alt="Get Started" 
          width={120} 
          height={80} 
          className="object-contain"
        />
      </button>
    </div>
</div>

      

        {/* Description */}
        <p className="text-white/70 font-poppins font-normal text-[18px] leading-[30.6px] tracking-[0%] mt-4">
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rates, annual fees.
        </p>

        
      </motion.div>

     
         <div className="absolute top-44 right-0 transform -translate-y-1/2 "
       >
  {/* Background with Radial Gradient */}
  <div className="relative bg-gradient-radial  from-gray-300 to-gray-500 rounded-3xl p-2"
    style={{
      backgroundImage: "url('/Vector16.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
    {/* Credit Cards Stack */}
    <div className="relative"
      style={{
        backgroundImage: "url('/Rechero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
       
      {/* Back Card */}
      <div className="absolute w-[30rem] transform rotate-12 translate-y-18 -translate-x-14 z-20">
        <Image src="/Group2.png" alt="Credit card" width={500}
            height={300}
            className="w-full h-full object-cover rounded-xl"/>
      </div>
      {/* Front Card */}
      <div className="rotate-12 w-[30rem] -translate-y-12 z-50">
        <Image src="/Group1.png" alt="Credit card" 
         width={500}
         height={300} className="w-full h-full object-cover rounded-xl" />
      </div>
      {/* Bottom Card */}
      <div className="absolute rotate-12 -translate-y-40 translate-x-1">
        <Image src="/Rectangle.png" alt="Credit card" 
        width={500}
        height={300} className="w-full h-full object-cover" />
      </div>
    </div>

    {/* Floating Circles */}
    <Image src="/circle1.png" alt=""  width={64}
        height={64}
        className="absolute top-0 -left-10 w-16 h-16 " />
    <Image src="/circle2.png" alt="" width={40}
        height={40}
        className="absolute bottom-0 right-10 w-10 h-10"  />
    <Image src="/circle3.png" alt=""
     width={24}
     height={24}
     className="absolute -bottom-5 left-6 w-6 h-6" />

    {/* Robot Hand */}
    <div className="absolute top-1/2 right-0 ">
      <Image 
        src="/robot.png" 
        alt="Robot hand" 
        width={1344}  
        height={900}  
        className="w-[40rem] md:w-[60rem] lg:w-[84rem] object-contain"
      />
    </div>
  </div>
</div>

     
      
     

      
    </section>
  );
};

export default Hero;
