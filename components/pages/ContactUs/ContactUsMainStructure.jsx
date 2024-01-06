"use client";
import React from "react";
import { FaLocationDot, FaSquarePhone } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdMarkEmailRead } from "react-icons/md";
import { Button, Input, Textarea } from "@nextui-org/react";

const ContactUsMainStructure = () => {
  return (
    <section className="wrapper">
      <div className="relative w-full h-[400px] my-10 rounded-lg shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1468332071922!2d90.38041907504!3d23.742142778676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a02be491%3A0x45a9f97c4d06d4f9!2sLABAID%20Specialized%20Hospital!5e0!3m2!1sen!2sbd!4v1704477120892!5m2!1sen!2sbd"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>

      <div className="lg:my-20 my-10">
        <span className="relative flex justify-center mb-3">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"></div>

          <span className="relative z-10 bg-accent px-6 font-semibold text-primary">
            Contact Us
          </span>
        </span>
        <h3 className="md:text-4xl text-2xl font-bold text-center">
          Reliable & High-Quality <br />
          Healthcare Service
        </h3>
      </div>

      <div className="grid lg:grid-cols-2 mb-10">
        <div>
          <div className="flex items-center gap-3">
            <div>
              <span className="w-16 h-16 rounded-full bg-primary flex justify-center items-center">
                <FaLocationDot className="text-3xl text-white" />
              </span>
            </div>
            <span>
              <h3 className="lg:text-lg font-bold text-primary">
                Unique HealthCare, Bangladesh
              </h3>
              <p className="font-medium text-sm">
                House No - 06, Road No - 04, Dhanmondi, Dhaka 1205, Bangladesh
              </p>
            </span>
          </div>
          <div className="flex items-center gap-3 my-6">
            <div>
              <span className="w-16 h-16 rounded-full bg-primary flex justify-center items-center">
                <FaSquarePhone className="text-3xl text-white" />
              </span>
            </div>
            <span>
              <h3 className="lg:text-lg font-bold text-primary">
                Get Offline Appointment
              </h3>
              <span className="lg:flex items-center gap-2">
                <p className="font-medium text-sm">+880 1234 567890</p>
                <p className="hidden lg:block">||</p>
                <p className="font-medium text-sm">+880 1234 678910</p>
              </span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <span className="w-16 h-16 rounded-full bg-primary flex justify-center items-center">
                <RiCustomerService2Fill className="text-3xl text-white" />
              </span>
            </div>
            <span>
              <h3 className="lg:text-lg font-bold text-primary">
                Information Desk
              </h3>
              <p className="font-medium text-sm">+16279</p>
            </span>
          </div>
          <div className="flex items-center gap-3 my-6">
            <div>
              <span className="w-16 h-16 rounded-full bg-primary flex justify-center items-center">
                <MdMarkEmailRead className="text-3xl text-white" />
              </span>
            </div>
            <span>
              <h3 className="lg:text-lg font-bold text-primary">E-mail</h3>
              <p className="font-medium text-sm">info@uniquehealthcare.com</p>
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-primary">Your Feedback</h3>
          <p className="my-5">
            We value your input. Your feedback helps us improve and serve you
            better. Please share your thoughts, suggestions, or comments with
            us; together, we shape the future of our services.
          </p>
          <form className="bg-white p-5 rounded-lg">
            <div className="lg:flex lg:gap-3">
              <Input
                type="text"
                variant="underlined"
                color="primary"
                className="font-medium w-full"
                label="Your Name"
                isRequired
              />
              <Input
                type="email"
                variant="underlined"
                color="primary"
                className="font-medium w-full"
                label="Your Email"
                isRequired
              />
            </div>
            <Textarea
              variant="underlined"
              label="Don't hesitate. Feel free to share your thoughts."
              name="message"
              labelPlacement="inside"
              color="primary"
              className="font-medium w-full mt-3"
              minRows={6}
              isRequired
            />
            <Button
              type="submit"
              color="primary"
              className="text-white font-semibold w-full mt-10"
            >
              Sent Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsMainStructure;
