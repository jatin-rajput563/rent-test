import React, { useState } from "react";
import Logo from "../assets/images/svg/Logo.svg";
import Flag from "../assets/images/svg/Flag.svg";
import { HeaderLinks_Data } from "../utils/helper";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.documentElement.classList.toggle("overflow-hidden", !isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
    document.documentElement.classList.remove("overflow-hidden");
  };

  return (
    <div className="max-w-[1180px] px-5 mx-auto sm:pt-7 py-[11px] sm:pb-[26px] flex justify-between items-center relative overflow-x-clip">
      <NavLink to="/">
        <img className="sm:h-[55px] h-[42px]" src={Logo} alt="logo" />
      </NavLink>

      <ul
        id="navMenu"
        className={`flex items-center gap-4 md:gap-8 max-lg:flex-col max-lg:min-h-screen max-lg:absolute max-lg:top-0 max-lg:w-full max-lg:justify-center z-50 max-lg:bg-white duration-300 ${
          isOpen ? "max-lg:right-0" : "max-lg:-right-full"
        }`}
      >
        {HeaderLinks_Data.map((link, index) => (
          <li key={index} className="nav-link text-dark-blue">
            <NavLink
              to={link.link}
              onClick={closeNavbar}
              className="relative after:absolute after:bottom-0 after:left-0 after:bg-purple-blue after:h-[1px] hover:after:w-full after:content-[''] after:w-0 after:duration-300 hover:text-purple-blue duration-300 flex items-center gap-2"
            >
              {link.label}
              {link.withImage && <img src={link.image} alt="Zoe" />}
            </NavLink>
          </li>
        ))}

        <li>
          <div className="items-center gap-[15px] flex flex-col sm:hidden">
            <button className="text-dark-blue leading-[19px] duration-300 flex justify-center items-center gap-[15px]">
              Polski <img src={Flag} alt="flag" />
            </button>
            <button className="px-[29px] py-3 text-base font-semibold rounded-[21px] duration-300 shadow-[0px_1px_15px_0px_#5E13F687] border border-transparent hover:border-purple-blue hover:bg-transparent hover:text-purple-blue bg-purple-blue leading-[19px] text-white">
              Sign Up
            </button>
          </div>
        </li>
      </ul>

      <div className="flex items-center gap-[22px]">
        <div className="items-center gap-[22px] sm:flex hidden">
          <button className="text-dark-blue leading-[19px] duration-300 flex justify-center items-center gap-[15px]">
            Polski <img src={Flag} alt="flag" />
          </button>
          <button className="px-[29px] py-3 text-base font-semibold rounded-[21px] duration-300 shadow-[0px_1px_15px_0px_#5E13F687] border border-transparent hover:border-purple-blue hover:bg-transparent hover:text-purple-blue bg-purple-blue leading-[19px] text-white">
            Sign Up
          </button>
        </div>

        <div
          className="z-50 cursor-pointer group relative min-h-[17px] w-[25px] flex flex-col justify-center items-center gap-1 lg:hidden"
          onClick={toggleNavbar}
        >
          <span
            className={`h-[3px] bg-purple-blue rounded-full duration-300 w-full ${
              isOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`h-[3px] bg-purple-blue rounded-full duration-300 w-full ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[3px] bg-purple-blue rounded-full duration-300 w-full ${
              isOpen ? "-rotate-47 -translate-y-[6px]" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
