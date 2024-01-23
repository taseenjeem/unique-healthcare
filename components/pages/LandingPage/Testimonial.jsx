"use client";
import { Avatar } from "@nextui-org/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "@/components/utilities/Loading";
import { useQuery } from "@tanstack/react-query";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrow: false,
};

const Testimonial = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["Testimonials"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/all-testimonials");
      const testimonials = await response.json();
      return testimonials;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <section className="wrapper md:my-20 my-10">
      <span className="relative flex justify-center mb-3">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"></div>

        <span className="relative z-10 bg-accent px-6 font-semibold text-primary">
          Testimonials
        </span>
      </span>
      <h3 className="md:text-4xl text-2xl font-bold text-center">
        How People Thinks About <br />
        Our Services
      </h3>

      <Slider className="my-10" {...sliderSettings}>
        {data?.map((item) => (
          <div
            key={item._id}
            className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center md:p-10 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-10 h-10 text-secondary mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
            </svg>
            <p className="leading-relaxed lg:text-lg italic">{item.review}</p>
            <span className="inline-block h-1 w-20 rounded bg-secondary mt-8 mb-6" />
            <div className="flex items-center justify-center gap-2">
              <Avatar
                isBordered
                color="secondary"
                src={item.profile_photo}
                className="w-20 h-20 text-large"
              />
              <span>
                <h2 className="text-primary uppercase font-semibold title-font tracking-wider">
                  {item.name}
                </h2>
                <p className="text-sm">{item.profession}</p>
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
