import Image from "next/image";
import React from "react";

const PoweredBy = () => {
  const logos = [
    "/assets/icons/medical-comp/hologic-logo.svg",
    "/assets/icons/medical-comp/terumo-1.svg",
    "/assets/icons/medical-comp/zimmer-biomet-logo.svg",
    "/assets/icons/medical-comp/3m-2.svg",
    "/assets/icons/medical-comp/fresenius-medical-care-1.svg",
    "/assets/icons/medical-comp/baxter-3.svg",
  ];

  return (
    <section className="wrapper min-h-[60vh]">
      <span className="relative flex justify-center mb-3">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"></div>

        <span className="relative z-10 bg-accent px-6 font-semibold text-primary">
          Powered By
        </span>
      </span>
      <h3 className="md:text-4xl text-2xl font-bold text-center capitalize">
        Top medical companies are
        <br className="hidden lg:block" /> working with us
      </h3>

      <div className="flex flex-wrap items-center justify-evenly gap-10 my-20">
        {logos.map((item, index) => (
          <Image
            key={index}
            src={item}
            width={160}
            height={160}
            alt="Company Logo"
          />
        ))}
      </div>
    </section>
  );
};

export default PoweredBy;
