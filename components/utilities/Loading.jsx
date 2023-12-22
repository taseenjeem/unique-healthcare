import { Spinner } from "@nextui-org/react";
import React from "react";

const Loading = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center">
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
