import React from "react";
import Image from "next/image";
import ImageC from '../../../public/asset/imagec.png'



const Headline = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-150.75 text-white mobile:hidden tablet:flex"
    >
      {/* Background Image */}
      <Image
        src={ImageC}
        alt="mainimg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto h-full flex items-center px-8 md:px-12">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold">
            Chuks Kitchen
          </h1>

          <p className="text-xl font-semibold">
           Chuks  Kitchen Nigerian Home Cooking 4.8  (1.2k)
          </p>


        </div>
      </div>
    </section>
  );
};

export default Headline;
