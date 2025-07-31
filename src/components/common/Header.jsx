import React, { useState } from "react";
import logo from "../../assets/images/svg//Logo.svg";
import flag from "../../assets/images/png/flag.png";
import { HEADERLINKS_DATA } from "../../utils/helper";
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
        <img
          className="sm:h-[54px] h-[41px] w-[139px] pointer-events-none sm:w-[183px]"
          src={logo}
          alt="logo"
        />
      </NavLink>

      <ul
        id="navMenu"
        className={`flex items-center gap-4 md:gap-8 max-[1025px]:flex-col max-[1025px]:min-h-screen max-[1025px]:absolute max-[1025px]:top-0 max-[1025px]:w-full max-[1025px]:justify-center z-50 max-[1025px]:bg-white duration-300 ${
          isOpen ? "max-[1025px]:right-0" : "max-[1025px]:-right-full"
        }`}
      >
        {HEADERLINKS_DATA.map((link, index) => (
          <li key={index} className="nav-link text-dark-blue">
            <NavLink
              to={link.link}
              onClick={closeNavbar}
              className="relative after:absolute after:bottom-0 after:left-0 after:bg-purple-blue after:h-[1px] hover:after:w-full after:content-[''] after:w-0 after:duration-300 hover:text-purple-blue duration-300 flex items-center gap-2"
            >
              {link.label}
              {link.withImage && (
                <img
                  className="pointer-events-none w-[67.6px] h-[26px]"
                  src={link.image} alt="Zoe"/>
              )}
            </NavLink>
          </li>
        ))}
        <li>
          <div className="items-center gap-[15px] flex flex-col sm:hidden">
            <button className="text-dark-blue leading-[19px] duration-300 flex !cursor-pointer justify-center items-center gap-[15px]">
              Polski{" "}
              <span className="!cursor-pointer ">
                <img
                  className="!w-[33.6px] !cursor-pointer pointer-events-none !h-[21px]"
                  src={flag}
                  alt="flag"/>
              </span>
            </button>
            <button className="px-[25.3px] py-[11.5px] text-base font-semibold rounded-[21px] duration-300 shadow-[0px_1px_15px_0px_#5E13F687] border border-transparent hover:border-purple-blue hover:bg-transparent hover:text-purple-blue bg-purple-blue leading-[19px] text-white">
              Zarejestruj</button>
          </div>
        </li>
      </ul>
      <div className="flex items-center gap-[15px]">
        <div className="items-center gap-[15px] sm:flex hidden">
          <button className="text-dark-blue leading-[19px] duration-300 !cursor-pointer flex justify-center items-center gap-[15px]">
            Polski{" "}
            <span className="!cursor-pointer">
              <img
                className=" !w-[33.6px] !cursor-pointer pointer-events-none !h-[21px]" src={flag} alt="flag"
              />
            </span>
          </button>
          <button className="px-[25.3px]  cursor-pointer py-[11.5px] text-base font-semibold rounded-[21px] duration-300 shadow-[0px_1px_15px_0px_#5E13F687] border border-transparent hover:border-purple-blue hover:bg-transparent hover:text-purple-blue bg-purple-blue leading-[19px] text-white">
            Zarejestruj</button>
        </div>
        <div
          className="z-50 cursor-pointer group relative min-h-[17px] w-[25px] flex flex-col justify-center items-center gap-1 max-[1025px]:flex min-[1025px]:hidden"
          onClick={toggleNavbar}>
          <span
            className={`h-[3px] bg-dark-blue rounded-full duration-300 w-full ${
              isOpen ? "rotate-45 translate-y-[8px]" : ""}`}/>
          <span
            className={`h-[3px] bg-dark-blue rounded-full duration-300 w-full ${
              isOpen ? "opacity-0" : ""}`}/>
          <span
            className={`h-[3px] bg-dark-blue rounded-full duration-300 w-full ${
              isOpen ? "-rotate-47 -translate-y-[6px]" : ""}`}/>
        </div>
      </div>
    </div>
  );
};

export default Header;