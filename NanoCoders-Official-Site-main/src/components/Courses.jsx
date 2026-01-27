import React from "react";

function Courses() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center gap-5 pt-20 pb-7 px-4 sm:px-6 lg:px-16"
        id="courses"
      >
        <h1 className="text-[#f2bf11] text-center font-medium capitalize">
          - our courses -
        </h1>
        <h2 className="text-[#5bb5ea] text-3xl md:text-5xl xl:text-5xl font-bold">
          Check Out
          <span className="text-[#f2bf11]"> Courses</span> We
          <span className="text-[#132c56]"> Provide</span>
        </h2>
        <p className="text-[#132c56]/70 font-medium">
          Explore our core solutions built to power your digital transformation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-3 sm:px-5 md:px-8 lg:px-10 xl:px-20 py-12 m-0">
        <div className="overflow-hidden rounded-4xl border border-[#5bb5ea]/20 flex justify-center items-center flex-col w-auto shadow-[0_8px_30px_rgba(91,181,234,0.35)] transition-all duration-500 hover:scale-[1.05] px-3">
          <div className="w-full lg:w-80">
            <img src="/images/course-1.webp" alt="" className="" />
          </div>
          <div className="flex justify-center items-center flex-col gap-5 pt-3 pb-5 w-full lg:w-80">
            <h3 className="text-[#132c56] text-2xl font-bold">
              Software Development
            </h3>
            <p className="text-[#132c56]/70 font-medium text-center">
              Custom-built software designed around unique goals and workflow.
            </p>
            <p className="text-[#132c56]/70 font-medium">- from $99 -</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-4xl border border-[#5bb5ea]/20 flex justify-center items-center flex-col w-auto shadow-[0_8px_30px_rgba(91,181,234,0.35)] transition-all duration-500 hover:scale-[1.05] px-3">
          <div className="w-full lg:w-80">
            <img src="/images/course-2.webp" alt="" className="" />
          </div>
          <div className="flex justify-center items-center flex-col gap-5 pt-3 pb-5 w-full lg:w-80">
            <h3 className="text-[#132c56] text-2xl font-bold">Web Portals</h3>
            <p className="text-[#132c56]/70 font-medium text-center">
              Engaging, scalable web platforms to connect users and streamline
              access.
            </p>
            <p className="text-[#132c56]/70 font-medium">- from $79 -</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-4xl border border-[#5bb5ea]/20 flex justify-center items-center flex-col w-auto shadow-[0_8px_30px_rgba(91,181,234,0.35)] transition-all duration-500 hover:scale-[1.05] px-3">
          <div className="w-full lg:w-80">
            <img src="/images/course-3.webp" alt="" className="" />
          </div>
          <div className="flex justify-center items-center flex-col gap-5 pt-3 pb-5 w-full lg:w-80">
            <h3 className="text-[#132c56] text-2xl font-bold">
              Data Analytics
            </h3>
            <p className="text-[#132c56]/70 font-medium text-center">
              Turn complex data into clear insights and smarter decisions.
            </p>
            <p className="text-[#132c56]/70 font-medium">- from $89 -</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-4xl border border-[#5bb5ea]/20 flex justify-center items-center flex-col w-auto shadow-[0_8px_30px_rgba(91,181,234,0.35)] transition-all duration-500 hover:scale-[1.05] px-3">
          <div className="w-full lg:w-80">
            <img src="/images/course-4.webp" alt="" className="" />
          </div>
          <div className="flex justify-center items-center flex-col gap-5 pt-3 pb-5 w-full lg:w-80">
            <h3 className="text-[#132c56] text-2xl font-bold">SharePoint</h3>
            <p className="text-[#132c56]/70 font-medium text-center">
              Optimize collaboration and document management with SharePoint.
            </p>
            <p className="text-[#132c56]/70 font-medium">- from $109 -</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-4xl border border-[#5bb5ea]/20 flex justify-center items-center flex-col w-auto shadow-[0_8px_30px_rgba(91,181,234,0.35)] transition-all duration-500 hover:scale-[1.05] px-3">
          <div className="w-full lg:w-80">
            <img src="/images/course-5.webp" alt="" className="" />
          </div>
          <div className="flex justify-center items-center flex-col gap-5 pt-3 pb-5 w-full lg:w-80">
            <h3 className="text-[#132c56] text-2xl font-bold">
              Digital Branding
            </h3>
            <p className="text-[#132c56]/70 font-medium text-center">
              Build a strong online presence with consistent, impactful digital
              identity.
            </p>
            <p className="text-[#132c56]/70 font-medium">- from $99 -</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-4xl border border-[#5bb5ea]/20 flex justify-center items-center flex-col w-auto shadow-[0_8px_30px_rgba(91,181,234,0.35)] transition-all duration-500 hover:scale-[1.05] px-3">
          <div className="w-full lg:w-80">
            <img src="/images/course-6.webp" alt="" className="" />
          </div>
          <div className="flex justify-center items-center flex-col gap-5 pt-3 pb-5 w-full lg:w-80">
            <h3 className="text-[#132c56] text-2xl font-bold">CRM strategy</h3>
            <p className="text-[#132c56]/70 font-medium text-center">
              Enhance customer relations with CRM systems and integrations.
            </p>
            <p className="text-[#132c56]/70 font-medium">- from $199 -</p>
          </div>
        </div>
      </div>
      <a href="#contact" className="flex justify-center items-center py-5">
        <button
          type="button"
          className="bg-[#5bb5ea] text-[#132c56] font-medium px-3 md:px-8 rounded-full py-4 transition-all duration-300 shadow-[inset_0_2px_6px_rgba(255,255,255,0.65)] group hover:bg-[#f2bf11] hover:text-[#132c56] hover:scale-[1.05] cursor-pointer hover:shadow-[0_19px_30px_rgba(91,181,234,0.45)]"
        >
          <span className="">Get Started Now</span>
        </button>
      </a>
    </>
  );
}

export default Courses;
