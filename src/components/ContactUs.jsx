import Image from "next/image";
import img from "../assets/contactUsImg.webp";
import { Map, MapIcon, MapPin, Phone, PhoneCall, User } from "lucide-react";
function ContactUs() {
  return (
    <>
      <div className="main-container mt-15 grid grid-cols-12 gap-10 mx-15 relative">
        <div className="col-span-4 flex flex-col">
          <div className="heading">
            <h1 className="text-[22px] lg:text-4xl font-extrabold lg:font-bold text-[#1b2c46]">
              Get In Touch
            </h1>

            <p className="w-[90%] text-gray-500 mt-2">
              Have an appliance problem? Share your request and our team will
              get in touch with you soon.
            </p>

            <div className="location-container space-y-6 mt-6">
              {/* Location */}
              <div className="flex gap-3">
                <div className="icon bg-[#0236A4] rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  <MapPin className="w-[70%] h-[70%] text-white" />
                </div>

                <div className="content-container">
                  <h1 className="text-[#0236A4] font-semibold text-lg">
                    Our Service Location
                  </h1>

                  <div className="flex items-center gap-2">
                    <Map size={14} className="text-gray-600" />
                    <h1 className="text-gray-600">
                      Pollachi, Tamilnadu, - 123456
                    </h1>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex gap-3">
                <div className="icon bg-[#0236A4] rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  <Phone className="w-[65%] h-[65%] text-white" />
                </div>

                <div className="content-container">
                  <h1 className="text-[#0236A4] font-semibold text-lg">
                    Contact Us
                  </h1>

                  <div className="flex items-center gap-2">
                    <PhoneCall size={14} className="text-gray-600" />
                    <h1 className="text-gray-600">+91 XXXXX XXXXX</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="img-container relative mt-4 flex-1 min-h-0">
            <Image
              src={img}
              alt="Home appliance repair service"
              fill
              className="object-cover rounded-lg"
            />

            <div className="absolute inset-0 bg-blue-700/20 rounded-lg"></div>
          </div>
        </div>

        {/* Input-Section */}

        <div
          className="
    contact-us-form-container
    col-span-8
    rounded-lg
    p-6
    shadow-lg
    bg-gradient-to-r from-[#011d3b] via-[#002b55] to-[#001024]
  "
        >
          <form className="w-full ">
            {/* Heading */}
            <h2 className="text-white text-xl font-semibold mb-6">
              Your Details
            </h2>

            {/* Input Container */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {/* Full Name */}
              <div className="input-group">
                <label className="block text-sm text-white mb-2">
                  Full Name <span className="text-purple-400">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="
            w-full
            bg-transparent
            border-0
            border-b
            border-purple-400/40
            px-0
            py-2
            text-white
            placeholder-gray-400
            outline-none
            focus:border-purple-400
            transition
          "
                />
              </div>

              {/* Phone Number */}
              <div className="input-group">
                <label className="block text-sm text-white mb-2">
                  Phone Number <span className="text-purple-400">*</span>
                </label>

                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="
            w-full
            bg-transparent
            border-0
            border-b
            border-purple-400/40
            px-0
            py-2
            text-white
            placeholder-gray-400
            outline-none
            focus:border-purple-400
            transition
          "
                />
              </div>

              {/* Email Address */}
              <div className="input-group">
                <label className="block text-sm text-white mb-2">
                  Email Address <span className="text-purple-400">*</span>
                </label>

                <input
                  type="email"
                  placeholder="Your Email"
                  className="
            w-full
            bg-transparent
            border-0
            border-b
            border-purple-400/40
            px-0
            py-2
            text-white
            placeholder-gray-400
            outline-none
            focus:border-purple-400
            transition
          "
                />
              </div>

              {/* Service / Appliance */}
              <div className="input-group">
                <label className="block text-sm text-white mb-2">
                  Service / Appliance <span className="text-purple-400">*</span>
                </label>

                <select
                  className="
            w-full
            bg-transparent
            border-0
            border-b
            border-purple-400/40
            px-0
            py-2
            text-gray-300
            outline-none
            focus:border-purple-400
            transition
          "
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[#011d3b]">
                    Select Service
                  </option>

                  <option value="tv" className="bg-[#011d3b]">
                    TV Repair
                  </option>

                  <option value="ac" className="bg-[#011d3b]">
                    AC Repair
                  </option>

                  <option value="fridge" className="bg-[#011d3b]">
                    Fridge Repair
                  </option>

                  <option value="washing-machine" className="bg-[#011d3b]">
                    Washing Machine Repair
                  </option>

                  <option value="home-appliance" className="bg-[#011d3b]">
                    Other Home Appliance
                  </option>
                </select>
              </div>

              {/* Address */}
              <div className="input-group col-span-2">
                <label className="block text-sm text-white mb-2">
                  Address <span className="text-purple-400">*</span>
                </label>

                <textarea
                  rows="2"
                  placeholder="Your Address"
                  className="
            w-full
            bg-transparent
            border-0
            border-b
            border-purple-400/40
            px-0
            py-2
            text-white
            placeholder-gray-400
            outline-none
            resize-none
            focus:border-purple-400
            transition
          "
                ></textarea>
              </div>

              {/* Problem / Issue */}
              <div className="input-group col-span-2">
                <label className="block text-sm text-white mb-2">
                  Problem / Issue <span className="text-purple-400">*</span>
                </label>

                <textarea
                  rows="2"
                  placeholder="Describe the problem with your appliance"
                  className="
            w-full
            bg-transparent
            border-0
            border-b
            border-purple-400/40
            px-0
            py-2
            text-white
            placeholder-gray-400
            outline-none
            resize-none
            focus:border-purple-400
            transition
          "
                ></textarea>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="
        mt-3
        rounded-full
        bg-gradient-to-r
        from-blue-600
        to-blue-900
        px-7
        py-3
        text-sm
        font-medium
        text-white
        transition
        duration-300
        hover:scale-105
        hover:shadow-lg
        cursor-pointer
      "
            >
              BOOK A SERVICE
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
