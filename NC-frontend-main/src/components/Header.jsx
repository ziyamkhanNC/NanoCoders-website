import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 bg-[#f7f7f7]
      px-4 sm:px-4 md:px-7 lg:px-10 xl:px-16
      border-b border-[#5bb5ea]/40
      shadow-[0_2px_10px_rgba(91,181,234,0.25)]"
    >
      <div className="flex justify-between items-center w-full">
        <div className="w-44 h-20 flex items-center">
          <a href="#hero">
            <img src="/images/logoscopy.png" alt="NanoCoders Logo" />
          </a>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#132c56] text-[26px] border-2 border-[#5bb5ea] w-10 h-10 flex items-center justify-center rounded"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-6 md:gap-8 absolute md:static left-0 top-20 w-full md:w-auto
 bg-white md:bg-transparent px-8 md:px-0 py-6 md:py-0 transition-all duration-300 items-center`}
        >
          <ul
            className="text-[#132c56] flex flex-col md:flex-row
            gap-6 md:gap-3 font-medium text-[14px]"
          >
            {[
              ["About", "#about"],
              ["Courses", "#courses"],
              ["Team", "#team"],
              ["Events", "#events"],
              ["Contact", "#contact"],
            ].map(([label, link]) => (
              <li
                key={label}
                className="relative transition-all duration-300
                md:after:absolute md:after:left-0 md:after:bottom-0
                md:after:w-full md:after:h-0.5 md:after:bg-[#5bb5ea]
                md:after:scale-x-0 md:hover:after:scale-x-100
                md:after:transition-transform"
              >
                <a
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-md transition-all duration-300
                    hover:bg-[#5bb5ea]/20 md:hover:bg-transparent
                    hover:text-[#5bb5ea]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
