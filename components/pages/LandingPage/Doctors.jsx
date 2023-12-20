"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import heroImg from "/public/assets/images/doctors-hero-image.png";
import heroImg2 from "/public/assets/images/doctors-hero-image2.png";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLocationDot } from "react-icons/fa6";

const Doctors = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/doctors.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrow: false,
        },
      },
    ],
  };

  return (
    <section className="md:my-20 my-10 wrapper">
      <span className="relative flex justify-center mb-3">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"></div>

        <span className="relative z-10 bg-accent px-6 font-semibold text-primary">
          Meet Our Experts
        </span>
      </span>
      <h3 className="md:text-4xl text-2xl font-bold text-center">
        Most Skilled & Experienced
        <br />
        Doctors Around The World
      </h3>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-10">
        <div className="relative w-full lg:w-1/2 overflow-hidden mx-auto">
          <Image
            src={heroImg}
            alt="Doctors Image"
            width={500}
            height={380}
            className="object-cover rounded-lg shadow-xl mx-auto"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h4 className="capitalize md:text-3xl text-xl font-semibold mb-5">
            Our top researches
          </h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ut
            eos deleniti adipisci, incidunt consectetur placeat. Corrupti
            tempora hic ipsa debitis iste fugit accusamus esse magni non! Qui et
            mollitia soluta, vero expedita autem ipsum animi dolorum, odio
            consequuntur ad, neque sit dolores rerum. Consequuntur dolore
            aspernatur delectus, porro veritatis doloremque magnam aliquam quos
            sint nisi possimus ipsum necessitatibus. Perferendis adipisci
            assumenda, quam sunt consectetur aut fuga expedita quasi atque in
            molestiae dolores eaque quaerat earum maxime quisquam. Architecto
            quasi, repellat saepe aut odit debitis vel ipsum laudantium deleniti
            omnis. Incidunt alias sit nemo pariatur quisquam quae assumenda
            maiores cupiditate?
          </p>
          <Button
            as={Link}
            href="/pathology-lab"
            color="primary"
            className="text-white mt-5"
          >
            Learn More
          </Button>
        </div>
      </div>

      <Slider {...sliderSettings}>
        {data?.map((item) => (
          <div
            key={item.id}
            className="px-5 rounded-lg my-10 cursor-pointer w-full h-full"
          >
            <div className="group relative block bg-primary rounded-lg w-full h-full">
              <Image
                src={item.photo}
                width={576}
                height={768}
                alt={item.name}
                className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-10 rounded-lg"
              />

              <div className="relative p-4 sm:p-6 lg:p-8 w-full h-full">
                <p className="text-sm font-medium uppercase tracking-widest text-white">
                  {item.designation}
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                  {item.name}
                </p>
                <div className="mt-72 md:mt-80 w-full h-full">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 w-full h-full">
                    <span className="flex items-center gap-1 text-white mb-4">
                      <FaLocationDot className="text-lg" />{" "}
                      <p>{item.country}</p>
                    </span>
                    <p className="text-sm text-white">{item.education}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-5 mt-20">
        <div className="relative w-full lg:w-1/2 overflow-hidden mx-auto">
          <Image
            src={heroImg2}
            alt="Doctors Image"
            width={500}
            height={380}
            className="object-cover rounded-lg shadow-xl mx-auto"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h4 className="capitalize md:text-3xl text-xl font-semibold mb-5">
            because we care
          </h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ut
            eos deleniti adipisci, incidunt consectetur placeat. Corrupti
            tempora hic ipsa debitis iste fugit accusamus esse magni non! Qui et
            mollitia soluta, vero expedita autem ipsum animi dolorum, odio
            consequuntur ad, neque sit dolores rerum. Consequuntur dolore
            aspernatur delectus, porro veritatis doloremque magnam aliquam quos
            sint nisi possimus ipsum necessitatibus. Perferendis adipisci
            assumenda,
          </p>
          <Button
            as={Link}
            href="/find-a-doctor"
            color="primary"
            className="text-white mt-5"
          >
            Find a Doctor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
