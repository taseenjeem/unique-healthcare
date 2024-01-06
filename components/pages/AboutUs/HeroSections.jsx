import React from "react";
import Image from "next/image";
import hero1 from "/public/assets/images/about-hero-1.png";
import hero2 from "/public/assets/images/about-hero-2.png";
import { FaCircleCheck } from "react-icons/fa6";

const HeroSections = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 my-20">
        <div className="relative w-full lg:w-1/2 overflow-hidden mx-auto">
          <Image
            src={hero1}
            alt="Doctors Image"
            width={500}
            height={380}
            className="object-cover rounded-lg shadow-xl mx-auto"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h4 className="capitalize md:text-3xl text-xl font-semibold mb-5 text-primary">
            Unique HealthCare holds the privilege of being world&apos;s first
            choice hospital and pathology center.
          </h4>
          <p>
            Since its founding we become an integral part of the city, advancing
            our mission of providing access to compassionate care to our
            communities. Today patients find care that combines world-class
            medicine with compassion.
          </p>
          <div className="mt-5">
            <span className="flex gap-2">
              <span>
                <FaCircleCheck className="text-xl text-primary relative top-1" />
              </span>
              <p>
                Unique HealthCare is a people centered environment – which means
                you are at the center of everything we do and every decision we
                make.
              </p>
            </span>
            <span className="flex gap-2 my-4">
              <span>
                <FaCircleCheck className="text-xl text-primary relative top-1" />
              </span>
              <p>
                We are your partner for health, helping your live well by
                bringing the best in medicine and healthcare to your door.
              </p>
            </span>
            <span className="flex gap-2">
              <span>
                <FaCircleCheck className="text-xl text-primary relative top-1" />
              </span>
              <p>
                We provide fast, effective and affordable immediate care for
                non-life threatening illnesses. Most patients are seen, treated
                and released in about 60 minutes.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-5 my-20">
        <div className="relative w-full lg:w-1/2 overflow-hidden mx-auto">
          <Image
            src={hero2}
            alt="Doctors Image"
            width={500}
            height={380}
            className="object-cover rounded-lg shadow-xl mx-auto"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h4 className="capitalize md:text-3xl text-xl font-semibold mb-5 text-primary">
            Unique HealthCare Immediate Care Facilities Provide Quick Care and
            Relief
          </h4>
          <p>
            No appointment needed, most patients are seen, treated and released
            in about 60 minutes. Certified and experienced MD physicians not
            nurses and on site diagnostic tests with lab.
          </p>
          <div className="mt-5 flex flex-wrap gap-5">
            <span className="flex gap-2 border-2 border-primary p-2 rounded-full">
              <span>
                <FaCircleCheck className="text-xl text-primary relative top-[2px]" />
              </span>
              <p>Behavioral health</p>
            </span>
            <span className="flex gap-2 border-2 border-primary p-2 rounded-full">
              <span>
                <FaCircleCheck className="text-xl text-primary relative top-[2px]" />
              </span>
              <p>Earaches of infections</p>
            </span>
            <span className="flex gap-2 border-2 border-primary p-2 rounded-full">
              <span>
                <FaCircleCheck className="text-xl text-primary relative top-[2px]" />
              </span>
              <p>Emergency Unit</p>
            </span>
            <span className="flex gap-2 border-2 border-primary p-2 rounded-full">
              <span>
                <FaCircleCheck className="text-xl text-primary relative top-[2px]" />
              </span>
              <p>Broken bones</p>
            </span>
            <span className="flex gap-2 border-2 border-primary p-2 rounded-full">
              <span>
                <FaCircleCheck className="text-xl text-primary relative top-[2px]" />
              </span>
              <p> Minor burns</p>
            </span>
            <span className="flex gap-2 border-2 border-primary p-2 rounded-full">
              <span>
                <FaCircleCheck className="text-xl text-primary relative top-[2px]" />
              </span>
              <p>Minor cuts and wounds</p>
            </span>
            <span className="flex gap-2 border-2 border-primary p-2 rounded-full">
              <span>
                <FaCircleCheck className="text-xl text-primary relative top-[2px]" />
              </span>
              <p>Urinary tract infections</p>
            </span>
            <span className="flex gap-2 border-2 border-primary p-2 rounded-full">
              <span>
                <FaCircleCheck className="text-xl text-primary relative top-[2px]" />
              </span>
              <p>Upset stomach</p>
            </span>
            <span className="flex gap-2 border-2 border-primary p-2 rounded-full">
              <span>
                <FaCircleCheck className="text-xl text-primary relative top-[2px]" />
              </span>
              <p>Flue and more…</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSections;
