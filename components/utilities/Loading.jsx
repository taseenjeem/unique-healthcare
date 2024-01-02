import { Spinner } from "@nextui-org/react";
import React from "react";

const Loading = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <Spinner
        size="lg"
        label="Loading..."
        color="Primary"
        className="text-xl font-semibold"
      />
    </section>
  );
};

export default Loading;
