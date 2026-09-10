import Image from "next/image";
import prLogo from "../assets/pr-logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return<>

  <div className="foooter-main-container  bg-gradient-to-r from-[#011d3b] via-[#002b55] to-[#001024]  px-4 lg:px-15 py-15 grid grid-cols-12 lg:grid-cols-12 gap-5 lg:gap-12 mt-8 lg:mt-16 ">

    {/* First Section */}

    <div className="first-section col-span-12 lg:col-span-3 mb-4 lg:mb-0 ">
       
       {/* Logo */}
       <div className="logo">
         <Image src={prLogo} className="w-[120px] h-[100px]"/>
       </div>
        
        {/* Content */}
       <div className="content">
         <h1 className="text-[#B4C1D1] py-4 text-md md:text-lg font-medium">Keeping homes and businesses in  Tempe, AZ comfortable year-round  with dependable heating and coding.</h1>
       </div>

        {/* Icon */}
       <div className="icon hidden lg:flex items-center gap-1 text-white  ">
        
          <div className=" hover:bg-[#0258D9] hover:border-none rounded-full p-2">
            <FaFacebook className=" cursor-pointer w-7 h-7" /> 
          </div>

          <div className=" hover:bg-[#0258D9] hover:border-none rounded-full p-2">
            <FaInstagram className=" cursor-pointer w-7 h-7" />
          </div>

          <div className=" hover:bg-[#0258D9] hover:border-none rounded-full p-2">
            <FaLinkedin className="cursor-pointer w-7 h-7" />
          </div>

          <div className=" hover:bg-[#0258D9] hover:border-none rounded-full p-2">
            <FaTwitter className="cursor-pointer w-7 h-7" />
          </div>

       </div>

    </div>

    {/* Second Section */}

    <div className=" space-y-3  lg:text-lg col-span-6 lg:col-span-3  ">
      <h1 className=" text-lg lg:text-2xl font-bold text-white">Quick Links</h1>
      <p className="text-[#B4C1D1]  font-medium cursor-pointer hover:text-white">Home</p>
      <p className="text-[#B4C1D1]  font-medium cursor-pointer hover:text-white">About us</p>
      <p className="text-[#B4C1D1]  font-medium cursor-pointer hover:text-white">Service</p>
      <p className="text-[#B4C1D1]  font-medium cursor-pointer hover:text-white">Contact us</p>
    </div>


    {/* Third Section */}

    <div className=" space-y-3 lg:text-lg col-span-6 lg:col-span-3 ">
      <h1 className=" text-lg lg:text-2xl font-bold text-white">Our Services</h1>
      <p className="text-[#B4C1D1]  font-medium cursor-pointer hover:text-white">TV Repair</p>
      <p className="text-[#B4C1D1]  font-medium cursor-pointer hover:text-white">Fridge Repair</p>
      <p className="text-[#B4C1D1]  font-medium cursor-pointer hover:text-white">Air Conditioner Repair</p>
      <p className="text-[#B4C1D1]  font-medium cursor-pointer hover:text-white">Washing Machine Repair</p>
    </div>

    {/* Fourth Section */}

    <div className="space-y-3 col-span-12 lg:col-span-3">
      <h1 className="lg:text-2xl font-bold text-white ">Contact Info</h1>

      <div className="flex items-center lg:text-lg gap-2  ">
        <div className=" border-white rounded-full p-1.5 hover:bg-gray-500 hover:border-none">
          <Phone className="w-6 h-6 text-lg text-[#B4C1D1] cursor-pointer "/>
        </div>
         <p className="text-[#B4C1D1] font-medium cursor-pointer hover:text-white">+91 9876543210</p>
      </div>

      <div className="flex items-center gap-2">
        <div className=" border-white rounded-full p-1.5 hover:bg-gray-500 hover:border-none">
          <Mail  className="w-6 h-6 text-[#B4C1D1] cursor-pointer"/>
        </div>
        <p className="text-[#B4C1D1] font-medium text-lg cursor-pointer hover:text-white">prhometech@gmail.com</p>
      </div>

      <div className="flex items-center gap-2">
        <div className=" border-white rounded-full p-1.5 hover:bg-gray-500 hover:border-none">
          <MapPin  className="w-6 h-6 text-[#B4C1D1] cursor-pointer"/>
        </div>
        <p className="text-[#B4C1D1] font-medium text-lg cursor-pointer hover:text-white">No. 24, New Bus Stand Road, Near Gandhi Statue, Pollachi</p>
      </div>
      
    </div>

  </div>
  
  </>
}

export default Footer;

