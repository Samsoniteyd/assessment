"use client";

import React from "react";


const Fuut: React.FC = () => {
  return (
    <section className="py-20 px-10 max-w-screen-lg text-white">
     {/* Right Side 3D Floating Elements */}
     <div className="relative mt-10 lg:mt-0"
      >
        <div className="">
          {/* Floating Cards with Gradient and Glass Effect */}
          {/* bg-gradient-to-r from-cyan-400/80 to-transparent backdrop-blur-sm rounded-xl w-[280px] h-[180px]  absolute top-10 right-16 
              animate-float hover:rotate-y-12 transform transition-all duration-700 ease-in-out 
              shadow-xl border border-white/10 */}
              <div className="bg-cover bg-center bg-no-repeat "
              style={{ backgroundImage: "url('/Vector16.png')" }}>
              <img src="/Group1.png" alt="" className="w-72" />
              <img src="/Group2.png" alt=""  className="w-60 h-20" />
              <img src="/Rectangle.png" alt="" className="w-60 h-20"  />
            
              </div>
        
          {/* Floating Spheres */}
          {/* <div className="absolute top-0 right-70 w-8 h-8 rounded-full  bg-gradient-to-l from-[#DEF9FA] to-[#33BBCF] "></div>
          <div className="absolute bottom-1 right-60 w-4 h-4 rounded-full bg-gradient-to-l from-[#DEF9FA] to-[#33BBCF]  "></div>
          <div className="absolute top-0 right-20 w-6 h-6 rounded-full bg-gradient-to-l from-[#DEF9FA] to-[#33BBCF] "></div> */}
          
          <img src="/circle1.png" alt=""  className="absolute top-0 right-70"/>
          <img src="/circle2.png" alt="" className="absolute top-0 right-20" />
          <img src="/circle3.png" alt="" className="absolute bottom-1 right-60 w-4 h-4 " />



          {/* Robot Hand */}
          <div className="mt-40">
            <img 
              src="/robot.png" 
              alt="Robot" 
             
              className="absolute bottom-0 left-0 z-10 w-full " 
            />
          </div>
          
        </div>
      </div>

      <img src="/Group24.png" alt="" />





      <div className="absolute top-1/2 right-20 transform -translate-y-1/2">
            {/* <!-- Credit cards stack --> */}
            <div className="relative">
                {/* <!-- Back card --> */}
                <div className="absolute transform rotate-12 translate-y-18 -translate-x-14 z-20">
                    <img src="/Group2.png" alt="Credit card" className="w-full h-full object-cover rounded-xl"/>
                </div>
                {/* <!-- Front card --> */}
                <div className="rotate-12 -translate-y-12 z-50">
                    <img src="/Group1.png" alt="Credit card" className="w-full h-full object-cover rounded-xl"/>
                </div>
                {/* <!-- Bottom card --> */}
                <div className="absolute rotate-12 -translate-y-40 translate-x-1">
                    <img src="/Rectangle.png" alt="Credit card" className="w-full h-full object-cover"/>
                </div>
            </div>
            <img src="/circle1.png" alt=""  className="absolute top-0 -left-16"/>
          <img src="/circle2.png" alt="" className="absolute  bottom-0 right-3" />
          <img src="/circle3.png" alt="" className="absolute -bottom-20 left-6 w-4 h-4 " />
            
            {/* <!-- Robot hand --> */}
            <div className="absolute  top-1/2 right-0 transform ">
                <img src="/robot.png" alt="Robot hand" className="w-[84rem]"/>
            </div>
        </div>
    </section>
  );
};

export default Fuut;
