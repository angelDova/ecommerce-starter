"use client";

import { MoonLoader } from "react-spinners";

const Loader = () => {
  return (
    <MoonLoader
      className="h-[70vh] flex flex-col justify-center items-center"
      size={60}
      color="blue"
    />
  );
};

export default Loader;
