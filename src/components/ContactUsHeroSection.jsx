import Image from "next/image";
import bgImg from "../assets/ac-bg.webp";

function ContactUsHeroSection() {
  return (
    <>
      <div className="main-container h-100 relative ">
        <div className="img-container h-full ">
          <Image src={bgImg} className="h-full object-cover"/>
          <div className="tint absolute inset-0 bg-gradient-to-r from-[#011d3b]/80 via-[#002b55]/80 to-[#001024]/80"></div>
        </div>
        <div className="cotnent-container absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-[65px] font-bold  text-center  text-white">
            Appliance Problems?
          </h1>
          <h1 className="text-[65px] font-bold text-center text-white mt-[-20px]">
            We’re Here.
          </h1>
          <div className="text-center mt-5 text-white text-xl w-[90%]  m-auto">
            <p>
              Need help with your home appliance? Get in touch with PR Home Tech
              for quick support, expert repairs, and dependable service you can
              trust.
            </p>
          </div>

          <div className="text-center mt-5">
            <button className="bg-[#0236A4] text-white px-7 py-2 rounded-full font-medium cursor-pointer">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsHeroSection;
