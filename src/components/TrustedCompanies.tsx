import React from "react";

const companyLogos = ["/airbnb.png", "/binance.png", "/coinbase.png", "/dropbox.png"];

const TrustedCompanies: React.FC = () => {
  return (
    <section className="py-10 px-10 bg-black text-white">
      <div className="flex flex-wrap justify-center gap-8">
        {companyLogos.map((logo, index) => (
          <img key={index} src={logo} alt="Company Logo" className="h-10 opacity-75 hover:opacity-100 transition" />
        ))}
      </div>
    </section>
  );
};

export default TrustedCompanies;
