import React from "react";
import { Clock2, MessageSquareText } from "lucide-react";

function About() {
  return (
    <>
      <div className="bg-[#bae2f1] relative" id="about">
        <div
          id="about"
          className="px-3 sm:px-5 md:px-8 lg:px-10 xl:px-12 pb-10"
        >
          <div className="relative before:content-[''] before:absolute before:w-14 before:h-14 before:rounded-full before:bg-[#5bb5ea]/30 before:top-14 before:left-0 after:content-[''] after:absolute after:w-16 after:h-16 after:rounded-full after:bg-[#5bb5ea]/20 after:bottom-0 after:right-0"></div>
          <div
            className="relative before:content-[''] before:absolute before:w-8 before:h-8 before:rounded-full 
  before:bg-[#132c58]/30 before:top-8 before:left-32 after:content-[''] after:absolute after:w-16 after:h-16 after:rounded-full after:bg-[#132c58]/20 after:bottom-0 after:right-0"
          ></div>
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-center sm:justify-center md:justify-center lg:justify-between xl:justify-between gap-12 items-center">
            <div
              className="flex flex-col gap-7 w-full sm:w-full md:w-full lg:w-[50%] xl:w-[50%] justify-center"
              data-aos="fade-up"
            >
              <img src="/images/about-img.webp" alt="" className="" />
            </div>
            <div className="w-full sm:w-full md:w-full lg:w-[50%] xl:w-[50%] flex flex-col justify-start items-start gap-7 text-[#5bb5ea]">
              <h4 className="text-[#f2bf11] font-medium">- About Us -</h4>
              <h2 className="text-3xl md:text-5xl xl:text-5xl font-bold">
                Our Story
                <span className="text-[#132c58]"> and</span>{" "}
                <span className="text-[#f2bf11]">Values</span>
              </h2>
              <p className="font-bold text-xl text-[#132c58]/80">
                We create powerful digital solutions while shaping the next
                generation of tech creators.
              </p>
              <p className="font-normal text-lg text-[#132c58]/80 w-full xl:w-xl">
                NanoCoders is a hybrid Software House and EdTech company
                delivering scalable digital solutions while empowering young
                minds through hands-on, project-based learning.
              </p>
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4 sm:gap-5 md:gap-6 w-full">
                  <div className="bg-white w-10 h-10 sm:w-11 sm:h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0">
                    <Clock2 className="text-[#f2bf11] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <h3 className="text-[#132c56]/80 text-base sm:text-lg md:text-xl font-bold">
                      Time-Saving
                    </h3>
                    <p className="text-[#132c56]/70 text-sm sm:text-base md:text-lg font-medium">
                      We automate and optimize workflows to deliver faster
                      results.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 sm:gap-5 md:gap-6 w-full">
                  <div className="bg-white w-10 h-10 sm:w-11 sm:h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0">
                    <MessageSquareText className="text-[#f2bf11] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <h3 className="text-[#132c56]/80 text-base sm:text-lg md:text-xl font-bold">
                      Instant Communication
                    </h3>
                    <p className="text-[#132c56]/70 text-sm sm:text-base md:text-lg font-medium">
                      Collaborate easily with real-time updates and feedback.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-6 pt-4">
                <a href="#contact">
                  <button
                    type="button"
                    className="bg-[#5bb5ea] text-[#132c56] font-medium px-3 md:px-7 rounded-full py-4 transition-all duration-300 group 
                            hover:bg-[#132c56] hover:text-[#5bb5ea] hover:scale-[1.05]"
                  >
                    Get Started
                  </button>
                </a>
                <a href="#steps">
                  <button
                    type="button"
                    className="bg-[#132c56] text-[#5bb5ea] font-medium px-3 md:px-7 rounded-full py-4 transition-all duration-300 group 
                            hover:bg-[#5bb5ea] hover:text-[#132c56] hover:scale-[1.05]"
                  >
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="absolute -bottom-28 md:-bottom-31 lg:-bottom-35 rotate-180 left-0 w-full h-28 sm:h-28 md:h-32 lg:h-36"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,120 480,120 720,96 960,72 1200,24 1440,32 L1440,120 L0,120 Z"
            fill="#bae2f1"
          />
        </svg>
      </div>
    </>
  );
}

export default About;
