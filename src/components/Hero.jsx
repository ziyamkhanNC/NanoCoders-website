import React from "react";
function Hero() {
  return (
    <>
      <div
        id="hero"
        className="py-36 lg:py-16 px-3 sm:px-5 md:px-8 lg:px-10 xl:px-12"
      >
        <div
          className="relative 
  before:content-[''] before:absolute before:w-14 before:h-14 before:rounded-full 
  before:bg-[#5bb5ea]/30 before:top-14 before:left-0 
  after:content-[''] after:absolute after:w-16 after:h-16 after:rounded-full 
  after:bg-[#5bb5ea]/20 after:bottom-0 after:right-0"
        ></div>
        <div
          className="relative 
  before:content-[''] before:absolute before:w-8 before:h-8 before:rounded-full 
  before:bg-[#132c58]/30 before:top-8 before:left-32 
  after:content-[''] after:absolute after:w-16 after:h-16 after:rounded-full 
  after:bg-[#132c58]/20 after:bottom-0 after:right-0"
        ></div>
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-center sm:justify-center md:justify-center lg:justify-between xl:justify-between gap-12 items-center">
          <div className="w-full sm:w-full md:w-full lg:w-[50%] xl:w-[50%] flex flex-col justify-center items-center gap-6 text-[#5bb5ea]">
            <h2 className="text-3xl md:text-5xl xl:text-7xl font-bold text-center pb-0 lg:pb-5">
              <span className="text-[#132c58]">Solutions</span> That Drive
              <span className="text-[#f2bf11]"> Growth</span>
            </h2>
            <p className="font-bold text-xl text-[#132c58]/80">
              Empowering your business through smart technology.
            </p>
            <p className="font-medium text-md bg-[#132c58]/80 text-white px-2">
              ● 150+ projects ● 24/7 support ● 500K+ happy users ●
            </p>
            <p className="font-normal text-lg text-[#132c58]/80 text-center w-full xl:w-xl">
              We deliver scalable digital solutions while empowering the next
              generation of tech creators. From concept to launch, our software
              drives real impact.
            </p>
            <div className="flex flex-row gap-6 pt-3">
              <a href="#contact">
                <button
                  type="button"
                  className="bg-[#5bb5ea] text-[#132c56] border-2 border-[#132c56] font-medium px-3 md:px-7 rounded-full py-3 transition-all duration-300 group 
                            hover:bg-[#132c56] hover:text-[#5bb5ea] hover:scale-[1.05]"
                >
                  <span className="">Get Started</span>
                </button>
              </a>
              <a href="#about">
                <button
                  type="button"
                  className="bg-[#132c56] text-[#5bb5ea] border-2 border-[#132c56] font-medium  px-3 md:px-7 rounded-full py-3 transition-all duration-300 group 
                            hover:bg-[#5bb5ea] hover:text-[#132c56] hover:scale-[1.05]"
                >
                  <span className="">Learn More</span>
                </button>
              </a>
            </div>
          </div>
          <div
            className="flex flex-col gap-7 w-full sm:w-full md:w-full lg:w-[50%] xl:w-[50%] justify-center"
            data-aos="fade-up"
          >
            <img src="/images/hero-img.webp" alt="" className="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
