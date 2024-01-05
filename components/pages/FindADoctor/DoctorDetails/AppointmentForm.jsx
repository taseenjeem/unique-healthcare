"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "@/styles/OverwriteCalender.css";
import {
  Button,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import Link from "next/link";
import toast from "react-hot-toast";
import Loading from "@/components/utilities/Loading";

const AppointmentForm = ({ doctorData }) => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const ageRange = [
    "Below 5 Years",
    "5 - 10 Years",
    "10 - 18 Years",
    "18 - 25 Years",
    "25 - 35 Years",
    "35 - 40 Years",
    "Above 40 Years",
  ];

  const gender = ["Male", "Female", "Others"];

  const appointmentTime = [
    "9:00 AM - 10:00 AM",
    "10:30 AM - 11:30 AM",
    "12:00 PM - 1:00 PM",
    "2:00 PM - 3:00 PM",
    "3:30 PM - 4:30 PM",
  ];

  const patientType = ["Regular Patient", "New Patient"];

  const handleDateChange = (date) => {
    const today = new Date();
    if (date.toDateString() === today.toDateString()) {
      toast.error("You cannot place an appointment for today!");
    } else {
      setAppointmentDate(date);
    }
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();

    const patient_name = e.target.name.value;
    const patient_email = e.target.email.value;
    const patient_address = e.target.address.value;
    const patient_phone = e.target.phone.value;
    const patient_age = e.target.age.value;
    const patient_gender = e.target.gender.value;
    const appointment_time = e.target.time.value;
    const appointment_date = appointmentDate.toString();
    const patient_type = e.target.type.value;
    const message = e.target.message.value;

    try {
      if (appointmentDate === "") {
        return toast.error("Please select an appointment date.");
      } else {
        fetch("http://localhost:8000/add-new-appointment", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            patient_name,
            patient_email,
            patient_address,
            patient_phone,
            patient_age,
            patient_gender,
            appointment_time,
            appointment_date,
            patient_type,
            message,
            appointment_status: "pending",
            appointed_doctor: doctorData[0]?.name,
          }),
        })
          .then((response) => response.json())
          .then((feedback) => {
            if (feedback.message === "Appointment booked successfully!") {
              setIsLoading(false);
              toast.success(`${feedback.message}`);
              e.target.reset();
            } else if (
              feedback.message === "You still have an appointment in progress!"
            ) {
              setIsLoading(false);
              toast.error(`${feedback.message}`);
              e.target.reset();
            }
          });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
          <div className="lg:my-20 my-10 lg:flex justify-between">
            <div>
              <div className="mb-4 text-center block lg:hidden">
                <label className="font-medium">
                  Pick a date for appointment{" "}
                  <span className="text-red-500 text-xl">*</span>
                </label>
              </div>
              <Calendar onChange={handleDateChange} value={appointmentDate} />
              <div className="mb-4 text-center hidden lg:block mt-4">
                <label className="font-medium">
                  Pick a date for appointment{" "}
                  <span className="text-red-500 text-xl">*</span>
                </label>
              </div>
            </div>
            <div className="bg-white p-5 w-full lg:w-3/5 rounded-lg mt-5 lg:mt-0">
              <span className="relative flex justify-center">
                <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"></div>

                <span className="relative z-10 bg-white px-6 font-semibold text-primary">
                  Fill up the form to
                </span>
              </span>
              <h3 className="text-2xl font-semibold text-primary text-center">
                Get Appointment
              </h3>
              <form className="mt-5" onSubmit={handleSubmit}>
                <small>
                  You are making appointment for{" "}
                  <strong className="text-primary">
                    {doctorData[0]?.name}
                  </strong>
                </small>
                <div className="lg:flex gap-3">
                  <Input
                    type="text"
                    variant="underlined"
                    color="primary"
                    className="font-medium w-full"
                    label="Patient's Name"
                    name="name"
                    isRequired
                  />
                  <Input
                    type="email"
                    variant="underlined"
                    color="primary"
                    className="font-medium w-full"
                    label="Patient's Email"
                    name="email"
                    isRequired
                  />
                </div>
                <div className="lg:flex gap-3">
                  <Input
                    type="text"
                    variant="underlined"
                    color="primary"
                    className="font-medium w-full"
                    label="Patient's Home Address"
                    name="address"
                    isRequired
                  />
                  <Input
                    type="number"
                    variant="underlined"
                    color="primary"
                    className="font-medium w-full"
                    label="Patient's Phone Number"
                    name="phone"
                    isRequired
                  />
                </div>
                <div className="lg:flex gap-3">
                  <Select
                    variant="underlined"
                    label="Select Patient's Age"
                    color="primary"
                    className="font-medium w-full"
                    name="age"
                    isRequired
                  >
                    {ageRange.map((age) => (
                      <SelectItem key={age} value={age}>
                        {age}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    variant="underlined"
                    label="Select Patient's Gender"
                    color="primary"
                    className="font-medium w-full"
                    name="gender"
                    isRequired
                  >
                    {gender.map((g) => (
                      <SelectItem key={g} value={g}>
                        {g}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="lg:flex gap-3">
                  <Select
                    variant="underlined"
                    label="Select Appointment Time"
                    color="primary"
                    className="font-medium w-full"
                    name="time"
                    isRequired
                  >
                    {appointmentTime.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    variant="underlined"
                    label="Select Patient's Type"
                    color="primary"
                    className="font-medium w-full"
                    name="type"
                    isRequired
                  >
                    {patientType.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <Textarea
                  variant="underlined"
                  label="Any special recommendation? Write down in details. (Optional)"
                  name="message"
                  labelPlacement="inside"
                  color="primary"
                  className="font-medium w-full mt-3"
                  minRows={6}
                />
                <div className="lg:flex justify-between items-center mt-5">
                  <Checkbox
                    isSelected={isSelected}
                    onValueChange={setIsSelected}
                    className="text-white"
                  >
                    I agree to the{" "}
                    <Link
                      href="#"
                      className="font-semibold text-primary hover:underline"
                    >
                      Privacy & Policies.
                    </Link>
                  </Checkbox>
                  <Button
                    type="submit"
                    color="primary"
                    className="text-white font-semibold lg:w-1/2 w-full mt-5 lg:mt-0"
                    isDisabled={isSelected ? false : true}
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AppointmentForm;
