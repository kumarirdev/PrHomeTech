"use client";

import {
  UserRound,
  Settings,
  Zap,
  CalendarCheck,
  UserRoundCog,
  CircleCheckBig,
} from "lucide-react";

function HomeProcessSection() {
  return (
    <>
      <div className="text-center">
        <div className="inline-flex w-fit items-center rounded-full bg-gradient-to-r m-auto from-[#1d73a8] via-[#85c1e9d1] to-[#fdfdfd00] px-5 py-1.5 mt-8 lg:mt-16">
          <span className="text-[22px] lg:text-4xl font-extrabold lg:font-bold text-[#0B2545]">
            Simple Process
          </span>
        </div>
      </div>

      <section className="w-full bg-white mt-5  lg:px-15">
        <div className="mx-auto  ">
          {/* Heading */}
          <div className="mb-6 lg:mb-16 text-center ">
            <h2 className="text-[20px] lg:text-4xl font-bold  tracking-tight text-[#1b2c46] sm:text-4xl">
              How the <br></br> process works
            </h2>
          </div>

          {/* Process - section */}

          <div className="relative ">
            {/* first curve */}
            <div className="the-curve hidden lg:absolute left-[24%] top-[55px]  h-[100px] w-[18%] ">
              <svg
                viewBox="0 0 300 100"
                className="h-full w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 10 25 Q 150 110 290 25"
                  fill="none"
                  stroke="#0258D9"
                  strokeWidth="2"
                  strokeDasharray="7 10"
                />
              </svg>
            </div>

            {/* second curve  */}
            <div className="the-curve hidden lg:absolute left-[58%] top-[55px]   h-[100px] w-[18%]  rotate-180">
              <svg
                viewBox="0 0 300 100"
                className="h-full  w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 10 25 Q 150 110 290 25"
                  fill="none"
                  stroke="#0258D9"
                  strokeWidth="2"
                  strokeDasharray="7 10"
                />
              </svg>
            </div>

            {/* round section */}
            <div className="relative z-10 grid lg:grid-cols-3 gap-8 ">
              {/* STEP 1 */}
              <div className="relative flex flex-col items-center text-center ">
                <div className="round border h-48 w-48 flex items-center justify-center rounded-full border-dashed border-gray-400">
                  <div className="flex h-[60%] w-[60%] items-center justify-center rounded-full border border-dashed border-gray-200 bg-[#0258D9]/20">
                    <CalendarCheck className="text-[#0258D9]" size={34} />
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-bold lg:font-semibold text-[#1b2c46]">
                  Book a Service
                </h3>
                <h1 className="text-[#617288] mt-1 text-lg w-[90%] ">
                  Choose your appliance, describe the issue, and book a service
                  at your convenient time.
                </h1>
              </div>

              {/* STEP 2 */}

              <div className="relative flex flex-col items-center text-center ">
                <div className="round border h-48 w-48 flex items-center justify-center rounded-full border-dashed border-gray-400">
                  <div className="flex h-[60%] w-[60%] items-center justify-center rounded-full border border-dashed border-gray-200 bg-[#0258D9]/20">
                    <UserRoundCog className="text-[#0258D9]" size={34} />
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-bold lg:font-semibold text-[#1b2c46]">
                  Technician Visits You
                </h3>
                <h1 className="text-[#617288] mt-1 text-lg w-[90%] ">
                  A skilled technician visits your doorstep, inspects the
                  appliance, and identifies the problem.
                </h1>
              </div>

              {/* STEP 3 */}
              <div className="relative flex flex-col items-center text-center ">
                <div className="round border h-48 w-48 flex items-center justify-center rounded-full border-dashed border-gray-400">
                  <div className="flex h-[60%] w-[60%] items-center justify-center rounded-full border border-dashed border-gray-200 bg-[#0258D9]/20">
                    <CircleCheckBig className="text-[#0258D9]" size={34} />
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-bold lg:font-semibold text-[#1b2c46]">
                  Get It Fixed
                </h3>
                <h1 className="text-[#617288] mt-1 text-lg w-[90%]">
                  Get reliable repairs with quality service and enjoy your
                  appliance working smoothly again.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeProcessSection;
