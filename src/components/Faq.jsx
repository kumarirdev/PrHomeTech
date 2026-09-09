"use client";

import { useState } from "react";
import { Plus, Wrench, Minus } from "lucide-react";

const questions = [
  {
    question: "What is PR Home Tech?",
    answer:
      "PR Home Tech provides dependable repairs for TVs, ACs, fridges, and washing machines from all major brands.",
  },
  {
    question: "How does PR Home Tech work?",
    answer:
      "Book a service, tell us what needs attention, and our technician will arrange a convenient time to inspect and repair it.",
  },
  {
    question: "Is the repair service secure?",
    answer:
      "Yes. We use genuine parts where available and keep you informed before any repair work begins.",
  },
  {
    question: "Can you repair all major brands?",
    answer:
      "Our technicians support all major appliance and electronics brands. Contact us to confirm your model.",
  },
];

function Faq() {
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <>
      <div className="text-center">
        <div className="inline-flex w-fit items-center rounded-full bg-gradient-to-r m-auto from-[#1d73a8] via-[#85c1e9d1] to-[#fdfdfd00] px-5 py-1.5 mt-8 lg:mt-16">
          <span className="text-sm font-semibold text-[#0B2545] w-fit">
            FAQ
          </span>
        </div>
      </div>

      <h1 className="faq-title text-[22px] lg:text-4xl font-extrabold lg:font-bold text-center text-[#1b2c46] mt-5">
        Your Questions,
      </h1>
      <h1 className="faq-title text-[22px] lg:text-4xl font-extrabold lg:font-bold font-bold text-center text-[#1b2c46]">
        Our Clear Answers
      </h1>

      <section className="main-container faq-section px-4 lg:px-15">
        <div className="faq-container flex gap-10 items-start justify-between w-full mt-10">
          <div className="faq-intro hidden lg:block w-[50%] mt-15">
            <p className="faq-eyebrow bg-gray-100 w-fit py-2 px-5 rounded-full text-[#0236A4] font-semibold">
              Frequently asked questions
            </p>
            <h2 className="faq-heading text-[60px] font-semibold text-[#1b2c46]">
              Frequently asked
            </h2>
            <h2 class="text-[#0236A4] -mt-6 faq-heading text-[60px] font-semibold">
              questions
            </h2>
            <p className="faq-description text-md mt-2 text-[#77757f]">
              Choose the right service for your home and budget. No hidden fees,
              no surprises, <br /> just straightforward support from a team you
              can trust.
            </p>
          </div>

          <div className="grid gap-4 w-[100%]  lg:w-[50%] ">
            {questions.map((item, index) => {
              const isOpen = openQuestion === index;

              return (
                <div
                  className={`overflow-hidden rounded-[18px]  border border-[#e5e3eb]  ${
                    isOpen ? "bg-[#002850] " : ""
                  }`}
                  key={item.question}
                >
                  <button
                    className={`flex min-h-[68px] w-full cursor-pointer items-center justify-between border-0 bg-transparent px-5 py-[18px] text-left text-[20px] font-semibold ] ${isOpen ? "text-white " : "text-[#18171e"}   `}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <div
                      className={`w-8 rounded-full flex items-center justify-center  h-8  ${isOpen ? "bg-white text-[#002850]" : " bg-[#002850] text-white "} `}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  {isOpen && (
                    <p
                      className="mx-5 mb-[22px] mt-[-2px] max-w-[650px] text-lg leading-[1.55] text-white"
                      id={`faq-answer-${index}`}
                    >
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
