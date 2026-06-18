import React from "react";
import { useState, useEffect } from "react";

function Navbar() {
  let [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  let closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="flex justify-between items-center bg-bg w-full px-8 h-10 lg:h-20 sticky top-0 z-50 border-b">
        <div className="text-pyellow font-bold text-xl lg:text-3xl">PM</div>
        <div className="flex mr-3 lg:mr-5">
          <div className="hidden md:flex ">
            {[
              "About",
              "Education",
              "Skills",
              "Project",
              "Experience",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group text-base ml-4 lg:ml-6 lg:text-lg"
              >
                {item}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-pyellow transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          </div>
          <div className=" md:hidden">
            <div onClick={toggleMenu} className="cursor-pointer text-2xl">
              {menuOpen ? (
                
                 <i className="fa-solid fa-xmark"></i>
              ) : (
               <i className="fa-solid fa-burger"></i>
              )}
            </div>
        </div>
      </nav>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100]"
          onClick={closeMenu}
        >
          <div
            className="bg-bg rounded-xl p-8 w-[80%] max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center gap-6 text-lg">
              {[
                "About",
                "Education",
                "Skills",
                "Project",
                "Experience",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="hover:scale-110 group transition relative"
                >
                  {item}
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-pyellow transition-all duration-400 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
