import React from "react";

const CardDeal: React.FC = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-10 py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Left Content */}
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold">
          Find a better card deal in <br />
          <span className="text-primary">few easy steps.</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet
          ultrices ac, ametau.
        </p>
        <button className="mt-6 px-6 py-3 bg-primary text-black font-semibold rounded-full hover:opacity-80 transition">
          Get Started
        </button>
      </div>

      {/* Right Content - Mockup Card */}
      <div className="relative mt-10 lg:mt-0">
        <img src="/card-mockup.png" alt="Card Mockup" className="w-[400px]" />
      </div>
    </section>
  );
};

export default CardDeal;
