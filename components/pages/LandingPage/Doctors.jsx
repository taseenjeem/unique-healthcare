import Image from "next/image";
import React from "react";
import heroImg from "/public/assets/images/doctors-hero-image.png";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Doctors = () => {
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
        Doctors In Our Country
      </h3>

      <div className="grid md:grid-cols-2 items-center justify-center gap-5 mt-10">
        <div className="relative w-full h-full overflow-hidden mx-auto">
          <Image
            src={heroImg}
            alt="Doctors Image"
            width={500}
            height={380}
            className="object-cover rounded-lg shadow-xl mx-auto"
          />
        </div>
        <div>
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
    </section>
  );
};

export default Doctors;
