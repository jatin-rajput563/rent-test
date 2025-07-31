import React from "react";
import CustomHeading from "./common/CustomHeading";
import aiImg from "../assets/images/webp/ai-img.webp";
import { DLACZEGO_DATA, COLORS_DATA } from "../utils/helper";
import { useLocation } from "react-router-dom";

const Dlaczego = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div
        className={`${
          isHomePage ? "pt-[121px] sm:pt-[164px]" : "mt-[50px]"
        } sm:pb-0 px-5 pb-[22px]`} >
        <div className="max-w-[1140px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-[37px] xl:gap-[83px] justify-center items-center">
            <div className="flex flex-col max-w-[600px] w-full py-0">
              <CustomHeading
                headingClass="!text-[40px] sm:!text-[44px] lg:!text-[38px] xl:!text-[46px] leading-120 mb-[37px] max-lg:text-center"
                headingText="Dlaczego warto skorzystać z RentEasy.AI?" />
              {DLACZEGO_DATA.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-[25px] ${
                    index === 4 ? "" : "mb-[22px]"
                  }`}
                >
                  <div
                    className={`flex justify-center items-center min-h-[64px] min-w-[64px] size-[64px] rounded-[14px] ${
                      COLORS_DATA[index % COLORS_DATA.length]
                    }`}
                  >
                    <item.icon />
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
                className="w-full h-full object-cover pointer-events-none rounded-[15px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dlaczego;
