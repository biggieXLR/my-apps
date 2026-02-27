import React from "react";
import Image from "next/image";
import Image22 from "../../../public/asset/image22.png"


const Hero = () => {
  
    return (
    <section
     
      className="relative w-full h-screen text-white mobile:hidden tablet:flex"
    >
      {/* Background Image */}
      <Image
        src={Image22}
        alt="beans, bread, and plantain"
        className="absolute inset-0 w-auto h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto h-full flex items-center px-8 md:px-12">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold">
            The Heart of Nigerian Home <br className='hidden md:flex' /> Cooking
          </h1>

          <p className="text-xl font-semibold">
            Handcrafted with passion, delivered with care.
          </p>

          <button className="bg-[#FF7A18] px-8 py-3 rounded-md text-sm font-semibold">
            Discover Whats New
          </button>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
