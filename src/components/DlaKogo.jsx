import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { DLAKOGO_DATA } from "../utils/helper";
import CustomHeading from "./common/CustomHeading";
import { useLocation } from "react-router-dom";
import {
  ICONBGCOLORS_DATA,
  ICONSHADOWS_DATA,
  CARDSHAOWS_DATA,
} from "../utils/helper";

const DlaKogo = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div
        id="dlakogo"
        className={`${isHomePage ? "pt-[145px] sm:pt-[140px]" : "pt-0"}`} >
        <div className="max-w-[1180px] px-5 mx-auto">
          <div className="text-center">
            <CustomHeading
              headingClass="font-bold text-dark-blue !leading-[121%] mb-[34px] sm:mb-[44px] text-center"
              headingText="Dla kogo?"
            />
            <Tabs>
              <TabList className="inline-flex bg-white border border-purple-blue rounded-full gap-1 justify-center items-center">
                <Tab
                  className="sm:py-[21.5px] sm:pl-[58.8px] py-[27px] px-9 whitespace-nowrap sm:pr-[42px] rounded-[73px] sm:text-xl font-bold text-dark-blue cursor-pointer border border-transparent focus:outline-none focus:ring-0 transition-colors duration-300"
                  selectedClassName="bg-purple-blue text-white border border-purple-blue shadow-sm  shadow-[inset_4px_6px_4px_0px_#00000040]"
                >
                  Firm, Które...
                </Tab>
                <Tab
                  className="pl-4 sm:px-6 py-[27px] sm:py-[21.5px] rounded-[73px] whitespace-nowrap sm:text-xl font-bold text-dark-blue cursor-pointer border border-transparent focus:outline-none focus:ring-0 transition-colors duration-300"
                  selectedClassName="bg-purple-blue text-white border border-purple-blue shadow-sm shadow-[inset_4px_6px_4px_0px_#00000040]" >
                  Właścicieli, Którzy...
                </Tab>
              </TabList>
              <TabPanel>
                <div className="mt-[79px] sm:mt-[77px] flex flex-wrap justify-center gap-[45px]">
                  {DLAKOGO_DATA.map((item, index) => {
                    const iconBg = ICONBGCOLORS_DATA[index] || "#000";
                    const iconShadow = ICONSHADOWS_DATA[index] || "";
                    const cardShadow = CARDSHAOWS_DATA[index] || "";

                    const iconPositionClass =
                      index === 1
                        ? "mt-2 mr-6"
                        : index === 2
                        ? "-mt-10 mr-4"
                        : "mr-4 mb-4";

                    return (
                      <div
                        key={index}
                        className={`group rounded-[20px] bg-white text-center cursor-pointer duration-300 ${cardShadow}
                          w-[301px] h-[155px] sm:w-[251px] sm:h-[258px] sm:py-[30px]`} >
                        <div
                          className={`w-[74px] h-[74px] mx-auto mb-6 flex items-center justify-center rounded-xl transition-shadow duration-300 ${iconShadow}`}
                          style={{ backgroundColor: iconBg }} >
                          <div
                            className={`text-black w-6 h-6 ${iconPositionClass}`}
                          >
                            <item.icon className="w-full h-full" />
                          </div>
                        </div>
                        <h3 className="text-dark-black font-bold text-xl leading-100">
                          {item.title}
                        </h3>
                        <p
                          className={`text-dark-black text-sm opacity-80 mt-[11px] leading-134 ff-cabin mx-auto ${
                            index === 3 ? "max-w-[170px]" : "" }`} >
                          {item.subtitle}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="mt-12 text-center text-dark-blue">
                  <p className="text-lg font-medium">
                    Wkrótce: Funkcje dla Właścicieli...
                  </p>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default DlaKogo;
