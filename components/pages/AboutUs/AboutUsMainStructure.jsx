import React from "react";
import Image from "next/image";
import hero1 from "/public/assets/images/about-hero-1.png";
import hero2 from "/public/assets/images/about-hero-2.png";
import {
  FaCircleCheck,
  FaHandHoldingMedical,
  FaHandHoldingHeart,
  FaHandshakeAngle,
} from "react-icons/fa6";
import { GrUserExpert, GrTechnology } from "react-icons/gr";
import { MdHealthAndSafety } from "react-icons/md";

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

        <span className="relative flex justify-center mb-3">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"></div>

          <span className="relative z-10 bg-accent px-6 font-semibold text-primary md:text-4xl text-2xl">
            Why Choose Us
          </span>
        </span>
        <div className="flex justify-center">
          <div className="max-w-xl">
            <p className="text-center">
              It is the people who make Unique HealthCare what it is and we are
              extremely proud of the achievements of our staff. We all work
              together to help our patients through recovery, providing the best
              possible care.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 my-10 lg:my-20">
          <div className="bg-neutral p-5 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-16 h-16 rounded-full bg-primary flex justify-center items-center">
                <GrUserExpert className="text-3xl text-white" />
              </span>
              <h3 className="text-xl lg:text-2xl mb-3 font-semibold text-primary">
                Expertise
              </h3>
            </div>
            <div>
              <p>
                We boast a team of highly skilled professionals, including
                doctors, nurses, and technicians, renowned for their expertise
                and commitment to delivering exceptional medical care and
                accurate diagnostics.
              </p>
            </div>
          </div>
          <div className="bg-neutral p-5 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-16 h-16 rounded-full bg-primary flex justify-center items-center">
                <GrTechnology className="text-3xl text-white" />
              </span>
              <h3 className="text-xl lg:text-2xl mb-3 font-semibold text-primary">
                Advanced Technology
              </h3>
            </div>
            <div>
              <p>
                Our institution is equipped with cutting-edge medical technology
                and state-of-the-art facilities, ensuring that our patients
                receive the most advanced treatments and precise diagnostic
                services available.
              </p>
            </div>
          </div>
          <div className="bg-neutral p-5 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-16 h-16 rounded-full bg-primary flex justify-center items-center">
                <FaHandHoldingHeart className="text-3xl text-white" />
              </span>
              <h3 className="text-xl lg:text-2xl mb-3 font-semibold text-primary">
                Patient-Centered Care
              </h3>
            </div>
            <div>
              <p>
                We prioritize our patients&apos; well-being, offering
                personalized healthcare solutions tailored to individual needs.
                Our focus on patient comfort, support, and involvement in
                decision-making sets us apart.
              </p>
            </div>
          </div>
          <div className="bg-neutral p-5 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-16 h-16 rounded-full bg-primary flex justify-center items-center">
                <FaHandHoldingMedical className="text-3xl text-white" />
              </span>
              <h3 className="text-xl lg:text-2xl mb-3 font-semibold text-primary">
                Comprehensive Services
              </h3>
            </div>
            <div>
              <p>
                From diagnostics to treatments, we offer a wide range of medical
                services under one roof, providing convenience and comprehensive
                care for various healthcare needs.
              </p>
            </div>
          </div>
          <div className="bg-neutral p-5 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-16 h-16 rounded-full bg-primary flex justify-center items-center">
                <MdHealthAndSafety className="text-3xl text-white" />
              </span>
              <h3 className="text-xl lg:text-2xl mb-3 font-semibold text-primary">
                Commitment to Quality
              </h3>
            </div>
            <div>
              <p>
                Quality is at the core of everything we do. We maintain
                stringent standards in medical care, safety protocols, and
                service delivery to ensure the highest level of quality and
                patient satisfaction.
              </p>
            </div>
          </div>
          <div className="bg-neutral p-5 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-16 h-16 rounded-full bg-primary flex justify-center items-center">
                <FaHandshakeAngle className="text-3xl text-white" />
              </span>
              <h3 className="text-xl lg:text-2xl mb-3 font-semibold text-primary">
                Innovative Approach
              </h3>
            </div>
            <div>
              <p>
                Embracing innovation, we continually explore and adopt the
                latest advancements in healthcare, ensuring our patients benefit
                from progressive treatments and methodologies, staying at the
                forefront of medical advancements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMainStructure;
