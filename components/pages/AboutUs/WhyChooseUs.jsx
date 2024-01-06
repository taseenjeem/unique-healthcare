import React from "react";
import {
  FaHandHoldingMedical,
  FaHandHoldingHeart,
  FaHandshakeAngle,
} from "react-icons/fa6";
import { GrUserExpert, GrTechnology } from "react-icons/gr";
import { MdHealthAndSafety } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <div>
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
              doctors, nurses, and technicians, renowned for their expertise and
              commitment to delivering exceptional medical care and accurate
              diagnostics.
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
              We prioritize our patients&apos; well-being, offering personalized
              healthcare solutions tailored to individual needs. Our focus on
              patient comfort, support, and involvement in decision-making sets
              us apart.
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
              Quality is at the core of everything we do. We maintain stringent
              standards in medical care, safety protocols, and service delivery
              to ensure the highest level of quality and patient satisfaction.
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
              Embracing innovation, we continually explore and adopt the latest
              advancements in healthcare, ensuring our patients benefit from
              progressive treatments and methodologies, staying at the forefront
              of medical advancements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
