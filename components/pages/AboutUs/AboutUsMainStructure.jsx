import React from "react";

import HeroSections from "./HeroSections";
import WhyChooseUs from "./WhyChooseUs";
import Testimonial from "../LandingPage/Testimonial";

const AboutUsMainStructure = () => {
  return (
    <section>
      <div className="w-full h-[500px] bg-[url('/assets/images/doctors-bg.jpg')] bg-no-repeat bg-cover bg-center relative">
        <div className="w-full h-full absolute top-0 bg-primary opacity-60 flex flex-col justify-center items-center px-4 lg:px-0">
          <h1 className="lg:text-5xl text-4xl uppercase text-white font-bold">
            Who are we?
          </h1>
          <p className="text-white max-w-xl text-center mt-5">
            Unique HealthCare is a leading hospital and pathology institution
            dedicated to exemplary medical care and precise diagnostics. Our
            commitment lies in providing personalized healthcare solutions
            through advanced technology and compassionate expertise. With a
            focus on patient well-being, our skilled team of professionals
            ensures exceptional standards, fostering trust and integrity. At
            Unique HealthCare, we redefine healthcare norms, prioritizing
            comprehensive wellness and innovative treatments, making a profound
            impact on each individual&apos;s journey towards health and
            recovery.
          </p>
        </div>
      </div>
      <div className="wrapper">
        <HeroSections />
        <WhyChooseUs />
        <Testimonial />
      </div>
    </section>
  );
};

export default AboutUsMainStructure;
