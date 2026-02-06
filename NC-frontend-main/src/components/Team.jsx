import React from "react";

function Team() {
  return (
    <>
      <div id="team">
        <div className="flex flex-col justify-center items-center gap-5 pt-20 pb-7 px-3 sm:px-5 md:px-8 lg:px-10 xl:px-20">
          <h1 className="text-[#f2bf11] text-center font-medium capitalize">
            - Our Team -
          </h1>
          <h2 className="text-[#5bb5ea] text-3xl md:text-5xl xl:text-5xl font-bold">
            Meet Our
            <span className="text-[#f2bf11]"> Experts</span> in
            <span className="text-[#132c56]"> Action</span>
          </h2>
          <p className="text-[#132c56]/70 font-medium">
            Our team is our pride — every member is committed to delivering
            excellence in every project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-3 sm:px-5 md:px-8 lg:px-10 xl:px-20 py-12 m-0">
          <div className="overflow-hidden rounded-4xl border border-[#5bb5ea]/20 flex justify-center items-center flex-col w-auto shadow-[0_8px_30px_rgba(91,181,234,0.35)] transition-all duration-500 hover:scale-[1.03] px-3 pt-6">
            <div className="w-full lg:w-80 overflow-hidden">
              <img src="/images/ziyam.jpeg" alt="" className="rounded-4xl" />
            </div>
            <div className="flex justify-center items-center flex-col gap-5 pt-3 pb-5">
              <h3 className="text-[#132c56] text-2xl font-bold">Ziyam Khan</h3>
              <p className="text-[#132c56]/70 font-medium">
                Founder & CEO (UI/UX Expert)
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-4xl border border-[#5bb5ea]/20 flex justify-center items-center flex-col w-auto shadow-[0_8px_30px_rgba(91,181,234,0.35)] transition-all duration-500 hover:scale-[1.03] px-3 pt-6">
            <div className="w-full lg:w-80">
              <img src="/images/musaab.png" alt="" className="rounded-4xl" />
            </div>
            <div className="flex justify-center items-center flex-col gap-5 pt-3 pb-5">
              <h3 className="text-[#132c56] text-2xl font-bold">
                Musaab Waqar
              </h3>
              <p className="text-[#132c56]/70 font-medium">
                Co-Founder & CTO (Backend Developer)
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-4xl border border-[#5bb5ea]/20 flex justify-center items-center flex-col w-auto shadow-[0_8px_30px_rgba(91,181,234,0.35)] transition-all duration-500 hover:scale-[1.03] px-3 pt-6">
            <div className="w-full lg:w-80">
              <img src="/images/sanan.png" alt="" className="rounded-4xl" />
            </div>
            <div className="flex justify-center items-center flex-col gap-5 pt-3 pb-5">
              <h3 className="text-[#132c56] text-2xl font-bold">
                Muhammad Sanan Khan
              </h3>
              <p className="text-[#132c56]/70 font-medium">COO (Manager)</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-4xl border border-[#5bb5ea]/20 flex justify-center items-center flex-col w-auto shadow-[0_8px_30px_rgba(91,181,234,0.35)] transition-all duration-500 hover:scale-[1.03] px-3 pt-6">
            <div className="w-full lg:w-80">
              <img
                src="/images/Tabish.png"
                alt=""
                className="rounded-4xl h-full md:h-78 w-full"
              />
            </div>
            <div className="flex justify-center items-center flex-col gap-5 pt-3 pb-5">
              <h3 className="text-[#132c56] text-2xl font-bold">
                Tabish Fatima
              </h3>
              <p className="text-[#132c56]/70 font-medium">
                Frontend Developer
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-4xl border border-[#5bb5ea]/20 flex justify-center items-center flex-col w-auto shadow-[0_8px_30px_rgba(91,181,234,0.35)] transition-all duration-500 hover:scale-[1.03] px-3 pt-6">
            <div className="w-full lg:w-80">
              <img src="/images/wasim.png" alt="" className="rounded-4xl" />
            </div>
            <div className="flex justify-center items-center flex-col gap-5 pt-3 pb-5">
              <h3 className="text-[#132c56] text-2xl font-bold">Wasim Ahmad</h3>
              <p className="text-[#132c56]/70 font-medium">Head of Data & AI</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-4xl border border-[#5bb5ea]/20 flex justify-center items-center flex-col w-auto shadow-[0_8px_30px_rgba(91,181,234,0.35)] transition-all duration-500 hover:scale-[1.03] px-3 pt-6">
            <div className="w-full lg:w-80">
              <img
                src="/images/usman.png"
                alt=""
                className="rounded-4xl w-full"
              />
            </div>
            <div className="flex justify-center items-center flex-col gap-5 pt-3 pb-5">
              <h3 className="text-[#132c56] text-2xl font-bold">Usman Khan</h3>

              <p className="text-[#132c56]/70 font-medium">Technical Lead</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
