"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "Excellent service! The technician arrived on time and fixed my TV quickly. Very professional and reliable service.",
    name: "Arun Kumar",
    role: "TV Service",
    image: "/images/user2.jpg",
  },
  {
    text: "I had an issue with my AC and the team solved it perfectly. The service was quick, clean and affordable.",
    name: "Priya S",
    role: "AC Service",
    image: "/images/user2.jpg",
  },
  {
    text: "Very happy with their refrigerator repair service. The technician explained everything clearly and did a great job.",
    name: "Rahul M",
    role: "Fridge Service",
    image: "/images/user3.jpg",
  },
  {
    text: "Great experience from booking to repair. Professional technicians and excellent customer support.",
    name: "Divya R",
    role: "Washing Machine Service",
    image: "/images/user4.jpg",
  },
  {
    text: "Fast response and reasonable pricing. My appliance was repaired perfectly. Highly recommended.",
    name: "Suresh K",
    role: "Home Appliance Service",
    image: "/images/user5.jpg",
  },
];

function AboutUsTestimonialSection() {
  return <>

  <div className="inline-flex w-fit items-center mt-15 rounded-full bg-gradient-to-r m-auto from-[#1d73a8] via-[#85c1e9d1] to-[#fdfdfd00] px-4 py-1.5">
      <div className="h-4 w-4 text-[#0B2545]" />
      <span className="text-sm font-semibold text-[#0B2545]">
        Testimonials
      </span>
    </div>

  <section className="main-container px-6 md:px-12 lg:px-16 mt-5">
  
        {/* Heading */}
        <div className="mb-10 text-center">
  
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mt-2">
            What Our Customers Say
          </h2>
        </div>
  
        {/* Swiper */}
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          initialSlide={1}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-swiper !pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="!h-auto">
  
              <div
                className="
                  testimonial-card
                  flex h-full min-h-[280px]
                  flex-col justify-between
                  rounded-3xl
                  border border-gray-200
                  bg-white
                  p-7
                  shadow-sm
                  transition-all duration-300
                "
              >
  
                {/* Stars */}
                <div>
                  <div className="mb-5 flex gap-1 text-yellow-400 text-lg">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
  
                  {/* Quote */}
                  <p className="text-[15px] leading-7 text-gray-600">
                    “{testimonial.text}”
                  </p>
                </div>
  
                {/* User */}
                <div className="mt-7 flex items-center gap-3">
  
                  <div className="h-11 w-11 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={44}
                      height={44}
                      className="h-full w-full object-cover"
                    />
                  </div>
  
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
  
                    <p className="text-sm text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
  
                </div>
  
              </div>
  
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
  
  </>
    
}

export default AboutUsTestimonialSection;