import Image from 'next/image'
import logoImage from '../assets/logo.jpeg'
import { Building2, Wrench, Phone, House, UserRoundCog, } from "lucide-react";

function Navbar() {
  return <>

  <div className="w-full h-[73px] border-b border-gray-300 px-15 flex items-center justify-between sticky top-0 bg-white z-20">
        <Image src={logoImage} className="w-[80px] h-[68px]"/>

    <div className="flex items-center gap-10 text-[18px]">
        
        <div className="flex items-center gap-2">
            <House size={18} className="text-[#0236A4] font-medium"/>
            <p className="text-[#0236A4] font-medium">Home</p>   
        </div>

        <div className="flex items-center gap-2">
            <Building2 size={18} />
            <p>About us</p> 
        </div>  
        
        <div className="flex items-center gap-2">
             <Wrench size={18} />
            <p>Service</p>
        </div>

        <div className="flex items-center gap-2">
             <UserRoundCog size={18} />
            <p>Our Technicians</p>
        </div>

        <div className="flex items-center gap-2">
             <Phone size={18} />
            <p>Contact us</p>
        </div>

    </div>

    <button className="bg-[#0236A4] text-white px-7 py-2 rounded-full font-medium">Book Now</button>

  </div>
  
  </>
}

export default Navbar;