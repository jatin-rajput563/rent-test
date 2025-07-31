import React from "react";
import { useLocation } from "react-router-dom";
import roadmapTopImg from "../assets/images/png/roadmap-top-img.png";
import roadmapImgOne from "../assets/images/svg/roadmap-img-1.svg";
import roadmapImgTwo from "../assets/images/svg/roadmap-img-2.svg";
import roadmapImgThree from "../assets/images/svg/roadmap-img-3.svg";
import roadmapLineOne from "../assets/images/svg/roadmap-line-1.svg";
import roadmapLineTwo from "../assets/images/svg/roadmap-line-2.svg";
import CustomHeading from "./common/CustomHeading";
import CustomPara from "./common/CustomPara";
import { ROADMAP_DATA } from "../utils/helper";

const JakZaczac = () => {
  const location = useLocation();
  const shouldShowPadding = location.pathname === "/";
  return (
    <>
      <div
        className={`${
          shouldShowPadding
            ? "sm:pt-0 md:pt-[50px] lg:pt-[100px] xl:pt-[191px]"
            : "pt-[50px]"
        }`}
      >
        <div className="max-w-[1140px] mx-auto px-[19.5px] xl:px-0">
          <img
            className="max-w-[170px] lg:max-w-[221px] pointer-events-none mx-auto"
            src={roadmapTopImg}
            alt="roadmap-top-img"
          />
          <div className="w-full shadow-lg text-center mx-auto rounded-[15px] border border-grey renteasy-bg-shadow pt-[25px] sm:pt-[35px] md:pt-[45px] lg:pt-[62px] pb-[53px] sm:pb-[62px] relative">
            <CustomHeading
              headingText={"Jak Zacząć?"}
              headinglass={"text-center"}
            />
            <CustomPara
              paraClass={
                "max-w-[234px] sm:max-w-[450px] mx-auto !text-dark-black opacity-70 text-center leading-134 pt-[18px] ff-cabin capitalize mb-[41px] lg:mb-[69px]"
              }
              paraText={
                "Chcesz uprościć zarządzanie swoją nieruchomością? Wykonaj trzy proste kroki:"
              }
            />
            <div className="relative max-w-[1200px] mx-auto px-4 before:content-[''] hidden min-[1070px]:block before:absolute before:top-0 before:bottom-0 before:left-1/2 before:-ml-[3px]">
              <img
                className="absolute min-[1140px]:left-[43%] z-10 left-[47%]"
                src={roadmapImgOne}
                alt="roadmap-img-1"
              />
              <img
                className="absolute left-[49.2%] top-[11%] hidden min-[1140px]:block"
                src={roadmapLineOne}
                alt="roadmap-line-1"
              />
              <div className="w-1 bg-black absolute left-[50.5%] top-[1%] block min-[1140px]:hidden h-[350px] min-[768px]:h-[259px] max-[900px]:left-[52%]"></div>
              <img
                className="absolute left-[47%] min-[1140px]:left-[51.8%] top-[39%]"
                src={roadmapImgTwo}
                alt="roadmap-img-2"
              />
              <img
                className="absolute right-[47.9%] top-[48%] hidden min-[1140px]:block"
                src={roadmapLineTwo}
                alt="line-2"
              />
              <img
                className="absolute min-[1140px]:left-[43%] left-[47%] min-[1140px]:top-[74.6%] top-[76.6%]"
                src={roadmapImgThree}
                alt="roadmap-img-3"
              />

              {ROADMAP_DATA.map((item, index) => (
                <div
                  key={index}
                  className={`relative w-1/2 ${
                    index % 2 === 1
                      ? "left-1/2 min-[1024px]:left-[44%] min-[1140px]:left-[51%] max-[1139px]:top-[21px] !pl-0 md:!pl-[90px] lg:!pl-[119px]"
                      : "lg:pl-[95px] md:left-0 max-lg:!max-w-[292px]"
                  }`}
                >
                  <div className={`max-w-[373px] ${item.align}`}>
                    <h2
                      className={`text-xl font-bold font-lato pb-[6px] text-dark-black ${
                        index === 0 || index === 2 ? "pr-[21px]" : ""
                      }`}
                    >
                      {item.heading}
                    </h2>
                    <p className="ff-cabin leading-[140%] max-w-[353px] text-dark-black opacity-70 capitalize">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="block min-[1070px]:hidden">
              <div className="flex flex-wrap justify-center gap-[49px] sm:gap-[80px]">
                {ROADMAP_DATA.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center max-w-[300px]"
                  >
                    <img
                      className="w-[54px] h-[54px]"
                      src={
                        index === 0
                          ? roadmapImgOne
                          : index === 1
                          ? roadmapImgTwo
                          : roadmapImgThree
                      }
                      alt={`roadmap-img-${index + 1}`}
                    />
                    <p className="font-bold text-xl leading-120 pt-[13px] font-lato text-dark-black">
                      {" "}
                      {item.heading}{" "}
                    </p>
                    <p className="text-dark-black opacity-70 leading-[134%] ff-cabin pt-[6px]">
                      {" "}
                      {item.paragraph}{" "}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JakZaczac;
