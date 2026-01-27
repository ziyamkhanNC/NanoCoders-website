import React from "react";

function Steps() {
  return (
    <>
      <div
        className="bg-[#bae2f1] relative pb-20 mt-30 w-full bg-center bg-cover bg-no-repeat z-0 min-h-screen" id="steps"
        style={{ backgroundImage: "url('/images/bg-steps.png')" }}
      >
        {/* -top-28 md:-top-31 lg:-top-35 */}
        <svg
          className="absolute -top-28 md:-top-31 lg:-top-35 left-0 w-full h-28 sm:h-28 md:h-32 lg:h-36 z-10"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,120 480,120 720,96 960,72 1200,24 1440,32 L1440,120 L0,120 Z"
            fill="#f0eff8"
          />
        </svg>
        <div className="flex flex-col justify-center items-center gap-5 py-3 px-4">
          <h1 className="text-[#f2bf11] text-center font-medium capitalize">
            - Quick Steps -
          </h1>
          <h2 className="text-[#5bb5ea] text-3xl md:text-5xl xl:text-5xl font-bold">
            <span className="text-[#f2bf11]">Look </span>
            Through Our
            <span className="text-[#132c56]"> Process</span>
          </h2>
          <p className="text-[#132c56]/70 font-medium">
            A simple, transparent workflow designed to turn your ideas into
            results.
          </p>
        </div>
        <div className="p-5 flex flex-col gap-4 justify-center items-center mt-4">
          <div className="flex flex-row justify-between items-center gap-4 translate-x-0 lg:translate-x-57.5">
            <div className="w-30">
              <img src="/images/counting-1.webp" alt="" />
            </div>
            <div className="w-full lg:w-md space-y-2">
              <h3 className="text-[#132c56] text-2xl font-bold">Contact Us</h3>
              <p className="text-[#132c56]/80 font-medium">
                Reach out with your business challenge — our team will guide you
                toward the best solution.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-4 translate-x-0 lg:-translate-x-57.5">
            <div className="w-full lg:w-md space-y-2 text-right">
              <h3 className="text-[#132c56] text-2xl font-bold">
                Project Analysis
              </h3>
              <p className="text-[#132c56]/80 font-medium">
                We’ll review your goals and requirements to define a clear,
                effective development plan.
              </p>
            </div>
            <div className="w-30">
              <img src="/images/counting-2.webp" alt="" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-4 translate-x-0 lg:translate-x-57.5">
            <div className="w-30">
              <img src="/images/counting-3.webp" alt="" />
            </div>
            <div className="w-full lg:w-md space-y-2">
              <h3 className="text-[#132c56] text-2xl font-bold">
                Solution Delivery
              </h3>
              <p className="text-[#132c56]/80 font-medium">
                Our experts craft and deliver a tailored solution ready for your
                feedback and launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Steps;
