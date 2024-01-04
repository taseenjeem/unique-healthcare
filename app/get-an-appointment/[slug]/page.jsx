import DoctorDetails from "@/components/pages/FindADoctor/DoctorDetails/DoctorDetails";
import React from "react";

export async function generateMetadata({ params }) {
  const data = await fetch(
    `http://localhost:8000/all-doctors-info-by-query?slug=${params.slug}`
  ).then((res) => res.json());

  return {
    title: `${data[0]?.name} | Unique Pathology`,
    description: data[0]?.education,
  };
}

const page = () => {
  return <DoctorDetails />;
};

export default page;
