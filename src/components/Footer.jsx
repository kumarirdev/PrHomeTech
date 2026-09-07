import Image from "next/image";
import prLogo from "../assets/pr-logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return<>

  <div className="main-container bg-[#293235]  w-full mt-16">

    <div className="logo-container">

      <div className=" px-15 py-8 flex items-center justify-between">
      <Image src={prLogo} className="w-[80px] h-[68px]" />

       <div className="flex items-center gap-5 text-white">
         <FaFacebook className="hover:text-[#0258D9] cursor-pointer w-5 h-5" />
         <FaInstagram className="hover:text-[#0258D9] cursor-pointer w-5 h-5" />
         <FaLinkedin className="hover:text-[#0258D9] cursor-pointer w-5 h-5" />
         <FaTwitter className="hover:text-[#0258D9] cursor-pointer w-5 h-5" />
       </div>
      </div>
    </div>

    <div className="content-container px-40 mb-5 flex items-start gap-25 m-auto w-fit">

      <div className="first-container">
        <h1 className="text-xl font-semibold text-[#0258D9]">Solutions</h1>
        <div className="space-y-1 mt-3">
          <p className="text-[#bec2c2]/60 font-medium text-md hover:text-white cursor-pointer">Industries</p>
          <p className="text-[#bec2c2]/60 font-medium text-md hover:text-white cursor-pointer">Terms of Service</p>
          <p className="text-[#bec2c2]/60 font-medium text-md hover:text-white cursor-pointer">Privacy Policy</p>
          <p className="text-[#bec2c2]/60 font-medium text-md hover:text-white cursor-pointer">MCA</p>
        </div>
      </div>

      <div className="second-container">
        <h1 className="text-xl font-semibold text-[#0258D9]">Company</h1>
        <div className="space-y-1 mt-3">
          <p className="text-[#bec2c2]/60 font-medium text-md hover:text-white cursor-pointer">Join our Team</p>
          <p className="text-[#bec2c2]/60 font-medium text-md hover:text-white cursor-pointer">Hire us</p>
          <p className="text-[#bec2c2]/60 font-medium text-md hover:text-white cursor-pointer">Careers</p>
        </div>
      </div>

      <div className="third-container">
        <h1 className="text-xl font-semibold text-[#0258D9]">Resources</h1>
        <div className="space-y-1 mt-3">
          <p className="text-[#bec2c2]/60 font-medium text-md hover:text-white cursor-pointer">Blog</p>
          <p className="text-[#bec2c2]/60 font-medium text-md hover:text-white cursor-pointer">Dropdown</p>
        </div>
      </div>

      <div className="fourth-container">
        <h1 className="text-xl font-semibold text-[#0258D9]">Support</h1>
        <div className="space-y-1 mt-3">
          <p className="text-[#bec2c2]/60 font-medium text-md hover:text-white cursor-pointer">Help Center</p>
          <p className="text-[#bec2c2]/60 font-medium text-md hover:text-white cursor-pointer">API Docs</p>
          <p className="text-[#bec2c2]/60 font-medium text-md hover:text-white cursor-pointer">Ticket System</p>
          <p className="text-[#bec2c2]/60 font-medium text-md hover:text-white cursor-pointer">Status Page</p>
          <p className="text-[#bec2c2]/60 font-medium text-md hover:text-white cursor-pointer">Contacts</p>
        </div>
      </div>

      <div className="fifth-container">
        <h1 className="text-xl font-semibold text-[#0258D9]">Contacts</h1>
        <div className="space-y-1 mt-3">
          <p className="text-[#bec2c2]/60 font-medium text-md hover:text-white cursor-pointer">Join our Team</p>
          <p className="text-[#bec2c2]/60 font-medium text-md hover:text-white cursor-pointer">Hire us</p>
          <p className="text-[#bec2c2]/60 font-medium text-md hover:text-white cursor-pointer">Careers</p>
        </div>
      </div>

    </div>


  </div>
  
  </>
}

export default Footer;

