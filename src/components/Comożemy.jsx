import React from "react";
import spyimg from "../assets/images/png/spy-img.png";
import CustomHeading from "./common/CustomHeading";
import { Comozemy_Data } from "../utils/helper";

const Comożemy = () => {
  return (
    <div className="pt-[140px]">
      <img
        className="mx-auto max-w-[221px] w-full pointer-events-none"
        src={spyimg}
        alt="spy-img"
      />
      <div className="max-w-[1140px] mx-auto bg-light-grey shadow-top-glow rounded-[15px] py-[48px] lg:py-10 xl:py-[58px] px-4 xl:px-[26px] border-2 border-grey">
        <CustomHeading
          headClass={"text-center !leading-120 sm:px-0 px-8"}
          headText={" Co możemy dla Ciebie zrobić?"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-10 gap-y-[47px] gap-x-[31px] sm:mt-10 mt-[47px] mx-auto place-items-center">
          {Comozemy_Data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center sm:bg-white max-w-[527px] xl:min-h-[199px] rounded-2xl md:py-[22px] sm:py-6 md:pl-[21px] md:pr-[45px] sm:px-4 sm:h-full transition-all duration-200 ease-in-out"
            >
              {/* <div
                className={`${item.bg} justify-center items-center flex sm:size-16 size-[74px] rounded-2xl`}
              ></div> */}
              <item.icon />
              <h2 className="font-lato font-bold text-xl text-dark-black sm:pt-4 sm:pb-[6px] pt-6 pb-[11px] leading-120 sm:px-0 px-4">
                {item.title}
              </h2>
              <p className="font-cabin font-normal text-base leading-134 text-dark-black opacity-70 sm:px-0 px-4">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comożemy;
