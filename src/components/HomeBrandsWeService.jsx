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

function HomeBrandsWeService() {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11
  ];

  return <>

    <div className="inline-flex w-fit items-center rounded-full bg-gradient-to-r m-auto from-[#1d73a8] via-[#85c1e9d1] to-[#fdfdfd00] px-4 py-1.5 mt-16">
      <div className="h-4 w-4 text-[#0B2545]" />
      <span className="text-sm font-semibold text-[#0B2545]">
        Brands
      </span>
    </div>

    <h1 className="text-4xl font-bold text-[#1b2c46] text-center mt-5">We Repair <br /> What Keeps Your Home Running</h1>
    
    <div className="logos">
      <div className="logos-track">

        {/* First set */}
        <div className="logos-slide">
          {logos.map((logo, index) => (
            <Image
              key={`logo-1-${index}`}
              src={logo}
              alt={`Brand ${index + 1}`}
            />
          ))}
        </div>

        {/* Duplicate set */}
        <div className="logos-slide">
          {logos.map((logo, index) => (
            <Image
              key={`logo-2-${index}`}
              src={logo}
              alt={`Brand ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  </>;
}

export default HomeBrandsWeService;