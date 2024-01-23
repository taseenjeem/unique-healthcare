"use client";
import Loading from "@/components/utilities/Loading";
import { Button } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FindDocMainStructure = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["AllDoctors"],
    queryFn: async () => {
      const response = await fetch(
        "https://unique-healthcare-server.vercel.app/all-doctors-info"
      );
      const AllDoctors = await response.json();
      return AllDoctors;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <section className="wrapper min-h-screen">
      <div className="grid lg:grid-cols-2 mt-5">
        <span>
          <h1 className="text-4xl font-semibold text-primary">
            Get an Appointment
          </h1>
          <div className="border-gray-400 border-t-2 w-28 my-3" />
        </span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          dolores, adipisci praesentium voluptatem ut rem, atque aliquam
          necessitatibus officia veritatis facere deserunt? Dolore doloremque,
          quasi aliquid aut facere, neque reprehenderit sit ipsum numquam quia
          repellat asperiores nesciunt iste? Labore delectus vel rerum iure
          expedita, repudiandae itaque nam nostrum assumenda illo?
        </p>
      </div>
      <div className="lg:my-20 my-10">
        <div className="grid lg:grid-cols-2 lg:gap-10 gap-5">
          {data?.map((doctor) => (
            <div
              className="w-full max-h-64 bg-neutral flex items-center rounded-lg"
              key={doctor._id}
            >
              <div className="relative lg:max-w-[200px] max-w-[150px] h-full overflow-hidden rounded-tl-lg rounded-bl-lg">
                <Image
                  width={576}
                  height={768}
                  src={doctor.photo}
                  alt={doctor.name}
                  className="object-cover "
                />
              </div>
              <div className="lg:p-5 p-2">
                <h3 className="font-semibold text-sm lg:text-base">
                  {doctor.designation}
                </h3>
                <h3 className="lg:text-2xl text-lg font-semibold text-primary lg:my-2 my-1">
                  {doctor.name}
                </h3>
                <h3 className="hidden lg:block">
                  <strong>Country:</strong> {doctor.country}
                </h3>
                <h3 className="text-xs lg:text-base">
                  <strong>Education:</strong> {doctor.education}
                </h3>
                <Button
                  as={Link}
                  size="sm"
                  color="primary"
                  href={`/get-an-appointment/${doctor.slug}`}
                  className="text-white mt-3"
                >
                  Get Appointment
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindDocMainStructure;
