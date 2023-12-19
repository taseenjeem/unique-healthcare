"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";

const LabTechs = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/MedMachines.json")
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
    slidesToShow: 2,
    slidesToScroll: 1,
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

  data.map((d) => console.log(d.photo));

  return (
    <section className="md:my-20 my-10 wrapper">
      <span className="relative flex justify-center mb-3">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

        <span className="relative z-10 bg-accent px-6 font-semibold text-primary">
          Laboratory Technologies
        </span>
      </span>
      <h3 className="md:text-4xl text-2xl font-bold text-center">
        Latest & High-Quality <br />
        Medical Laboratory Machines
      </h3>

      <Slider {...sliderSettings}>
        {data?.map((item) => (
          <div key={item?.id} className="my-10">
            <div className="md:mx-10 mx-2 bg-neutral p-5 rounded-lg shadow-lg min-h-[370px]">
              <div className="relative w-40 h-40 overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={item?.photo}
                  alt={item?.title}
                  className="object-cover mx-auto"
                />
              </div>
              <h4 className="md:text-2xl text-lg font-semibold my-4">
                {item?.title}
              </h4>
              <p>
                {item?.description.length > 150
                  ? `${item?.description.slice(0, 150)}...`
                  : item?.description}
                {item?.description.length > 150 && (
                  <Popover placement="top" showArrow>
                    <PopoverTrigger>
                      <span className="text-primary font-semibold ml-1 cursor-pointer">
                        Read more
                      </span>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="px-1 py-2 max-w-sm">
                        <div className="text-sm font-bold mb-2">
                          {item?.title}
                        </div>
                        <div className="text-xs leading-relaxed">
                          {item?.description}
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                )}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default LabTechs;
