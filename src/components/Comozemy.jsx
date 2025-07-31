import React from "react";
import spyImg  from "../assets/images/png/spy-img.png";
import CustomHeading from "./common/CustomHeading";
import { Comozemy_Data } from "../utils/helper";

const Comozemy = () => {
  return (
    <>
      <div className="max-[640px]:pt-[162px] sm:pt-[80px] lg:pt-[140px] max-xl:px-5">
        <img
          className="mx-auto max-w-[221px] w-full pointer-events-none"
          src={spyImg }
          alt="spy-img"
        />
        <div className="max-w-[1137px] mx-auto bg-light-grey shadow-top-glow rounded-[15px] py-[48px] lg:py-10 xl:py-[58px] px-[17px] xl:px-[26px] border-2 border-grey">
          <CustomHeading
            headingClass={"text-center !leading-120 px-0 sm:px-8"}
            headingText={" Co możemy dla Ciebie zrobić?"}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-10 gap-y-[47px] gap-x-[31px] sm:mt-10 mt-[47px] mx-auto place-items-center">
            {Comozemy_Data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center sm:bg-white max-w-[301px] sm:max-w-[527px] min-h-[223px] xl:min-h-[199px] rounded-[15px] md:py-[22px] sm:py-6 md:pl-[21px] md:pr-[45px] sm:px-4 sm:h-full transition-all duration-300 ease-in-out comozemy-card hover:shadow-lg"
              >
                <div
                  className="justify-center items-center flex sm:size-16 size-[74px] rounded-2xl"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <item.image />
                </div>
                <h2 className="font-bold text-xl text-dark-black sm:pt-4 sm:pb-[6px] pt-6 pb-[11px] leading-120 sm:px-0 px-[15px]">
                  {item.title}
                </h2>
                <p className="ff-cabin leading-134 text-dark-black opacity-70 sm:px-0 px-[15px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comozemy;
