import React from "react";
import Hero from "./Hero";
import NoticeSlide from "./NoticeSlide";
import LabServices from "./LabServices";
import LabTechs from "./LabTechs";

const HomePageStructure = () => {
  return (
    <section>
      <Hero />
      <NoticeSlide />
      <LabServices />
      <LabTechs />
    </section>
  );
};

export default HomePageStructure;
