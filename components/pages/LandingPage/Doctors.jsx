import Image from "next/image";
import React from "react";
import heroImg from "/public/assets/images/doctors-hero-image.png";

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

      <div className="flex items-center justify-center gap-5">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={heroImg}
            alt="Doctors Image"
            width={500}
            height={380}
            className="object-cover"
          />
        </div>
        <div>
          <h4></h4>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
