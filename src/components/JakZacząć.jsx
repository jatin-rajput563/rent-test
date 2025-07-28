import React from "react";
import RoadmapTopImg from "../assets/images/png/roadmap-top-img.png";
import RoadmapImg1 from "../assets/images/svg/roadmap-img-1.svg";
import RoadmapImg2 from "../assets/images/svg/roadmap-img-2.svg";
import RoadmapImg3 from "../assets/images/svg/roadmap-img-3.svg";
import RoadmapLine1 from "../assets/images/svg/roadmap-line-1.svg";
import RoadmapLine2 from "../assets/images/svg/roadmap-line-2.svg";
import CustomHeading from "./common/CustomHeading";

const JakZacząć = () => {
  return (
    <section className="md:pt-[212px] pt-[121px] md:pb-[176px] pb-[133px] px-5">
      <div className="max-w-[1140px] mx-auto">
        <img
          className="max-w-[221px] mx-auto"
          src={RoadmapTopImg}
          alt="roadmap-top-img"
        />
        <div className="w-full shadow-lg rounded-[15px] border border-[#F6F5F4] pt-[62px] pb-[66px] relative">
          <CustomHeading headText={"Jak Zacząć?"} headClass={"text-center"} />
          <p className="max-w-[234px] sm:max-w-[450px] mx-auto text-center leading-134 text-[#4D4F4E] pt-[18px] font-cabine capitalize mb-[69px]">
            Chcesz uprościć zarządzanie swoją nieruchomością? Wykonaj trzy
            proste kroki:
          </p>
          

          {/* Desktop View */}
          <div className="relative max-w-[1200px] mx-auto px-4 before:content-[''] hidden md:block before:absolute before:top-0 before:bottom-0 before:left-1/2 before:-ml-[3px]">
            <img
              className="absolute min-[1140px]:left-[43%] z-10 left-[47%]"
              src={RoadmapImg1}
              alt="roadmap-img-1"
            />
            <img
              className="absolute left-[49.2%] top-[13%] hidden min-[1140px]:block"
              src={RoadmapLine1}
              alt="roadmap-line-1"
            />
            <div className="w-1 bg-black absolute left-[50.5%] top-[1%] block min-[1140px]:hidden h-[350px] min-[768px]:h-[281px] max-[900px]:left-[52%]"></div>
            <img
              className="absolute left-[47%] min-[1140px]:left-[51.8%] top-[36%]"
              src={RoadmapImg2}
              alt="roadmap-img-2"
            />
            <img
              className="absolute right-[47.9%] top-[49%] hidden min-[1140px]:block"
              src={RoadmapLine2}
              alt="line-2"
            />
            <img
              className="absolute min-[1140px]:left-[43%] left-[47%] top-[73.6%]"
              src={RoadmapImg3}
              alt="roadmap-img-3"
            />

            {/* Step 1 */}
            <div className="relative w-1/2 lg:pl-[95px] md:left-0 max-lg:!max-w-[292px]">
              <div className="max-w-[339px]">
                <h2 className="text-xl font-bold text-right font-lato pb-[6px]">
                  Configure Your Package
                </h2>
                <p className="font-cabin leading-137 text-[#4D4F4E] mb-0 text-right capitalize">
                  Click “Configure Your Package” and select the features that
                  match your business needs.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative w-1/2 !pl-0 md:!pl-[90px] lg:!pl-[119px] mb-10 left-1/2 min-[1024px]:left-[44%] min-[1140px]:left-[51%]">
              <div className="max-w-[339px]">
                <h2 className="text-xl font-bold font-lato pb-[6px]">
                  Get a Custom Recommendation
                </h2>
                <p className="font-cabin leading-137 text-[#4D4F4E] max-w-[319px] capitalize">
                  Receive an instant, tailored module suggestion — complete with
                  transparent pricing.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative w-1/2 lg:pl-[95px] md:left-0 max-lg:!max-w-[292px]">
              <div className="max-w-[339px]">
                <h2 className="text-xl font-bold text-right font-lato pb-[6px]">
                  Test or Talk to Us
                </h2>
                <p className="font-cabin leading-137 text-[#4D4F4E] text-right capitalize tracking-tight">
                  Create a test account to explore the platform yourself or book
                  a free consultation with our team.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="block md:hidden">
            <div className="justify-center flex flex-col items-center">
              <img
                className="size-[54.26px]"
                src="./assets/images/svg/roadmap-img-1.svg"
                alt="roadmap-img-1"
              />
              <p className="font-bold text-xl leading-[100%] pt-[13px] font-lato text-center whitespace-nowrap">
                Configure Your Package
              </p>
              <p className="sm:max-w-[338px] max-w-[206px] text-center text-dark-black opacity-[70%] leading-134 font-cabin pt-[6px]">
                Click “Configure Your Package” and select the features that
                match your business needs.
              </p>
            </div>
            <div className="justify-center flex flex-col items-center mt-[49px]">
              <img
                className="size-[54.26px]"
                src="./assets/images/svg/roadmap-img-2.svg"
                alt="roadmap-img-2"
              />
              <p className="font-bold text-xl leading-[100%] pt-[13px] font-lato max-w-[212px] sm:max-w-[300px] text-center mx-auto">
                Get a Custom Recommendation
              </p>
              <p className="sm:max-w-[338px] max-w-[242px] text-center text-dark-black opacity-[70%] leading-134 font-cabin pt-[6px]">
                Receive an instant, tailored module suggestion — complete with
                transparent pricing.
              </p>
            </div>
            <div className="justify-center flex flex-col items-center mt-[49px]">
              <img
                className="size-[54.26px]"
                src="./assets/images/svg/roadmap-img-3.svg"
                alt="roadmap-img-3"
              />
              <p className="font-bold text-xl leading-[100%] pt-[13px] font-lato max-w-[212px] text-center mx-auto">
                Test or Talk to Us
              </p>
              <p className="sm:max-w-[338px] max-w-[212px] text-center text-dark-black opacity-[70%] leading-134 font-cabin pt-[6px]">
                Create a test account to explore the platform yourself or book a
                free consultation with our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JakZacząć;
