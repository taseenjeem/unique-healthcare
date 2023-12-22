import React from "react";
import bg from "/public/assets/images/doctors-bg.jpg";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const CTA = () => {
  return (
    <section
      className="w-full min-h-[500px] bg-no-repeat bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="w-full min-h-[500px] bg-primary opacity-80">
        <div className="wrapper w-full min-h-[500px] flex flex-col justify-center items-center">
          <h4 className="lg:text-4xl text-3xl font-semibold text-white text-center">
            Why are you waiting for?
          </h4>
          <p className="text-white max-w-xl my-6 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime
            aliquid dignissimos est fuga labore sapiente alias suscipit
            aspernatur, illum veritatis atque, tenetur qui sunt repudiandae
            nulla voluptatum totam blanditiis saepe. Minima dolorem quos fuga
            maiores ea inventore repellat nostrum incidunt atque! Ipsam
            voluptatem fugiat provident magni, aliquam ratione quas qui minus
            quo illo quae nobis necessitatibus iure, voluptas distinctio aut?
            Saepe pariatur eaque numquam omnis voluptatum sit necessitatibus
            aperiam.
          </p>
          <Button
            as={Link}
            href="/get-an-appointment"
            color="secondary"
            className="text-white"
            variant="bordered"
          >
            Get Appointment Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
