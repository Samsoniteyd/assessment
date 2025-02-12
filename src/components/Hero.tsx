'use client'
import React from "react";


import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-10 py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Left Side Content */}
      <div className="max-w-lg">
        {/* Discount Badge */}
        <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full text-sm text-gray-300 mb-4">
          <span className="bg-blue-500 h-2 w-2 rounded-full"></span>
          <p>20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
        </div>

        {/* Hero Heading */}
        <h1 className="text-5xl font-bold leading-tight">
          The Next <br />
          <span className="text-primary">Generation</span> <br />
          Payment Method.
        </h1>

        {/* Description */}
        <p className="text-gray-400 mt-4">
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rates, annual fees.
        </p>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-primary text-black font-semibold rounded-full hover:opacity-80 transition">
          Get Started →
        </button>
      </div>

      {/* Right Side 3D Floating Elements */}
      <div className="relative mt-10 lg:mt-0">
        <div className="min-h-[500px] perspective-1000">
          {/* Floating Cards with Gradient and Glass Effect */}
          <div className="bg-gradient-to-r from-cyan-400/80 to-transparent backdrop-blur-sm rounded-xl w-[280px] h-[180px] absolute top-10 right-16 
              animate-float hover:rotate-y-12 transform transition-all duration-700 ease-in-out 
              shadow-xl border border-white/10">
            <div className="p-4">
              <div className="w-12 h-8 rounded-md bg-gray-200/20 mb-4"></div>
              <div className="space-y-2">
                <div className="w-32 h-4 rounded-full bg-gray-200/20"></div>
                <div className="w-24 h-4 rounded-full bg-gray-200/20"></div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-400/60 to-transparent backdrop-blur-sm rounded-xl w-[280px] h-[180px] absolute top-24 right-32 
              animate-float-delayed hover:rotate-y-12 transform transition-all duration-700 ease-in-out 
              shadow-xl border border-white/10">
            <div className="p-4">
              <div className="w-12 h-8 rounded-md bg-gray-200/20 mb-4"></div>
              <div className="space-y-2">
                <div className="w-32 h-4 rounded-full bg-gray-200/20"></div>
                <div className="w-24 h-4 rounded-full bg-gray-200/20"></div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-400/40 to-transparent backdrop-blur-sm rounded-xl w-[280px] h-[180px] absolute top-40 right-48 
              animate-float-slow hover:rotate-y-12 transform transition-all duration-700 ease-in-out 
              shadow-xl border border-white/10">
            <div className="p-4">
              <div className="w-12 h-8 rounded-md bg-gray-200/20 mb-4"></div>
              <div className="space-y-2">
                <div className="w-32 h-4 rounded-full bg-gray-200/20"></div>
                <div className="w-24 h-4 rounded-full bg-gray-200/20"></div>
              </div>
            </div>
          </div>

          {/* Floating Spheres */}
          <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-cyan-400/30 blur-sm animate-float"></div>
          <div className="absolute bottom-40 right-96 w-4 h-4 rounded-full bg-cyan-400/30 blur-sm animate-float-delayed"></div>
          <div className="absolute top-20 right-20 w-6 h-6 rounded-full bg-cyan-400/30 blur-sm animate-float-slow"></div>

          {/* Robot Hand */}
          <div className="mt-80">
            <Image 
              src="/robot.png" 
              alt="Robot" 
              width={200} 
              height={200} 
              className="absolute bottom-0 left-16 z-10 hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
