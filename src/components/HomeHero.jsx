"use client"

import logoImage from "../assets/logo.jpeg";
import Hero1 from "../assets/HeroImg-1.svg"
import Hero2 from "../assets/HeroImg-2.svg"
import Hero3 from "../assets/HeroImg-3.svg"
import Hero4 from "../assets/HeroImg-4.svg"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';
import Image from "next/image"
import { Check, Phone, ChevronRight  } from "lucide-react";

function HomeHero() {
  return<>

  <div className="main-container h-[656px] relative">

    <Swiper  modules={[Navigation, Autoplay]} autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
         className="mySwiper">
        <SwiperSlide>
          <Image src={Hero1} className="h-[100%] w-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Hero2} className="h-[100%] w-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Hero3} className="h-[100%] w-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Hero4} className="h-[100%] w-[100%]" />
        </SwiperSlide>
      </Swiper>

      <div className="tint bg-black/80 absolute inset-0 z-10"></div>

      <div className="content-container text-white w-[60%]  p-2 text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
        <div className="flex items-center bg-gray-300/20 w-fit rounded-full px-3 py-1 gap-4 m-auto">
          <Image src={logoImage} className="w-8 h-8 rounded-full"/>
          <p className="text-white font-medium text-sm">Reliable Repairs. Lasting Comfort.</p>
        </div>

        <div className="content w-full">
          <h1 className="text-[50px] font-bold w-[95%] m-auto">Trusted Experts Keeping Your Home Appliances Working Perfectly</h1>
          <h1 className="text-[18px] text-gray-200 mt-5">We are a reliable home appliance service company dedicated to providing fast, professional, and affordable repair solutions. From air conditioners and washing machines to other essential appliances, our skilled technicians ensure quality service and lasting results right at your doorstep.</h1>
        </div>

        <div className="check-box-containe grid grid-cols-2 w-fit mt-7 flex items-center gap-7 m-auto">

          <div className="w-fit flex items-center gap-3">
            <Check className="bg-white text-black w-fit  rounded-sm"/>
            <p>Licensed & Insured</p>
          </div>

          <div className="w-fit flex items-center gap-3">
            <Check className="bg-white text-black w-fit rounded-sm"/>
            <p>Financing Available</p>
          </div>

          <div className="w-fit flex items-center gap-3">
            <Check className="bg-white text-black w-fit rounded-sm"/>
            <p>Certified Technicians</p>
          </div>

          <div className="w-fit flex items-center gap-3">
            <Check className="bg-white text-black w-fit rounded-sm"/>
            <p>Home Warranty Support</p>
          </div>

        </div>

        <div className="button mt-10 w-fit m-auto flex items-center gap-5">

                <button className="group flex items-center gap-3 rounded-full cursor-pointer bg-[#0236A4] px-6 py-3 text-white overflow-hidden transition-all duration-300 hover:bg-blue-700">  {/* Text animation window */} <span className="relative h-6 overflow-hidden">  {/* Original text */} <span className="block transition-transform duration-300 ease-in-out group-hover:translate-y-full"> Book a Service </span>  {/* Incoming text */} <span className="absolute left-0 top-0 block -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"> Book a Service </span>  </span>  {/* Icon */} <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />  </button>

                
                  <div className="group flex items-center gap-3 w-fit rounded-full px-5 py-2 bg-white cursor-pointer overflow-hidden">
                    {/* Phone Icon */}
                    
                    <Phone className="w-5 text-[#0236A4] transition-transform duration-300 group-hover:translate-x-1" />

                    {/* Phone Number Animation */}

                    <span className="relative h-7 overflow-hidden">
                    {/* Original Number */}
                    <span className="block text-lg font-semibold text-[#0236A4] transition-transform duration-300 ease-in-out group-hover:translate-y-full"> +91 987654321</span>

                    {/* Incoming Number */}
                    <span className="absolute left-0 top-0 block text-lg font-semibold text-[#0236A4] -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"> +91 987654321</span>
                    </span>
                 </div>



        </div>

      </div>

  </div>


  </>
}

export default HomeHero;