import React from "react";
import dotImage from "../assets/images/png/dot.png";
import circleImage from "../assets/images/png/circle.png";

const Moduły = () => {
  return (
    <>
      <div>
        <div className="max-w-[1440px] mx-auto sm:px-[26px] px-[11px] ">
          <div className="flex flex-col justify-start items-center relative max-w-[1366px] bg-light-grey rounded-[10px] w-full pt-[53px] sm:pt-[63px] md:pt-[77px] pb-[52px] sm:pb-[33px]">
            <img
              className="absolute w-[80px] lg:w-[114px] sm:max-[1240px] max-[1240px]:-rotate-270 origin-top-left min-[1240px]:right-[40px] top-[7%] lg:flex hidden -right-[90px]"
              src={dotImage}
              alt="dots"
            />

            <p className="uppercase text-sm sm:text-base font-bold text-purple-blue bg-light-purple py-[12.5px] sm:py-[11.5px] px-[2.2px] sm:px-[11.2px] border border-purple-blue rounded-full leading-100 text-center">
              Inteligentna. Niezawodna. Wytrwała.
            </p>

            <h2 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] py-[16px] sm:py-[24px] md:py-[39px] max-w-[900px] w-full font-bold text-dark-blue leading-120 text-center">
              7 modułów do pełnej obsługi
            </h2>

            <div>
              <img
                src={circleImage}
                alt="circleImage"
                className="max-w-[220px] sm:max-w-[267px] w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moduły;
