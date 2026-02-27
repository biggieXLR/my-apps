import React from "react";
import Image from "next/image";
import Welcome from "../../../public/asset/Welcome.png"
const Head = () => {
  return (
    <section
      className="relative w-full h-152.5 text-white mobile:hidden tablet:flex"
    >
      {/* Background Image */}
      <Image
        src={Welcome}
        alt="mainimg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto h-full flex items-center px-12">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold">
           Introducing Our New Menu Additions!
          </h1>

          <p className="text-xl font-semibold">
            Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!
          </p>

          <button className="bg-[#FF7A18] px-8 py-3 rounded-md text-sm font-semibold">
            Discover Whats New
          </button>
        </div>
      </div>

    
    </section>
  );
};
export default Head;