"use client"

import Image from "next/image";
import logoImage from "../assets/logo.jpeg";
import { Building2, Wrench, Phone, House, UserRoundCog } from "lucide-react";
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
      <div className="w-full h-[73px] border-b border-gray-300 px-15 flex items-center justify-between sticky top-0 bg-white z-20">
        <Image src={logoImage} className="w-[80px] h-[68px]" />

         <div className="flex items-center gap-10 text-[16px] font-medium">
        
        {/* Home */}
        <Link
          href="/"
          className={`flex items-center gap-2 ${
            isActive("/")
              ? "font-semibold text-[#0c48ca]"
              : "text-gray-500"
          }`}
        >
          <House
            size={18}
            className={isActive("/") ? "text-[#0236A4]" : ""}
          />
          <p>Home</p>
        </Link>

        {/* About Us */}
        <Link
          href="/about-us"
          className={`flex items-center gap-2 ${
            isActive("/about-us")
              ? "font-semibold text-[#0c48ca]"
              : "text-gray-500"
          }`}
        >
          <Building2
            size={18}
            className={isActive("/about-us") ? "text-[#0236A4]" : ""}
          />
          <p>About us</p>
        </Link>

        {/* Service */}
        <Link
          href="/service"
          className={`flex items-center gap-2 ${
            isActive("/services")
              ? "font-semibold text-[#0c48ca]"
              : "text-gray-500"
          }`}
        >
          <Wrench
            size={18}
            className={isActive("/services") ? "text-[#0236A4]" : ""}
          />
          <p>Service</p>
        </Link>

        {/* Technicians */}
        <Link
          href="/technicians"
          className={`flex items-center gap-2 ${
            isActive("/technicians")
              ? "font-semibold text-[#0c48ca]"
              : "text-gray-500"
          }`}
        >
          <UserRoundCog
            size={18}
            className={
              isActive("/technicians") ? "text-[#0236A4]" : ""
            }
          />
          <p>Our Technicians</p>
        </Link>

        {/* Contact */}
        <Link
          href="/contact-us"
          className={`flex items-center gap-2 ${
            isActive("/contact-us")
              ? "font-semibold text-[#0c48ca]"
              : "text-gray-500"
          }`}
        >
          <Phone
            size={18}
            className={
              isActive("/contact-us") ? "text-[#0236A4]" : ""
            }
          />
          <p>Contact us</p>
        </Link>
      </div>

        <button className="bg-[#0236A4] text-white px-7 py-2 rounded-full font-medium">
          Book Now
        </button>
      </div>
    </>
  );
}

export default Navbar;