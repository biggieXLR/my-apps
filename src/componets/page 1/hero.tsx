//import { Reserve, TruckFast } from "iconsax-react";
import React from 'react';
import Image from 'next/image';
import Rectangle from './Rectangle 1.png';
import Logo from '../../../public/asset/logo.png'
import Image12 from './image12.png'
import Link from 'next/link';


const Hero = () => {
    return (
       <section id="hero" className="md:min-h-screen w-full text-black overflow-x-hidden">
      
      <div className="flex-col flex md:flex-row w-full md:min-h-screen">

        {/* LEFT IMAGE */}
        <div className="relative md:w-1/2 hidden md:block h-screen">
          <Image
            alt="Family enjoying a meal together"
            src={Rectangle}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative w-full md:hidden">
          <Image
            alt="Eba and Egusi soup"
            src={Image12}
            className="w-full"
          />
        </div>

            <div  className="flex justify-end p-3">
            <button className="border md:hidden w-32 inline border-[#1E88E5] text-[#1E88E5] px-8 py-3 rounded-xl">
               <a href="Signin">Sign in</a>
            </button>
            </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col px-4 md:px-6 lg:px-8 xl:px-12 py-6  md:py-8 md:min-h-screen">
          
          {/* Top Side */}
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <Image
              alt="logo"
              src={Logo}
              className="h-8 md:h-9 lg:h-10 w-auto"
            />
            
            <button className="border hidden md:block border-[#1E88E5] text-[#1E88E5] px-6 lg:px-8 py-2 rounded-lg   transition-colors">
              <a href="Signin">Sign in</a>
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center max-w-2xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[35px] font-bold mb-4">
              Your Authentic Taste  of <br/> Nigeria
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6">
              Experience homemade flavors delivered fresh to your desk or home.
              We bring the rich culinary heritage of Nigeria right to your doorstep.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                <div className="bg-orange-100 p-2 rounded-lg shrink-0">
                  {/*<Reserve size="20" color="#FF8A65" />*/}
                </div>
                <span className="text-sm font-medium">Freshly Prepared</span>
              </div>

              <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                <div className="bg-orange-100 p-2 rounded-lg shrink-0">
                  {/*<Reserve size="20" color="#FF8A65" />*/}
                </div>
                <span className="text-sm font-medium">Support Local Business</span>
              </div>

              <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg sm:col-span-2 lg:col-span-1">
                <div className="bg-orange-100 p-2 rounded-lg shrink-0">
                  {/*<TruckFast size="20" color="#FF8A65" />*/}
                </div>
                <span className="text-sm font-medium">Fast & Reliable Delivery</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col w-full  gap-3 mb-8">
              <Link href="/Homescreen" className="flex-1">
                <button className="w-full bg-[#FF7A18]  py-3 rounded-xl text-white font-semibold transition-colors">
                  Start Your Order
                </button>
             </Link> 

              <button className="flex-1 border border-[#1E88E5]   py-3 rounded-xl text-[#1E88E5] font-semibold transition-colors">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Foot */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-5 text-xs lg:text-sm text-gray-500 mt-auto pt-4">
            <p>2026 Chucks Kitchen</p>
            <a href="#" className="text-[#1E88E5] ">Privacy Policy</a>
            <a href="#" className="text-[#1E88E5] ">Terms of Services</a>
          </div>

        </div>
      </div>
    </section>
    );
}

export default Hero;
