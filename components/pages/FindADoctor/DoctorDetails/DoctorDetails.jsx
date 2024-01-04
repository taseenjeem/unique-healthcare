"use client";
import React from "react";
import Loading from "@/components/utilities/Loading";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import { IoLocationSharp } from "react-icons/io5";
import { FaMedal } from "react-icons/fa6";
import AppointmentForm from "./AppointmentForm";

const DoctorDetails = () => {
  const params = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["SingleDoctorDetails"],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:8000/all-doctors-info-by-query?slug=${params.slug}`
      );
      const SingleDoctorDetails = await response.json();
      return SingleDoctorDetails;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <section className="wrapper">
      <div className="flex lg:flex-row flex-col justify-evenly items-center my-10 lg:bg-[url('/assets/images/waves.png')] bg-no-repeat bg-cover bg-center">
        <div className="relative max-w-sm h-full overflow-hidden rounded-lg">
          <Image
            width={576}
            height={768}
            src={data[0]?.photo}
            alt={data[0]?.name}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 mt-5 lg:mt-0">
          <h2 className="lg:text-2xl text-lg uppercase font-semibold text-primary">
            {data[0]?.designation}
          </h2>
          <h1 className="lg:text-5xl text-3xl font-semibold text-primary lg:mt-4 mt-2">
            {data[0]?.name}
          </h1>
          <h3 className="lg:text-lg font-semibold text-primary lg:mb-4 mb-2">
            <span className="flex items-center gap-1">
              <IoLocationSharp /> {data[0]?.country}
            </span>
          </h3>
          <h3 className="lg:text-xl font-semibold text-primary">
            {data[0]?.education}.
          </h3>
          <p className="my-4">{data[0]?.description}</p>
        </div>
      </div>
      <div className="lg:my-20 my-10">
        <span className="relative flex justify-center mb-3">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"></div>

          <span className="relative z-10 bg-accent px-6 font-semibold text-primary">
            Medical Achievements
          </span>
        </span>
        <h3 className="md:text-4xl text-2xl font-bold text-center">
          Unveiling Cutting-Edge <br />
          Medical Advancements & Breakthroughs
        </h3>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-evenly items-center mt-10 lg:mt-20">
          {data[0]?.achievements?.map((item, index) => (
            <div
              key={index}
              className="group max-w-sm min-h-[240px] p-5 rounded-lg bg-neutral transition duration-250 hover:bg-primary hover:text-white cursor-pointer"
            >
              <FaMedal className="text-7xl mx-auto text-primary group-hover:text-white" />
              <p className="text-center mt-3">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <AppointmentForm doctorData={data} />
    </section>
  );
};

export default DoctorDetails;
