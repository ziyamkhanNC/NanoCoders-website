import React from "react";
import { Bell, MessageSquareText, Flag, AudioLines } from "lucide-react";

function Features() {
  return (
    <>
      <div className="relative bg-[#bae2f1] px-3 sm:px-5 md:px-8 lg:px-10 xl:px-20 py-36 lg:py-16">
        <svg
          className="absolute -top-28 md:-top-31 lg:-top-35 left-0 w-full h-28 sm:h-28 md:h-32 lg:h-36"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,120 480,120 720,96 960,72 1200,24 1440,32 L1440,120 L0,120 Z"
            fill="#bae2fa"
          />
        </svg>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 py-10">
          <div
            className="group relative overflow-hidden bg-white rounded-4xl py-10 px-8 w-full flex flex-col gap-3
  transition-all duration-500 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-[#132c56] translate-x-full -translate-y-full transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <div className="relative z-10 space-y-2">
              <MessageSquareText
                size={40}
                className="text-[#f2bf11] transition-all duration-500 group-hover:text-[#5bb5ea]"
              />
              <h2 className="text-[#132c56] font-bold text-2xl transition-colors duration-500 group-hover:text-[#f2bf11]">
                Responsibility
              </h2>
              <p className="text-[#132c56]/80 font-medium transition-colors duration-500 group-hover:text-white/90">
                We take every step to ensure top-quality results.
              </p>
            </div>
          </div>
          <div
            className="group relative overflow-hidden bg-white rounded-4xl py-10 px-8 w-full flex flex-col gap-3
  transition-all duration-500 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-[#132c56] translate-x-full -translate-y-full transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <div className="relative z-10 space-y-2">
              <Bell
                size={40}
                className="text-[#f2bf11] transition-all duration-500 group-hover:text-[#5bb5ea]"
              />
              <h2 className="text-[#132c56] font-bold text-2xl transition-colors duration-500 group-hover:text-[#f2bf11]">
                Professionalism
              </h2>
              <p className="text-[#132c56]/80 font-medium transition-colors duration-500 group-hover:text-white/90">
                Our expert work backed by clear communication.
              </p>
            </div>
          </div>
          <div
            className="group relative overflow-hidden bg-white rounded-4xl py-10 px-8 w-full flex flex-col gap-3
  transition-all duration-500 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-[#132c56] translate-x-full -translate-y-full transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <div className="relative z-10 space-y-2">
              <Flag
                size={40}
                className="text-[#f2bf11] transition-all duration-500 group-hover:text-[#5bb5ea]"
              />
              <h2 className="text-[#132c56] font-bold text-2xl transition-colors duration-500 group-hover:text-[#f2bf11]">
                Efficiency
              </h2>
              <p className="text-[#132c56]/80 font-medium transition-colors duration-500 group-hover:text-white/90">
                Agile methods deliver fast, on-time outcomes.
              </p>
            </div>
          </div>
          <div
            className="group relative overflow-hidden bg-white rounded-4xl py-10 px-8 w-full flex flex-col gap-3
  transition-all duration-500 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-[#132c56] translate-x-full -translate-y-full transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <div className="relative z-10 space-y-2">
              <AudioLines
                size={40}
                className="text-[#f2bf11] transition-all duration-500 group-hover:text-[#5bb5ea]"
              />
              <h2 className="text-[#132c56] font-bold text-2xl transition-colors duration-500 group-hover:text-[#f2bf11]">
                Communication
              </h2>
              <p className="text-[#132c56]/80 font-medium transition-colors duration-500 group-hover:text-white/90">
                We stay open, responsive, and transparent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Features;
