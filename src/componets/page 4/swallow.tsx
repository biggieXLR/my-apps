//import { AddCircle } from "iconsax-react";
import Image from "next/image";
import Amala from "../../../public/asset/image 1.png"
import Fish from "../../../public/asset/image 2.png"


const Swallow=()=>{

  return(
      <section id='chef' className="  bg-[#F3F4F6] w-full h-full text-black  flex flex-col md:flex">
            
            <div className="md:mx-auto md:container space-x-5 flex justify-between ">
               <div className="relative w-full  md:block py-8">
                <h1 className="md:text-[32px] text-[16px] font-bold px-10 text-left justify-center">Swallow & Soups</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10  flex-wrap px-6 md:px-10 py-3">
                    <div className="md:flex-col flex bg-white rounded-xl p-1 mb:p-0 mb:pb-5">
                       <div>
                           <Image alt="mainimg"src={Amala} className="w-full hidden md:flex h-full"/>
                           <Image alt="mainimg"src={Amala} className="w-full flex md:hidden h-full]"/>
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
                           <Image alt="mainimg"src={Fish} className="w-full hidden md:flex h-full"/>
                           <Image alt="mainimg"src={Fish} className="w-full flex md:hidden h-full]"/>
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
                           <Image alt="mainimg"src={Fish} className="w-full hidden md:flex h-full"/>
                           <Image alt="mainimg"src={Fish} className="w-full flex md:hidden h-full]"/>
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


                </div>


                </div>
            
               

        </div>
     </section>
  )
}

export default Swallow;