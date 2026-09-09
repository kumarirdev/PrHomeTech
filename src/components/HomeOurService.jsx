"use client";
import { motion } from "motion/react";

import {
  AirVent,
  Award,
  BadgeDollarSign,
  ClipboardList,
  Refrigerator,
  TvMinimal,
  UsersRound,
  WashingMachine,
  BadgeCheck,
  IndianRupee,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import acRepair from "../assets/ac-repair.jpeg";
import acRepair2 from "../assets/acRepair2.jpeg";
import tvRepair from "../assets/tv-repair.jpeg";
import tvRepair2 from "../assets/tvRepair2.jpeg";
import fridgeRepair from "../assets/fridge-repair.jpeg";
import washingMachineRepair from "../assets/washing-machine-repair.jpeg";
import washingMachineRepair2 from "../assets/washingMachineRepair2.jpeg";
import Image from "next/image";
import AnimatedContainer from "./AnimatedContainer";

function HomeOurService() {
  return (
    <>
      <AnimatedContainer>
        <div className="text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r m-auto from-[#1d73a8] via-[#85c1e9d1] to-[#fdfdfd00] px-4 py-1.5 mt-6 lg:mt-16">
            <span className="text-sm font-semibold text-[#0B2545]">
              Our Services
            </span>
          </div>

          <h1 className="text-[20px] lg:text-4xl font-bold text-[#1b2c46] text-center mt-5">
            We Repair <br /> What Keeps Your Home Running
          </h1>
        </div>
      </AnimatedContainer>

      {/*---------------------------------------- Hero Section-------------------------------- */}

      <AnimatedContainer>
        {/* Mobile Responsive */}

        <div className="second-section w-full mt-6 px-4 lg:hidden">
          {/* first-section */}

          <div className="first-section gap-2 flex items-start ">
            <div className="w-[65%]">
              <Image
                src={acRepair}
                alt="AC Repair"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>

            <div className="w-[35%] h-38">
              <Image
                src={fridgeRepair}
                alt="TV Repair"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          </div>

          {/* second-section */}

          <div className="second-section gap-2 flex items-start mt-2">
            <div className="w-[25%] h-32">
              <Image
                src={washingMachineRepair}
                alt="AC Repair"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>

            <div className="w-[36%] h-26">
              <Image
                src={tvRepair2}
                alt="TV Repair"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>

            <div className="w-[34%] h-49 pl-0.5">
              <Image
                src={acRepair2}
                alt="TV Repair"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          </div>

          {/* third-section */}

          <div className="third-section gap-2 flex items-start ">
            <div className="w-[25%] h-15 mt-[-59px]">
              <Image
                src={tvRepair}
                alt="AC Repair"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>

            <div className="w-[35%]  mt-[-83px] ">
              <Image
                src={washingMachineRepair2}
                alt="TV Repair"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        <div className="main-container flex items-center gap-14 mx-4 lg:mx-16 mt-4 lg:mt-15 ">
          {/* LEFT SECTION */}
          <div
            className="
      first-section
      grid grid-cols-1
      md:grid-cols-2
      lg:flex lg:w-[50%]
      lg:divide-x lg:divide-stone-400
    "
          >
            {/* FIRST COLUMN */}
            <div className="first-card grid gap-0 lg:pr-10">
              {/* Competitive Pricing */}
              <div className="flex items-start gap-5  lg:border-b lg:border-stone-400 py-4 lg:py-8">
                <IndianRupee
                  className="mt-1 h-10 w-10 shrink-0 text-[#0236A4]"
                  strokeWidth={1.7}
                />

                <div>
                  <h2 className="text-xl font-bold text-[#121D2D]">
                    Competitive Pricing
                  </h2>

                  <p className="mt-3 max-w-xs text-md leading-6 text-[#2F3E50]">
                    Experience quality without breaking the bank-we offer fair
                    and competitive pricing.
                  </p>
                </div>
              </div>

              {/* Certified Experts */}
              <div className="flex items-start gap-5 py-4 lg:py-8">
                <Award
                  className="mt-1 h-10 w-10 shrink-0 text-[#0236A4]"
                  strokeWidth={1.7}
                />

                <div>
                  <h2 className="text-xl font-bold text-[#121D2D]">
                    Certified Experts
                  </h2>

                  <p className="mt-3 max-w-xs text-md leading-6 text-[#2F3E50]">
                    Choose Razor for proven excellence backed by certified
                    professionals.
                  </p>
                </div>
              </div>
            </div>

            {/* SECOND COLUMN */}
            <div className="second-card grid  gap-0 lg:pl-10">
              {/* Easy Financing */}
              <div className="flex items-start gap-5 lg:border-b lg:border-stone-400 py-4 lg:py-8">
                <ClipboardList
                  className="mt-1 h-10 w-10 shrink-0 text-[#0236A4]"
                  strokeWidth={1.7}
                />

                <div>
                  <h2 className="text-xl font-bold text-[#121D2D]">
                    Easy Financing
                  </h2>

                  <p className="mt-3 max-w-xs text-md leading-6 text-[#2F3E50]">
                    Don't let budget constraints stop you-explore our
                    hassle-free financing options.
                  </p>
                </div>
              </div>

              {/* 100% Satisfaction */}
              <div className="flex items-start gap-5 py-4 lg:py-8">
                <UsersRound
                  className="mt-1 h-10 w-10 shrink-0 text-[#0236A4]"
                  strokeWidth={1.7}
                />

                <div>
                  <h2 className="text-xl font-bold text-[#121D2D]">
                    100% Satisfaction
                  </h2>

                  <p className="mt-3 max-w-xs text-md leading-6 text-[#2F3E50]">
                    Don't just take our word for it-see what Homepro Saskatoon
                    say about Razor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="second-section hidden lg:block w-[50%] h-[470px] relative">
            {/* AC REPAIR */}
            <div className="w-[450px] h-[350px] border-2 border-gray-200 bg-gray-200 p-1 rounded-xl absolute right-0">
              <Image
                src={acRepair}
                alt="AC Repair"
                className="w-full h-full rounded-xl"
              />
            </div>

            {/* TV REPAIR */}
            <div className="w-[210px] h-[180px] border-2 border-gray-200 bg-gray-200 p-1 rounded-xl absolute top-72 left-85">
              <Image
                src={tvRepair}
                alt="TV Repair"
                className="w-full h-full rounded-xl"
              />
            </div>

            {/* FRIDGE REPAIR */}
            <div className="w-[300px] h-[240px] border-2 border-gray-200 bg-gray-200 p-1 rounded-xl absolute top-50 left-10">
              <Image
                src={fridgeRepair}
                alt="Fridge Repair"
                className="w-full h-full rounded-xl"
              />
            </div>

            {/* WASHING MACHINE REPAIR */}
            <div className="w-[200px] h-[200px] border-2 border-gray-200 bg-gray-200 p-1 rounded-xl absolute top-10 left-20">
              <Image
                src={washingMachineRepair}
                alt="Washing Machine Repair"
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </AnimatedContainer>
    </>
  );
}

export default HomeOurService;
