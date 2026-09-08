import Image from "next/image";
import prLogo from "../assets/pr-logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return<>

  <div className="foooter-main-container bg-[#293235] bg-gradient-to-r from-[#88929dd1] via-[#185fa5d1] to-[#03326fd1]  mt-16 px-15 py-15  flex items-start">

    {/* First Section */}

    <div className="first-section w-[25%] ">
       
       {/* Logo */}
       <div className="logo">
         <Image src={prLogo} className="w-[120px] h-[100px]"/>
       </div>
        
        {/* Content */}
       <div className="content">
         <h1 className="text-white py-4 text-[16px] font-medium">Keeping homes and businesses in <br /> Tempe, AZ comfortable year-round <br /> with dependable heating and coding.</h1>
       </div>

        {/* Icon */}
       <div className="icon flex items-center gap-3 text-white py-8">
        
          <div className="border-2 hover:bg-[#0258D9] hover:border-none rounded-full p-2">
            <FaFacebook className=" cursor-pointer w-7 h-7" /> 
          </div>

          <div className="border-2 hover:bg-[#0258D9] hover:border-none rounded-full p-2">
            <FaInstagram className=" cursor-pointer w-7 h-7" />
          </div>

          <div className="border-2 hover:bg-[#0258D9] hover:border-none rounded-full p-2">
            <FaLinkedin className="cursor-pointer w-7 h-7" />
          </div>

          <div className="border-2 hover:bg-[#0258D9] hover:border-none rounded-full p-2">
            <FaTwitter className="cursor-pointer w-7 h-7" />
          </div>

       </div>

    </div>

    {/* Second Section */}

    <div className="w-[25%] space-y-3 px-20">
      <h1 className="text-2xl font-bold text-white">Quick Links</h1>
      <p className="text-[#B4C1D1] text-sm font-medium cursor-pointer hover:text-white">Home</p>
      <p className="text-[#B4C1D1] text-sm font-medium cursor-pointer hover:text-white">About us</p>
      <p className="text-[#B4C1D1] text-sm font-medium cursor-pointer hover:text-white">Service</p>
      <p className="text-[#B4C1D1] text-sm font-medium cursor-pointer hover:text-white">Contact us</p>
    </div>


    {/* Third Section */}

    <div className="w-[25%] space-y-3 px-20">
      <h1 className="text-2xl font-bold text-white">Our Services</h1>
      <p className="text-[#B4C1D1] text-sm font-medium cursor-pointer hover:text-white">TV Repair</p>
      <p className="text-[#B4C1D1] text-sm font-medium cursor-pointer hover:text-white">Fridge Repair</p>
      <p className="text-[#B4C1D1] text-sm font-medium cursor-pointer hover:text-white">Air Conditioner Repair</p>
      <p className="text-[#B4C1D1] text-sm font-medium cursor-pointer hover:text-white">Washing Machine Repair</p>
    </div>

    {/* Fourth Section */}

    <div className="w-[25%]  space-y-3 px-20">
      <h1 className="text-2xl font-bold text-white">Contact Info</h1>

      <div className="flex items-center gap-2">
        <div className="border-2 border-white rounded-full p-1.5 hover:bg-gray-500 hover:border-none">
          <Phone className="w-4 h-4 text-white cursor-pointer "/>
        </div>
         <p className="text-[#B4C1D1] text-sm font-medium cursor-pointer hover:text-white">+91 987654321</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="border-2 border-white rounded-full p-1.5 hover:bg-gray-500 hover:border-none">
          <Mail  className="w-4 h-4 text-white cursor-pointer"/>
        </div>
        <p className="text-[#B4C1D1] text-sm font-medium cursor-pointer hover:text-white">prhometech@gmail.com</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="border-2 border-white rounded-full p-1.5 hover:bg-gray-500 hover:border-none">
          <MapPin  className="w-4 h-4 text-white cursor-pointer"/>
        </div>
        <p className="text-[#B4C1D1] text-sm font-medium cursor-pointer hover:text-white">No. 24, New Bus Stand Road, Near Gandhi Statue, Pollachi</p>
      </div>
      
    </div>

  </div>
  
  </>
}

export default Footer;

