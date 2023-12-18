import React from "react";
import heroImage from "/public/assets/images/doctors.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse py-5 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image
          width={1152}
          height={768}
          src={heroImage}
          alt="Doctors"
          className="object-cover w-full h-full rounded-lg md:rounded-none"
        />
      </div>
      <div className="relative flex flex-col items-start w-full wrapper">
        <div className="lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 headings text-3xl font-bold tracking-tight sm:text-4xl sm:leading-snug">
            Advancing Health, One Diagnosis at a Time!
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-base">
            Unique Pathology is a leading medical center dedicated to precise
            diagnostics and patient care in Sherpur, Bangladesh. Our expert team
            merges cutting-edge technology with compassionate service, ensuring
            accurate assessments and personalized attention for every
            individual, prioritizing their health and well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
