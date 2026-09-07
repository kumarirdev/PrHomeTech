"use client";

import {
  Clock3,
  ShieldCheck,
  BadgeCheck,
  Headphones,
  Phone,
} from "lucide-react";
import Image from "next/image";
import aboutUsImg from "../assets/aboutUs-img.jpeg";

export default function AboutUs() {
  const tabs = [
    { title: "24/7 Customer Support", icon: Headphones },
    { title: "Service Warranty", icon: ShieldCheck },
    { title: "Certified Technicians", icon: BadgeCheck },
    { title: "Fast & Reliable Service", icon: Clock3 },
  ];

  return (
    <>

    <div className="inline-flex w-fit items-center rounded-full bg-gradient-to-r m-auto from-[#1d73a8] via-[#85c1e9d1] to-[#fdfdfd00] px-5 py-1.5 mt-10">
        <span className="text-sm font-semibold text-[#0B2545]">
          About us
        </span>
      </div>

      <h1 className="faq-title text-4xl font-bold text-center text-[#1b2c46] mt-5">
        Expert Service,
      </h1>
      <h1 className="faq-title text-4xl font-bold text-center text-[#1b2c46]">
        Honest Solutions.
      </h1>

      <div className="main-container grid grid-cols-12 gap-12 mx-15 mt-10">
        <div className="first-container col-span-7">
          <div className="img-container w-full relative">
            <Image
              src={aboutUsImg}
              className="w-full rounded-lg border border-gray-300 "
            />

            <div className="content-container bg-white w-1/2 h-[90%] rounded-bl-xl  absolute top-0 right-0 p-4">
              <h1 className="font-semibold text-xl text-[#0276ef] ">
                About PR Home Tech
              </h1>
              <h1 className="text-[15px] mt-2 text-[#617288] font-medium">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
                dolores! Modi, est totam corrupti ut id excepturi numquam. Quam
                temporibus nobis dolores sequi mollitia enim provident
                consectetur! Nihil illum.. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Ab, dolores! Modi, est totam
                corrupti ut id excepturi numquam. Quam temporibus nobis dolores
                sequi mollitia enim provident consectetur! Nihil illum..
              </h1>
              <button className="bg-[#0236a4] mt-3 text-white px-3 py-2 rounded-full flex items-center gap-2">
                <span>
                  <Phone size={14} />
                </span>
                Book a call{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="second-container col-span-5 bg-linear-to-r relative from-[#0278ef] rounded-xl text-white to-[#0236a4] p-6">
          <h1 className="font-bold text-5xl w-[94%]">
            Bringing Comfort, Care, and Reliability Back to Every Home
          </h1>
          <div className="bottom-container absolute bottom-3 left-4 flex gap-2 items-center flex-wrap">
            {tabs.map((item)=>{
              const Icon = item.icon
              return <div className="flex items-center gap-2 py-2 px-3 rounded-full bg-white/20  ">
                  <Icon size={16}/>
                  <p>{item.title}</p>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
}