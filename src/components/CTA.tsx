import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-16 px-10 text-white text-center rounded-lg mx-6">
      <h2 className="text-3xl font-bold">Let's try our service now!</h2>
      <p className="text-gray-300 mt-2">
        Everything you need to accept card payments and grow your business anywhere on the planet.
      </p>
      <button className="mt-6 px-6 py-3 bg-primary text-black font-semibold rounded-full hover:opacity-80 transition">
        Get Started
      </button>
    </section>
  );
};

export default CTA;
