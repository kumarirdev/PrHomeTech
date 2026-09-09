"use client";

import Image from "next/image";
import logoImage from "../assets/logo.jpeg";
import {
  Building2,
  Wrench,
  Phone,
  House,
  Clock,
  MapPin,
  ChevronRight,
  Mail,
  ListFilter,
} from "lucide-react";
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

        <div className="flex items-center justify-end lg:justify-between   text-white py-2 bg-gradient-to-r from-[#011d3b] via-[#002b55] to-[#001024]">
          <div className="pl-17 hidden lg:block pr-6 rounded-r-full text-gray-600 py-2 text-center bg-gray-100  p-1 font-medium">
            <h1>We do not receive extra charges</h1>
          </div>

          <div className="flex items-center gap-4 lg:gap-15 justify-end lg:justify-center text-sm lg:text-lg mr-4  lg:mr-15">
            <div className="timing hidden lg:flex items-center w-fit gap-2  ">
              <Clock />
              <h1 className="font-medium">8am - 8pm (Mon-Sat) </h1>
            </div>

            <div className="timing flex items-center w-fit gap-2 ">
              <Phone className="w-4 h-4 lg:w-6 lg:h-6" />
              <h1 className="font-medium ">+91 987654321</h1>
            </div>

            <div className="timing flex items-center w-fit gap-2 ">
              <Mail className="w-4 h-4 lg:w-6 lg:h-6" /> 
              <h1 className="font-medium">prhometech@gmail.com</h1>
            </div>
          </div>
        </div>

       

        {/* Main Navigation Box */}

        <div className="w-full h-[50px] lg:h-[73px] border-b border-gray-300  px-4 lg:px-15 backdrop-blur-3xl flex items-center justify-between bg-white">
          <Image src={logoImage} className="  w-10 h-10 lg:w-[80px] lg:h-[68px]" />

          <div className="hidden lg:flex items-center gap-10 text-[18px] font-medium">
            {/* Home */}
            <Link
              href="/"
              className={`flex items-center  gap-2 ${isActive("/") ? "font-semibold text-[#002447] border-b border-[#002447] " : "text-gray-600"}`}
            >
              <House
                size={18}
                className={isActive("/") ? "text-[#002447]]" : ""}
              />
              <p>Home</p>
            </Link>

            {/* About Us */}
            <Link
              href="/about-us"
              className={`flex items-center gap-2 ${isActive("/about-us") ? "font-semibold text-[#002447] border-b border-[#002447]" : "text-gray-600"}`}
            >
              <Building2
                size={18}
                className={isActive("/about-us") ? "text-[#002447]]" : ""}
              />
              <p>About us</p>
            </Link>

            {/* Service */}
            <Link
              href="/service"
              className={`flex items-center gap-2 ${isActive("/service") ? "font-semibold text-[#002447] border-b border-[#002447]" : "text-gray-600"}`}
            >
              <Wrench
                size={18}
                className={isActive("/services") ? "text-[#002447]]" : ""}
              />
              <p>Service</p>
            </Link>

            {/* Contact */}
            <Link
              href="/contact-us"
              className={`flex items-center gap-2 ${isActive("/contact-us") ? "font-semibold text-[#002447] border-b border-[#002447]" : "text-gray-600"}`}
            >
              <Phone
                size={18}
                className={isActive("/contact-us") ? "text-[#002447]]" : ""}
              />
              <p>Contact us</p>
            </Link>
          </div>

           <button className="group hidden lg:flex items-center gap-2 rounded-full cursor-pointer bg-gradient-to-r from-[#011d3b] via-[#002b55] to-[#001024] px-6 py-3 text-white overflow-hidden font-semibold transition-all duration-300 ">
              {" "}
              {/* Text animation window */}{" "}
              <span className="relative h-6 overflow-hidden">
                {" "}
                {/* Original text */}{" "}
                <span className="block transition-transform duration-300 ease-in-out group-hover:translate-y-full">
                  {" "}
                  Book now{" "}
                </span>{" "}
                {/* Incoming text */}{" "}
                <span className="absolute left-0 top-0 block -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                  {" "}
                  Book now{" "}
                </span>{" "}
              </span>{" "}
              {/* Icon */}{" "}
              <ChevronRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />{" "}
            </button>

            <ListFilter className="lg:hidden"/>
        </div>
      </div>
    </>
  );
}

export default Navbar;
