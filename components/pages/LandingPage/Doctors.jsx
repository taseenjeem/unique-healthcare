import React from "react";

const Doctors = () => {
  return (
    <section className="md:my-20 my-10 wrapper">
      <span className="relative flex justify-center mb-3">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

        <span className="relative z-10 bg-accent px-6 font-semibold text-primary">
          Meet Our Experts
        </span>
      </span>
      <h3 className="md:text-4xl text-2xl font-bold text-center">
        Most Skilled & Experienced
        <br />
        Doctors In Our Country
      </h3>
    </section>
  );
};

export default Doctors;
