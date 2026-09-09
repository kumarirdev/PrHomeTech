"use client";

import Image from "next/image";
import logo1 from '../assets/logo-1.jpeg'
import logo2 from '../assets/logo-2.jpeg'
import logo3 from '../assets/logo-3.jpeg'
import logo4 from '../assets/logo-4.jpeg'
import logo5 from '../assets/logo-5.jpeg'
import logo6 from '../assets/logo-6.jpeg'
import logo7 from '../assets/logo-7.jpeg'
import logo8 from '../assets/logo-8.jpeg'
import logo9 from '../assets/logo-9.jpeg'
import logo10 from '../assets/logo-10.jpeg'
import logo11 from '../assets/logo-11.jpeg'
import AnimatedContainer from "./AnimatedContainer";

function HomeBrandsWeService() {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo8,
    logo9,
    logo10,
    logo11
  ];

  return <>

    <div className="text-center">
      <div className="inline-flex w-fit items-center rounded-full  bg-gradient-to-r m-auto from-[#1d73a8] via-[#85c1e9d1] to-[#fdfdfd00] px-4 py-1.5 mt-16">
        <span className="text-sm font-semibold text-[#0B2545] w-fit">
           Brands
        </span>
      </div>

      <h1 className="text-[20px] lg:text-4xl font-bold text-[#1b2c46] text-center mt-5">We Repair <br /> What Keeps Your Home Running</h1>
    </div>
    

    <div className="logos">
      <div className="logos-track">

        {/* First set */}
        <div className="logos-slide ">
          {logos.map((logo) => (
            <Image
            className="border lg:h-[70px] h-[30px] w-[80px] lg:w-[130px] "
              src={logo}
            />
          ))}
        </div>

        {/* Duplicate set */}
        <div className="logos-slide">
          {logos.map((logo) => (
            <Image
            className="border lg:h-[70px] h-[30px] w-[80px] lg:w-[130px]"
              src={logo}

            />
          ))}
        </div>

      </div>
    </div>
  </>;
}

export default HomeBrandsWeService;