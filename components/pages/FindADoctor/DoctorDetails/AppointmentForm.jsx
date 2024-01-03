"use client";
import React from "react";

const AppointmentForm = () => {
  return (
    <section>
      <span className="relative flex justify-center mb-3">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"></div>

        <span className="relative z-10 bg-accent px-6 font-semibold text-primary">
          Book an Appointment
        </span>
      </span>
      <h3 className="md:text-4xl text-2xl font-bold text-center">
        Effortless Doctor Appointment
        <br /> Scheduling Online
      </h3>
    </section>
  );
};

export default AppointmentForm;
