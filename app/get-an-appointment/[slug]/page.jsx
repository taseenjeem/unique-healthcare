import DoctorDetails from "@/components/pages/FindADoctor/DoctorDetails/DoctorDetails";
import RequireAuth from "@/components/utilities/RequireAuth";
import React from "react";

export async function generateMetadata({ params }) {
  const data = await fetch(
    `https://unique-healthcare-server.vercel.app/all-doctors-info-by-query?slug=${params.slug}`
  ).then((res) => res.json());

  return {
    title: `${data[0]?.name} | Unique HealthCare`,
    description: data[0]?.education,
  };
}

const page = () => {
  return (
    <RequireAuth>
      <DoctorDetails />
    </RequireAuth>
  );
};

export default page;
