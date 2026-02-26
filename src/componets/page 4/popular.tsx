import React from "react";
import Image from "next/image";
import Jollof from "../../../public/asset/jollof.png"
import Eba from "../../../public/asset/image 8.png"
import Yam from "../../../public/asset/image 7.png"
import Snail from "../../../public/asset/image 5.png"
import Fish from "../../../public/asset/image 6.png"


const Popular=()=>{

  return(
      <section id='chef' className="  bg-[#F3F4F6] w-full h-full text-black  flex flex-col md:flex">
            
            <div className="md:mx-auto md:container space-x-5 flex justify-between ">
               <div className="relative w-full  md:block py-8">
                <h1 className="md:text-[32px] text-[16px] md:px-10 px-8 font-bold  text-left justify-center">Popular</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-10  gap-3 flex-wrap px-6 md:px-10 py-3">
                    <div className="md:flex-col flex bg-white rounded-xl p-1 mb:p-0 mb:pb-5">
                       <div>
                           <Image alt="mainimg"src={Jollof} className="w-lg hidden md:flex h-full"/>
                           <Image alt="mainimg"src={Jollof} className="w-lg flex md:hidden h-full"/>
                       </div>
                    <div className="flex-col">
                        <div className="p-1 md:p-3">
                        <h1 className='lg:text-[16px] md:text-[14px]  font-semibold'>Jollof Rice & Fried Chicken</h1>
                         <p className=" text-left font-medium lg:text-[16px] text-[12px] ">A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.</p>
                        </div>

                        <div className='w-full flex justify-between items-center px-3 md:py-2'>
                            <h1 className="text-[#FF7A18] text-[16px] font-medium">₦3,500</h1>
                            {/*<AddCircle  size="32" color="#FF7A18" variant="Bold"/>*/}
                        </div>
                    </div>

                   </div>

                    <div className="md:flex-col flex bg-white rounded-xl p-1 mb:p-0 mb:pb-5">
                       <div>
                           <Image alt="mainimg"src={Eba} className="w-lg hidden md:flex h-full"/>
                           <Image alt="mainimg"src={Yam} className="w-lg flex md:hidden h-full"/>
                       </div>
                    <div className="flex-col">
                        <div className="p-1 md:p-3">
                        <h1 className='lg:text-[16px] md:text-[14px] font-semibold'>Egusi Soup & Pounded Yam</h1>  
                         <p className=" text-left font-medium lg:text-[16px] text-[12px] ">Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam. </p>
                        </div>

                        <div className='w-full flex justify-between items-center px-3 md:py-2'>
                            <h1 className="text-[#FF7A18] text-[16px] font-medium">₦3,500</h1>
                            {/*<AddCircle  size="32" color="#FF7A18" variant="Bold"/>*/}
                        </div>
                    </div>

                   </div>

                    <div className="md:flex-col flex bg-white rounded-xl p-1 mb:p-0 mb:pb-5">
                       <div>
                           <Image alt="mainimg"src={Fish} className="w-125.5 hidden md:flex h-full"/>
                           <Image alt="mainimg"src={Fish} className="w-125.5 flex md:hidden h-full]"/>
                       </div>
                    <div className="flex-col">
                        <div className="p-1 md:p-3">
                        <h1 className='lg:text-[16px] md:text-[14px] font-semibold'>Spicy Tilapia Pepper Soup</h1>  
                         <p className=" text-left font-medium lg:text-[16px] text-[12px] ">A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.</p>
                        </div>

                        <div className='w-full flex justify-between items-center px-3 md:py-2'>
                            <h1 className="text-[#FF7A18] text-[16px] font-medium">₦3,500</h1>
                            {/*<AddCircle  size="32" color="#FF7A18" variant="Bold"/>*/}
                        </div>
                    </div>

                   </div>

                    <div className="hidden md:flex md:flex-col bg-white rounded-xl pb-5">
                       <div>
                           <Image alt="mainimg"src={Snail} className="w-full"/>
                       </div>

                       <div className="p-3">
                        <h1 className='lg:text-[16px] md:text-[14px]  font-semibold'>Jollof Rice & Fried Chicken</h1>  
                         <p className=" text-left font-medium lg:text-[16px] text-[12px] ">Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.</p>
                        </div>

                        <div className='w-full flex justify-between items-center px-3 py-2'>
                            <h1 className="text-[#FF7A18] font-bold">₦3,500</h1>
                            {/*<AddCircle  size="32" color="#FF7A18" variant="Bold"/>*/}
                        </div>
                   </div>

                    <div className="hidden md:flex md:flex-col bg-white rounded-xl pb-5">
                       <div>
                           <Image alt="mainimg"src={Yam} className="w-full"/>
                       </div>

                       <div className="p-3">
                        <h1 className='lg:text-[16px] md:text-[14px] font-semibold'>Egusi Soup & Pounded Yam</h1>  
                         <p className=" text-left font-medium lg:text-[16px] text-[12px] ">Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam. </p>
                        </div>

                        <div className='w-full flex justify-between items-center px-3 py-2'>
                            <h1 className="text-[#FF7A18] font-bold">₦3,500</h1>
                           {/* <AddCircle  size="32" color="#FF7A18" variant="Bold"/>*/}
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
                            <h1 className="text-[#FF7A18] font-bold">₦3,500</h1>
                            {/*<AddCircle  size="32" color="#FF7A18" variant="Bold"/>*/}
                        </div>
                   </div>
                </div>


                </div>
            
               

        </div>
     </section>
  )
}

export default Popular;