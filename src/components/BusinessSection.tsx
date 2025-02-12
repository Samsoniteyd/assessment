import React from "react";
import Image from "next/image";
import { Feature } from "@/types";
// import { Feature } from "../types";


interface BusinessSectionProps {
  stats: { label: string; value: string }[];
  features: Feature[];
}

const BusinessSection: React.FC<BusinessSectionProps> = ({ stats, features }) => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-10 py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Left Side Content */}
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold leading-tight">
          You do the business, <br />
          <span className="text-primary">we’ll handle the money.</span>
        </h2>
        <p className="text-gray-400 mt-4">
          With the right credit card, you can improve your financial life by building credit, earning rewards, and saving money. 
          But with hundreds of credit cards on the market, it can be overwhelming.
        </p>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-primary text-black font-semibold rounded-full hover:opacity-80 transition">
          Get Started
        </button>
      </div>

      {/* Right Side - Features List */}
      <div className="mt-10 lg:mt-0 space-y-6">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-start space-x-4 bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex items-center justify-center bg-gray-700 p-2 rounded-full">
              <Image src={feature.icon} alt={feature.title} width={30} height={30} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessSection;
