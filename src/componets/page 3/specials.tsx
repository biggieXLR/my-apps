import React from "react";
import Image from "next/image";
import Jollof from "../../../public/asset/jollof.png"
import Jollof2 from "../../../public/asset/jollof2.png"
import Smokey from "../../../public/asset/smokey.png"
import Yam from "../../../public/asset/yam.png"

const Special=()=>{

  return(
      <section id='chef' className="  bg-[#F3F4F6] w-full h-full text-black  flex flex-col md:flex">
            
            <div className="md:mx-auto md:container space-x-5 flex justify-between ">
               <div className="relative w-full  md:block py-16">
                <h1 className="text-[32px] font-bold  text-center justify-center"> Chefs Specials</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-10 gap-3  flex-wrap px-6 md:px-10 py-3">
                    <div className="flex-col bg-white rounded-xl pb-5">
                       <div>
                           <Image alt="mainimg"src={Smokey} className="w-full"/>
                       </div>

                       <div className="p-3">
                        <h1 className='lg:text-[16px] md:text-[14px] font-semibold'>Spicy Tilapia Pepper Soup</h1>  
                         <p className=" text-left font-medium lg:text-[16px] text-[12px] ">A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.</p>
                        </div>

                        <div className='w-full flex justify-between items-center px-3 py-2'>
                            <h1 className="text-[#FF7A18] lg:text-[14px] text-[12px] font-bold">₦3,500</h1>
                              <button  className=" bg-[#FF7A18] rounded-md p-3 text-center w-25 lg:w-37.5 flex items-center justify-center text-white">
                                 <a href='cart' className='lg:text-[14px] text-[12px]'>Add to cart </a>
                              </button>
                        </div>
                   </div>

                    <div className="flex-col bg-white rounded-xl pb-5">
                       <div>
                           <Image alt="mainimg"src={Jollof} className="w-full"/>
                       </div>

                       <div className="p-3">
                        <h1 className='lg:text-sm md:text-[14px] font-semibold'>Jollof Rice & Fried Chicken</h1>  
                         <p className=" text-left font-medium lg:text-[16px] text-[12px] ">Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.</p>
                        </div>

                        <div className='w-full flex justify-between items-center px-3 py-2'>
                            <h1 className="text-[#FF7A18] lg:text-[14px] text-[12px] font-bold">₦3,500</h1>
                              <button  className=" bg-[#FF7A18] rounded-md p-3 text-center  w-25 lg:w-37.5 flex items-center justify-center text-white">
                                 <a href='cart' className='lg:text-[14px] text-[12px]'>Add to cart </a>
                              </button>
                        </div>
                   </div>

                    <div className="flex-col bg-white rounded-xl pb-5">
                       <div>
                           <Image alt="mainimg"src={Jollof} className="w-full"/>
                       </div>

                       <div className="p-3">
                        <h1 className='lg:text-[16px] md:text-[14px] font-semibold'>Jollof Rice & Fried Chicken</h1>  
                         <p className=" text-left font-medium lg:text-[16px] text-[12px] ">Our Signature Jollof Rice, cooked to perfection,served with succulent fried chicken </p>
                        </div>

                        <div className='w-full flex justify-between items-center px-3 py-2'>
                            <h1 className="text-[#FF7A18] lg:text-[14px] text-[12px] font-bold">₦3,500</h1>
                              <button  className=" bg-[#FF7A18] rounded-md p-3 text-center  w-25 lg:w-37.5 flex items-center justify-center text-white">
                                 <a href='cart' className='lg:text-[14px] text-[12px]'>Add to cart </a>
                              </button>
                        </div>
                   </div>

                    <div className="hidden md:flex md:flex-col bg-white rounded-xl pb-5">
                       <div>
                           <Image alt="mainimg"src={Jollof} className="w-full"/>
                       </div>

                       <div className="p-3">
                        <h1 className='lg:text-[16px] md:text-[14px]  font-semibold'>Jollof Rice & Fried Chicken</h1>  
                         <p className=" text-left font-medium lg:text-[16px] text-[12px] ">Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.</p>
                        </div>

                        <div className='w-full flex justify-between items-center px-3 py-2'>
                            <h1 className="text-[#FF7A18] lg:text-[14px] text-[12px] font-bold">₦3,500</h1>
                              <button  className=" bg-[#FF7A18] rounded-md p-3 text-center  w-25 lg:w-37.5 flex items-center justify-center text-white">
                                 <a href='cart' className='lg:text-[14px] text-[12px]'>Add to cart </a>
                              </button>
                        </div>
                   </div>

                    <div className="hidden md:flex md:flex-col bg-white rounded-xl pb-5">
                       <div>
                           <Image alt="mainimg"src={Jollof2} className="w-full"/>
                       </div>

                       <div className="p-3">
                        <h1 className='lg:text-[16px] md:text-[14px]  font-semibold'>Jollof Rice & Fried Chicken</h1>  
                         <p className=" text-left font-medium lg:text-[16px] text-[12px] ">Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.</p>
                        </div>

                        <div className='w-full flex justify-between items-center px-3 py-2'>
                            <h1 className="text-[#FF7A18] lg:text-[14px] text-[12px] font-bold">₦3,500</h1>
                              <button  className=" bg-[#FF7A18] rounded-md p-3 text-center  w-25 lg:w-37.5 flex items-center justify-center text-white">
                                 <a href='cart' className='lg:text-[14px] text-[12px]'>Add to cart </a>
                              </button>
                        </div>
                   </div>

                    <div className="hidden md:flex md:flex-col bg-white rounded-xl pb-5">
                       <div>
                           <Image alt="mainimg"src={Yam} className="w-full"/>
                       </div>

                       <div className="p-3">
                        <h1 className='lg:text-[16px] md:text-[14px]  font-semibold'>Egusi Soup & Pounded Yam</h1>  
                         <p className=" text-left font-medium lg:text-[16px] text-[12px] ">Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.</p>
                        </div>

                        <div className='w-full flex justify-between items-center px-3 py-2'>
                            <h1 className="text-[#FF7A18] lg:text-[14px] text-[12px] font-bold">₦3,500</h1>
                              <button  className=" bg-[#FF7A18] rounded-md p-3 text-center  w-25 lg:w-37.5 flex items-center justify-center text-white">
                                 <a href='cart' className='lg:text-[14px] text-[12px]'>Add to cart </a>
                              </button>
                        </div>
                   </div>
                </div>


                </div>
            
               

        </div>
     </section>
  )
}

export default Special;