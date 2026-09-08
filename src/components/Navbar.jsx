"use client"

import Image from "next/image";
import logoImage from "../assets/logo.jpeg";
import { Building2, Wrench, Phone, House, Clock, MapPin, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


function Navbar() {

  // Gets the current page URL
  // Example: "/" or "/about-us"
  const pathname = usePathname();

   // Check if the given link is currently active
  const isActive = (href) => {
    return pathname === href;
  };
  return (
    <>

    <div className="main-nav-container sticky top-0 z-50 ">

      {/* Information Box */}
       
      <div className="flex items-center bg-gray-200 ">

        <div className="w-[40%] rounded-r-full text-white text-center bg-[#0236A4] p-1 font-medium">
          <h1>We do not receive extra charges</h1>
        </div>

        <div className="w-[60%] flex items-center gap-15 justify-center">

          <div className="timing flex items center w-fit gap-1 text-[#0236A4]">
            <Clock />
            <h1 className="font-medium">8am - 8pm (Mon-Sat) </h1>
          </div>

          <div className="timing flex items center w-fit gap-1 text-[#0236A4]">
            <Phone />
            <h1 className="font-medium">+91 987654321</h1>
          </div>

          <div className="timing flex items center w-fit gap-1 text-[#0236A4]">
            <Mail />
            <h1 className="font-medium">prhometech@gmail.com</h1>
          </div>

        </div>

      </div>

      {/* Main Navigation Box */}
    
      <div className="w-full h-[73px] border-b border-gray-300 px-15 backdrop-blur-3xl flex items-center justify-between bg-white">
        <Image src={logoImage} className="w-[80px] h-[68px]" />

         <div className="flex items-center gap-10 text-[18px] font-medium">
        
        {/* Home */}
        <Link href="/" className={`flex items-center gap-2 ${ isActive("/") ? "font-semibold text-[#0c48ca]" : "text-black"}`}>
          <House size={18} className={isActive("/") ? "text-[#0236A4]" : ""} />
          <p>Home</p>
        </Link>

        {/* About Us */}
        <Link href="/about-us" className={`flex items-center gap-2 ${ isActive("/about-us") ? "font-semibold text-[#0c48ca]" : "text-black" }`} >
          <Building2 size={18} className={isActive("/about-us") ? "text-[#0236A4]" : ""} />
          <p>About us</p>
        </Link>

        {/* Service */}
        <Link href="/service" className={`flex items-center gap-2 ${ isActive("/services") ? "font-semibold text-[#0c48ca]" : "text-black" }`} >
          <Wrench size={18} className={isActive("/services") ? "text-[#0236A4]" : ""}/>
          <p>Service</p>
        </Link>


        {/* Contact */}
        <Link href="/contact-us" className={`flex items-center gap-2 ${ isActive("/contact-us") ? "font-semibold text-[#0c48ca]" : "text-black"  }`}>
          <Phone size={18} className={ isActive("/contact-us") ? "text-[#0236A4]" : "" }/>
          <p>Contact us</p>
        </Link>

      </div>

        <button className="bg-[#0236A4] text-white px-7 py-2 rounded-full font-medium cursor-pointer">
          Book Now
        </button>
      </div>

      </div>

    </>
  );
}

export default Navbar;