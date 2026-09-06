import Image from 'next/image'
import bgImg1 from '../assets/bgImg1.jpeg'


function HomeHero() {
  return <>

  <div className="home-hero-main-container w-full relative">

    <div className="image-container w-full">
      <Image src={bgImg1} className="w-full h-[660px]"/>

    </div>

    <div className="content-container w-fit absolute top-9 left-16">
      <h1 className="text-[65px] font-bold text-white">Reliable Repairs.</h1>
      <h1 className="text-[65px] font-bold text-white mt-[-25px]">Happy Homes.</h1>
      <h1 className="text-[65px] font-bold text-[#0278EF] mt-[-25px]">Every Time!</h1>
      <p className="text-[20px] font-medium text-gray-200 mt-2">We specialize in repairing TVs, ACs, Fridges, and </p>
      <p className="text-[20px] font-medium text-gray-200">Washing Machine of all major brands. Fast service,</p>
      <p className="text-[20px] font-medium text-gray-200">genuine parts, and expert care you can trust.</p>

      <button className="text-[18px] text-white bg-[#0236A4] px-10 py-3.5 rounded-full mt-5 font-medium">Book a Service</button>
    
    </div>


  </div>
  
  
  </>
}

export default HomeHero;