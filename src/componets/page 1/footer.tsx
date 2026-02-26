import React from 'react';
import Image from 'next/image';
import Logo  from '../../../public/asset/logo.png'

const Footer = () => {
    return (
       <footer className='bg-[#5E3E26] relative z-20 '>
         <div className="md:container bg-Dark rounded-t-[100px] md:mx-auto ">
            <div className="flex justify-left flex-col text-white text-left items-left gap-6  w-full  md:gap-5">
               <div className="w-full flex-col space-y-2 md:grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-10 lg:gap-25.25 lg:justify-between p-8 text-base">
                     {/* Logo */}


                      <div className="text-left space-y-2">
                         <Image alt="logo" src={Logo} />
                        <span className="space-y-3">
                           <p className="lg:text-lg text-10 hidden md:flex">
                             Bringing the authentic
                            <br/>  flavors of Nigerian
                             <br/>  home cooking to your 
                             <br/> table, with passion and care.</p>
                            <p className="text-lg  flex md:hidden"> Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
                         </span>
                    </div> 

                    <div className="text-left text-[20px] space-y-2">
                        <h3 className="font-bold">Quick Links</h3>
                        <ul className="space-y-3 flex-col flex">
                            <a href="home"  className="text-sm">Home</a>
                            <a href="explore"  className="text-sm">Explore</a>
                            <a href="cart"  className="text-sm"> My Order</a>
                            <a href="#"  className="text-sm">Account</a>
                            <a href="#"  className="text-sm">Contact</a>
                         </ul>
                    </div> 

                    <div className="text-left text-[20px] space-y-2">
                        <h4 className="font-bold text-[20px]">Contact Us</h4>
                        <ul className="space-y-3 flex-col flex w-full">
                            <a href="#" className="text-[12px]">+234 801 234 5678</a>
                            <a className="text-[12px]">hello@chukskitchen.com</a>
                            <a className="text-[12px]">123 Taste Blvd, Lagos, Nigeria</a>

                        </ul>
                    </div>  



                    <div className="text-left space-y-2 ">
                        <ul className="space-y-3">
                            <li ><a className="flex gap-2 text-sm"> Twitter</a></li>
                            <li ><a className="flex gap-2 text-sm "> Instagram</a></li>
                            <li ><a className="flex gap-2 text-sm"> Facebook</a></li>
                            <li ><a className="flex gap-2 text-sm"> Whatsapp</a></li>
                            </ul>
                    </div>
                    </div>

                                 <div className=" px-8 pb-8 text-left">
                          <a className="text-xs md:text-xs e text-white" href=""> © 2026 Lift Media. All rights reserved.</a>
                    </div>

            </div>

        </div>
     </footer>

    );
}

export default Footer;
