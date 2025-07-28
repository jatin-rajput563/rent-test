import React from "react";
import CustomHeading from "./common/CustomHeading";
import aiImg from "../assets/images/png/ai-img.png";
import { DLACZEGO_DATA } from "../utils/helper";
const Dlaczego = () => {
  const COLORS = [
    "bg-[#5E13F6]",
    "bg-[#FF3B61]",
    "bg-[#FF4DF5]",
    "bg-[#00F0FF]",
    "bg-[#1B1E3C]",
  ];
  return (
    <div className="mt-[52px] md:mt-[130px] lg:mt-[140px] xl:mt-[164px] mb-[22px] sm:mb-0 px-5">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-[37px] xl:gap-[83px] justify-center items-center">
          <div className="flex flex-col max-w-[600px] w-full py-0">
            <CustomHeading headClass={"!text-[40px] sm:text-[44px] md:text-[46px] leading-120 mb-[37px] max-lg:text-center"}
              headText="Dlaczego warto skorzystać z RentEasy.AI?"
            />
            {DLACZEGO_DATA.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-[25px] ${
                  index === 4 ? "" : "mb-[22px]"
                }`}
              >
                <div
                  className={`flex justify-center items-center min-h-[64px] min-w-[64px] size-[64px] rounded-[14px] ${
                    COLORS[index % COLORS.length]
                  }`}
                >
                  {<item.icon />}
                </div>
                <div>
                  <h4 className="font-bold text-xl leading-100 pb-1.5 text-dark-black">
                    {item.title}
                  </h4>
                  <h4 className="leading-134 text-dark-black opacity-70 ff-cabin">
                    {item.descrition}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:max-w-[457px] mx-auto lg:h-[610px] sm:h-[500px] h-[447px]">
            <img
              src={aiImg}
              alt="work with us"
              className="w-full h-full object-cover  pointer-events-none rounded-[15px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dlaczego;
