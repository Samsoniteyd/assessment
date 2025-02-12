import React from "react";

const testimonials = [
  {
    id: 1,
    quote: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Harman Jansen",
    role: "Founder & Leader",
    image: "/user1.png",
  },
  {
    id: 2,
    quote: "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    role: "Founder & Leader",
    image: "/user2.png",
  },
  {
    id: 3,
    quote: "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Karen Gallagher",
    role: "Investor",
    image: "/user3.png",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-10 bg-darkBg text-white">
      <h2 className="text-3xl font-bold text-center">What people are saying about us</h2>
      <p className="text-gray-400 text-center mt-2">Everything you need to accept card payments and grow your business.</p>

      {/* Testimonials Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-300">“{testimonial.quote}”</p>
            <div className="flex items-center mt-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full mr-3" />
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
