import React from "react";

function Offer() {
  return (
    <>
      <div
        className="relative 
  before:content-[''] before:absolute before:w-14 before:h-14 before:rounded-full 
  before:bg-[#f2bf11]/30 before:top-40 before:left-20 
  after:content-[''] after:absolute after:w-11 after:h-11 after:rounded-full 
  after:bg-[#5bb5ea]/20 after:top-10 after:right-50"
      ></div>
      <div className="pt-48 pb-14 bg-[#132c56] flex flex-col justify-center items-center text-white gap-6 px-5">
        <h1 className="font-bold text-xl text-[#f2bf11]">
          - Do not miss your Limited Offer -
        </h1>
        <h2 className="text-2xl md:text-5xl font-bold text-center">
          Get 20% Off Today — Just for You!
        </h2>
        <p className="font-medium text-md bg-[#5bb5ea]/40 text-white px-2 text-center">
          ● Fast & Easy Setup ● No Hidden Fees ●  Flexible Plans ● Secure &
          Reliable ● 24/7 Support ● 
        </p>
        <p className="w-full xl:w-3xl text-center">
          Start your project today and enjoy 20% off your first collaboration.
          Build, launch, and scale your software with confidence, powered by a
          team that understands both technology and growth.
        </p>
        <div className="flex flex-row gap-6 pt-3">
          <a href="#contact">
            <button
              type="button"
              className="text-[#132c56] border-2 border-[#132c56] font-medium px-3 md:px-7 py-3 rounded-full bg-linear-to-tl from-[#f2bf11] via-[#f7d34a] to-[#5bb5ea] transition-all duration-300 hover:bg-linear-to-br hover:scale-[1.05] hover:shadow-[0_8px_24px_rgba(91,181,234,0.35)]"
            >
              Get Started
            </button>
          </a>
          <div
            className="relative 
  before:content-[''] before:absolute before:w-7 before:h-7 before:rounded-full 
  before:bg-[#f2bf11]/50 before:bottom-17 before:left-40 
  after:content-[''] after:absolute after:w-9 after:h-9 after:rounded-full 
  after:bg-[#5bb5ea]/70 after:top-10 after:right-50"
          ></div>
          <a href="#courses">
            <button
              type="button"
              className="text-[#132c56] border-2 border-[#132c56] font-medium px-3 md:px-7 py-3 rounded-full bg-linear-to-br from-[#f2bf11] via-[#f7d34a] to-[#5bb5ea] transition-all duration-300 hover:bg-linear-to-tl hover:scale-[1.05] hover:shadow-[0_8px_24px_rgba(91,181,234,0.35)]"
            >
              Learn More
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Offer;
