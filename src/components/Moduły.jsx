import React, { useState } from "react";
import dotImage from "../assets/images/png/dot.png";
import circleImage from "../assets/images/png/circle.png";
import tabImage from "../assets/images/png/tab-image.png";
import taskChecklist from "../assets/images/svg/task-checklist.svg";
import { tabData } from "../utils/helper";

export function FeatureCard({ label, color }) {
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-2xl px-2 py-5 min-h-[120px]">
      <div
        className="mb-3 rounded-2xl w-[57px] h-[57px] flex items-center justify-center"
        style={{ background: color, minWidth: 57, minHeight: 57 }}
      >
        <img
          src={taskChecklist}
          alt=""
          className="w-[31.23px] h-[31.23px]"
          draggable={false}
        />
      </div>
      <p className="font-cabin text-base leading-[137%] text-dark-blue opacity-70 font-medium">
        {label}
      </p>
    </div>
  );
}
const Moduły = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabData[activeTab];
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
        <div className=" bg-gray-50">
          <div className="flex flex-col lg:flex-row gap-6 max-w-[1270px] mx-auto px-3 py-10">
            <aside
              className="w-full gap-2.5 grid
    grid-cols-1                                      // default <650px
    [@media(min-width:650px)]:grid-cols-2            // 650px+
    [@media(min-width:858px)]:grid-cols-3            // 858px+
    lg:flex lg:flex-col max-[450px]:max-w-[267px] lg:max-w-[267px] mx-auto"
            >
              {tabData.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`relative h-[76px] px-[16px] rounded-md font-medium transition-all text-sm sm:text-xl text-center
    ${
      activeTab === idx
        ? "bg-purple-blue text-white"
        : "bg-white border border-gray-200 text-dark-blue hover:bg-gray-100"
    } ${idx === 0 ? "whitespace-nowrap" : ""}`}
                  style={
                    activeTab === idx
                      ? { boxShadow: "0px -3.01px 20.32px 0px #00000029" }
                      : {}
                  }
                >
                  {item.label}
                </button>
              ))}
            </aside>

            <section className="bg-white shadow-xl rounded-2xl p-5 w-full lg:w-3/4">
              <h2 className="text-2xl sm:text-4xl font-bold text-dark-blue text-center">
                {tab.heading}
              </h2>
              <h3 className="text-purple-blue text-lg sm:text-2xl font-semibold mt-[11px] text-center">
                {tab.subheading}
              </h3>
              <p className="text-dark-blue opacity-80 text-sm sm:text-base mt-[11px] text-center mx-auto max-w-[777px]">
                {tab.description}
              </p>
              <p className="text-dark-blue text-2xl text-center font-bold mt-[37px]">
                Co konkretnie zawiera?
              </p>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-6 mt-[17px]">
                <div className="hidden md:flex flex-col gap-6 md:gap-8 flex-1">
                  <FeatureCard
                    label={tab.features[0].title}
                    color={tab.features[0].color}
                  />
                  <FeatureCard
                    label={tab.features[2].title}
                    color={tab.features[2].color}
                  />
                </div>

                <div className="hidden md:flex flex-shrink-0 items-center justify-center my-6 md:my-0">
                  <div className="w-[188px] flex items-center justify-center relative overflow-hidden">
                    <img src={tabImage} alt="" className="" draggable={false} />
                  </div>
                </div>
                <div className="hidden md:flex flex-col gap-6 md:gap-8 flex-1">
                  <FeatureCard
                    label={tab.features[1].title}
                    color={tab.features[1].color}
                  />
                  <FeatureCard
                    label={tab.features[3].title}
                    color={tab.features[3].color}
                  />
                </div>
              </div>
              <div className="md:hidden flex flex-col gap-6 mt-6">
                <FeatureCard
                  label={tab.features[0].title}
                  color={tab.features[0].color}
                />
                <FeatureCard
                  label={tab.features[2].title}
                  color={tab.features[2].color}
                />
                <div className="flex items-center justify-center my-6">
                  <div className="w-[188px] flex items-center justify-center relative overflow-hidden">
                    <img src={tabImage} alt="" className="" draggable={false} />
                  </div>
                </div>
                <FeatureCard
                  label={tab.features[1].title}
                  color={tab.features[1].color}
                />
                <FeatureCard
                  label={tab.features[3].title}
                  color={tab.features[3].color}
                />
              </div>

              <div className="mt-[67px] max-w-[808px] mx-auto">
                <h3 className="text-lg sm:text-[32px] font-semibold text-center text-dark-blue">
                  {tab.benefitsTitle}
                </h3>
                <h5 className="text-purple-blue text-2xl text-center font-bold mt-[15px]">
                  {tab.benefitsSub}
                </h5>
                <div className="flex flex-wrap justify-center gap-2.5 mt-4">
                  {tab.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="box-shadow flex flex-col items-center px-4 pt-6 pb-14 text-sm text-center font-semibold md:w-[194px] w-full"
                    >
                      {benefit.iconSrc && (
                        <div
                          className={`icon-glow flex justify-center items-center w-[53px] h-[53px] rounded-xl mx-auto ${benefit.bgColor}`}
                        >
                          <img
                            src={benefit.iconSrc}
                            alt=""
                            className="w-[29px] h-[29px]"
                            draggable={false}
                          />
                        </div>
                      )}
                      <div
                        className={`pt-4.5 text-xs text-dark-black opacity-70 ${
                          idx === 1 ? "w-[186px]" : ""
                        }`}
                      >
                        {benefit.text || benefit}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moduły;
