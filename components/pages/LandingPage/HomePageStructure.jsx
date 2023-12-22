import React from "react";
import Hero from "./Hero";
import NoticeSlide from "./NoticeSlide";
import LabServices from "./LabServices";
import LabTechs from "./LabTechs";
import Doctors from "./Doctors";
import CTA from "./CTA";
import Testimonial from "./Testimonial";

const HomePageStructure = () => {
  return (
    <section>
      <Hero />
      <NoticeSlide />
      <LabServices />
      <LabTechs />
      <Doctors />
      <Testimonial />
      <CTA />
    </section>
  );
};

export default HomePageStructure;
