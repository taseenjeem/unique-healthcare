import Image from "next/image";
import React from "react";
import { TbMicroscope } from "react-icons/tb";
import { PiTestTubeFill } from "react-icons/pi";
import { GiAnatomy } from "react-icons/gi";
import { FaClinicMedical } from "react-icons/fa";

const LabServices = () => {
  return (
    <div className="md:my-28 my-10 wrapper">
      <span className="relative flex justify-center mb-3">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

        <span className="relative z-10 bg-accent px-6 font-semibold text-primary">
          Laboratory Services
        </span>
      </span>
      <h3 className="md:text-4xl text-2xl font-bold text-center">
        Reliable & High-Quality <br />
        Laboratory Service
      </h3>

      <div class="grid md:grid-cols-2 border border-primary mt-10">
        <div class="md:p-6 p-3 bg-neutral border-b md:border-r border-primary hover:bg-primary hover:text-white duration-250 cursor-pointer">
          <FaClinicMedical className="text-7xl mb-3" />
          <h4 className="text-2xl font-semibold mb-3">Clinical Pathology</h4>
          <p>
            This branch of pathology deals with laboratory analysis of bodily
            fluids (blood, urine, etc.) and tissues to diagnose diseases. It
            includes tests like complete blood count (CBC), blood chemistry
            analysis, urinalysis, and other specialized tests to assess organ
            function, detect infections, evaluate electrolyte balance, and more.
          </p>
        </div>
        <div class="md:p-6 p-3 bg-neutral border-b border-primary hover:bg-primary hover:text-white duration-250 cursor-pointer">
          <GiAnatomy className="text-7xl mb-3" />
          <h4 className="text-2xl font-semibold mb-3">Anatomical Pathology</h4>
          <p>
            Anatomical pathology involves the examination of tissues and cells
            obtained from biopsies, surgical resections, or autopsies.
            Pathologists analyze these samples microscopically to diagnose
            diseases such as cancer, infections, inflammatory conditions, and
            other abnormalities. It includes histopathology (study of tissues),
            cytology (study of cells), and forensic pathology.
          </p>
        </div>
        <div class="md:p-6 p-3 bg-neutral md:border-r border-b md:border-b-0 border-primary hover:bg-primary hover:text-white duration-250 cursor-pointer">
          <PiTestTubeFill className="text-7xl mb-3" />
          <h4 className="text-2xl font-semibold mb-3">Hematology</h4>
          <p>
            Hematology focuses on the study of blood and blood-forming tissues.
            This includes the diagnosis and treatment of blood-related disorders
            such as anemia, leukemia, clotting disorders, and blood cancers.
            Tests like coagulation studies, blood cell counts, and blood smear
            examinations are conducted in this area.
          </p>
        </div>
        <div class="md:p-6 p-3 bg-neutral hover:bg-primary hover:text-white duration-250 cursor-pointer">
          <TbMicroscope className="text-7xl mb-3" />
          <h4 className="text-2xl font-semibold mb-3">Microbiology</h4>
          <p>
            Microbiology involves the identification and characterization of
            microorganisms such as bacteria, viruses, fungi, and parasites that
            cause infections. It includes cultures, sensitivity testing, and
            molecular techniques to diagnose infections and guide appropriate
            antibiotic therapy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LabServices;
