import React from "react";
import Image from "next/image";
import hero1 from "/public/assets/images/about-hero-1.png";
import hero2 from "/public/assets/images/about-hero-2.png";
import { FaCircleCheck } from "react-icons/fa6";

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
              Since its founding we become an integral part of the city,
              advancing our mission of providing access to compassionate care to
              our communities. Today patients find care that combines
              world-class medicine with compassion.
            </p>
            <div className="mt-5">
              <span className="flex gap-2">
                <span>
                  <FaCircleCheck className="text-xl text-primary relative top-1" />
                </span>
                <p>
                  Unique HealthCare is a people centered environment – which
                  means you are at the center of everything we do and every
                  decision we make.
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
                  non-life threatening illnesses. Most patients are seen,
                  treated and released in about 60 minutes.
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
              No appointment needed, most patients are seen, treated and
              released in about 60 minutes. Certified and experienced MD
              physicians not nurses and on site diagnostic tests with lab.
            </p>
            <div className="mt-5 grid lg:grid-cols-2 gap-5">
              <span className="flex gap-2">
                <span>
                  <FaCircleCheck className="text-xl text-primary relative top-1" />
                </span>
                <p>Behavioral health</p>
              </span>
              <span className="flex gap-2">
                <span>
                  <FaCircleCheck className="text-xl text-primary relative top-1" />
                </span>
                <p>Earaches of infections</p>
              </span>
              <span className="flex gap-2">
                <span>
                  <FaCircleCheck className="text-xl text-primary relative top-1" />
                </span>
                <p>Broken bones</p>
              </span>
              <span className="flex gap-2">
                <span>
                  <FaCircleCheck className="text-xl text-primary relative top-1" />
                </span>
                <p> Minor burns</p>
              </span>
              <span className="flex gap-2">
                <span>
                  <FaCircleCheck className="text-xl text-primary relative top-1" />
                </span>
                <p>Minor cuts and wounds</p>
              </span>
              <span className="flex gap-2">
                <span>
                  <FaCircleCheck className="text-xl text-primary relative top-1" />
                </span>
                <p>Urinary tract infections</p>
              </span>
              <span className="flex gap-2">
                <span>
                  <FaCircleCheck className="text-xl text-primary relative top-1" />
                </span>
                <p>Upset stomach</p>
              </span>
              <span className="flex gap-2">
                <span>
                  <FaCircleCheck className="text-xl text-primary relative top-1" />
                </span>
                <p>Flue and more…</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMainStructure;
