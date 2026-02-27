import React from 'react';
import Image from 'next/image';
import Rectangle from '../page 1/Rectangle 1.png'
import Logo from '../../../public/asset/logo.png'
import Link from 'next/link';


const SignUp = () => {
    return (
       <section id="signup" className="lg:h-full w-full text-black ">
      
      <div className="flex-col flex md:flex-row   w-full lg:h-full h-full    ">

        {/* LEFT IMAGE */}
        <div className="relative w-1/2 hidden md:block">
          <Image
            alt="Family enjoying a meal together"
            src={Rectangle}
            className="absolute inset-0 object-cover w-full h-full lg:h-full"
          />

          <div className="absolute inset-0 bg-[#FF7A18B2] opacity-70"></div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-5 my-10 mx-1 h-full">
            <div className="max-w-md px-12 text-white text-center">
                <h1 className="text-3xl font-bold text-white">Chuks Kitchen</h1>
                <p className="text-[19px] font-semibold leading-relax text-white">Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!</p>
            </div>
          </div>
        </div>



        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col justify-between px-3 bg-[#F3F4F6] h-screen md:h-fit lg:h-full mb:px-0 md:py-6">

          {/* Constrained content wrapper */}
          <div className="w-full lg:container md:mx-auto xl:px-20 md:px-10 flex flex-col gap-5 h-full lg:h-full justify-center">

            {/* Top Nav */}
            <div className="flex-col flex justify-center md:justify-center items-center">
              <Image
                alt="logo"
                src={Logo}
                className="h-10 w-auto"
              />
              <p className="text-[24px] text-center font-semibold">Create your Account </p>

            </div>

             <div className='flex-col flex gap-5'>
                    <div className="w-full  flex flex-col ">
                        <h1 className='text-[14px] font-semibold mb-2'>Email</h1>
                        <div className='border  rounded-md px-6 py-3 md:px-2 md:py-2 lg:px-3 lg:py-3'>
                            <input
                            type="email"
                            placeholder="Enter your email"                                                                                                                                            
                            className="w-full text-black text-sm outline-none" />
                        </div>
                    </div>

                    <div className="w-full  flex flex-col ">
                        <h1 className='text-[14px] font-semibold mb-2'> Phone number</h1>
                        <div className='border  rounded-md px-6 py-3 md:px-2 md:py-2 lg:px-3 lg:py-3'>
                            <input
                            type="telephone"
                            placeholder="Enter your phone number"                                                                                                               
                            className="w-full text-black text-sm outline-none" />
                        </div>
                    </div>

                     <div className="w-full flex flex-col ">
                        <h1 className='text-[14px] font-semibold mb-2'>Password</h1>
                       <div className='border rounded-md px-6 py-3 md:px-2 md:py-2 lg:px-3 lg:py-3 '>    
                       <input
                        type="password"
                        placeholder="Enter your password" 
                        required
                        className="w-full text-black text-sm outline-none" />
                       </div>
                    </div>

                     <div className="w-full flex flex-col ">
                        <h1 className='text-sm font-semibold mb-2'>Confirm Password</h1>
                       <div className='border rounded-md px-6 py-3 md:px-2 md:py-2 lg:px-3 lg:py-3 '>    
                       <input
                        type="password"
                        placeholder="Confirm your password" 
                        required
                        className="w-full text-black text-sm outline-none" />
                       </div>
                    </div>

                    <div className="items-center lg:text-[12px] flex md:text-[11px] space-x-2">
                      <input type="checkbox" id="terms" className="w-4 h-4 border-gray-300 rounded-sm blue outline-none "/>
                        <label htmlFor="terms" className="sm flex gap-1 text-gray-500">I agree to the <p className="text-[#1C7FF9]"> terms & conditions </p> and <p className="text-[#1C7FF9]">Privacy Policy</p></label>
                        
                    </div>
            </div>

            <div>
                    <div className="w-full flex flex-col pb-1 ">
                      <Link href='/Signin'>
                        <button  className="w-full bg-[#FF7A18] rounded-md p-3 text-[16px] text-center flex items-center justify-center text-white">
                            Continue
                        </button>
                     </Link>
                    
                        <button  className="w-full bg-[#F3F4F6] pt-3 rounded-md p-2 text-center flex items-center justify-center text-black">
                           <a href='#' className='text-[16px]'>or continue with </a>
                        </button>
                    </div>

            </div>

            <div>
                    <div className="w-full flex flex-col gap-5 ">
                        <button  className="w-full bg-[white]  rounded-md p-1 text-center flex items-center justify-center text-black">
                           <a href='' className='text-sm'> Continue with Google </a>
                        </button>
                        <button  className="w-full bg-[white]  rounded-md p-1 text-center flex items-center justify-center text-black">
                           <a href='' className='text-sm'> Continue with Facebook </a>
                        </button>
                    </div>
            </div>

            
                 <div className="w-full flex pb-4 items-center justify-center">
                    <p className="text-[12px] text-black font-normal ">Aleady have an account? </p>
                    <a href="/Signin"className=" text-[12px] font-semibold text-[#1C7FF9]">Sign in </a>
                </div>
            
 


        
          
         </div>
                   
        </div>

      </div>
    </section>
    );
}

export default SignUp;
