import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MoveUp } from "lucide-react";

function Footer() {
  return (
    <>
      <div className="bg-[#132c58] px-3 sm:px-5 md:px-8 lg:px-10 xl:px-20">
        <footer className="pt-9">
          <div className="flex flex-col md:flex-row md:flex-wrap items-start md:items-center justify-between gap-10 py-6">
            <div className="text-white w-full md:w-1/3 space-y-6">
              <div className="flex text-white cursor-pointer group items-center gap-2">
                <h1 className="font-medium text-2xl text-[#5bb5ea]">
                  Nano<span className="text-[#f2bf11]">Coders</span>
                </h1>
              </div>
              <p className="text-white/60 text-md font-medium">
                We go beyond expectations to understand your goals and deliver
                solutions that drive real results.
              </p>
              <div className="flex flex-row gap-3">
                <a href="https://www.facebook.com/profile.php?id=61577634068750">
                  <div className="bg-[#ffffff] hover:bg-[#5bb5ea] group w-9 h-8 rounded-md flex justify-center items-center duration-300 group">
                    <Facebook
                      size={25}
                      className="text-black duration-500 text-md hover:shadow-[0_6px_14px_rgba(134,239,172,0.25)] group-hover:text-white"
                    />
                  </div>
                </a>
                <a href="https://www.instagram.com/nano.coders/">
                  <div className="bg-[#ffffff] hover:bg-[#5bb5ea] w-9 h-8 rounded-md flex justify-center items-center duration-300 group hover:shadow-[0_6px_14px_rgba(134,239,172,0.25)]">
                    <Instagram
                      size={25}
                      className="text-black duration-500 text-md hover:shadow-[0_6px_14px_rgba(134,239,172,0.25)] group-hover:text-white"
                    />
                  </div>
                </a>
                <a href="https://www.linkedin.com/company/nanocoders/posts/?feedView=all">
                  <div className="bg-[#ffffff] hover:bg-[#5bb5ea] w-9 h-8 rounded-md flex justify-center items-center duration-300 group hover:shadow-[0_6px_14px_rgba(134,239,172,0.25)]">
                    <Linkedin
                      size={25}
                      className="text-black duration-500 text-md hover:shadow-[0_6px_14px_rgba(134,239,172,0.25)] group-hover:text-white"
                    />
                  </div>
                </a>
              </div>
              <Link
                to="/privacy-policy"
                className="hover:text-[#5bb5ea] transition"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="w-full md:w-1/4 flex flex-col items-start justify-start">
              <h4 className="text-xl text-white/80 font-bold mb-4">
                Quick Links
              </h4>
              <ul className="text-white/80 flex flex-col gap-2">
                <li className="hover:text-[#5bb5ea] duration-200">
                  <a href="#about">About</a>
                </li>
                <li className="hover:text-[#5bb5ea] duration-200">
                  <a href="#courses">Courses</a>
                </li>
                <li className="hover:text-[#5bb5ea] duration-200">
                  <a href="#events">Events</a>
                </li>
                <li className="hover:text-[#5bb5ea] duration-200">
                  <a href="#team">Team</a>
                </li>
                <li className="hover:text-[#5bb5ea] duration-200">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 flex flex-col items-start">
              <h4 className="text-xl text-white/80 font-bold mb-3">Connect</h4>

              <h4 className="text-xl text-white/80 font-bold mb-4">
                Stay Updated
              </h4>
              <p className="text-white/60 text-[14px] w-full md:w-[80%]">
                Get the latest updates on new projects and blog posts.
              </p>

              <div className="flex flex-row relative py-3">
                <input
                  type="text"
                  name="Email"
                  id="Email"
                  className="bg-[#1f2439] border border-white/10 
                  w-67 sm:w-96 md:w-96 lg:w-64 xl:w-72 h-11 rounded-l-lg pl-2 focus:border-[#5bb5ea] focus:text-[#5bb5ea] outline-none"
                />
                <button
                  type="button"
                  className="bg-[#5bb5ea] text-white font-medium w-16 h-11 rounded-r-lg border-r border-white/20 absolute -right-16"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 text-white/70 flex flex-col justify-center items-center gap-2 py-4">
            <p className="text-md font-medium text-center lg:text-left xl:text-left">
              © Copyright{" "}
              <span className="text-[#5bb5ea] font-bold">NanoCoders. </span>
              All Rights Reserved.
            </p>
            <p className="">
              Designed by{" "}
              <span className="text-[#5bb5ea] font-medium">Tabish Fatima</span>
            </p>
            <a href="#hero">
              <button
                type="button"
                className="px-3 py-2.5 bg-[#5bb5ea] flex justify-center items-center text-white font-semibold rounded hover:bg-[#f2bf11] transition-all duration-500 hover:shadow-[0_8px_20px_rgba(91,181,234,0.65)] shadow-[0_6px_16px_rgba(242,191,17,0.65)] hover:-translate-y-2 fixed bottom-3 right-3 hover:scale-[1.02]"
              >
                <MoveUp />
              </button>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
