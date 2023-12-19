import React from "react";
import Hero from "./Hero";
import NoticeSlide from "./NoticeSlide";
import LabServices from "./LabServices";
import LabTechs from "./LabTechs";
import Doctors from "./Doctors";

const HomePageStructure = () => {
  return (
    <section>
      <Hero />
      <NoticeSlide />
      <LabServices />
      <LabTechs />
      <Doctors />
    </section>
  );
};

export default HomePageStructure;
