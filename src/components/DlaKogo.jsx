import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { DlaKogo_data } from "../utils/helper";
import CustomHeading from "./common/CustomHeading";

const DlaKogo = () => {
  return (
    <section className="pt-[140px]">
      <div className="max-w-[1180px] px-5 mx-auto">
        <div className="text-center">
          <CustomHeading
            headClass="font-bold text-dark-blue !leading-[121%] mb-[44px] text-center"
            headText="Dla kogo?"
          />
          <Tabs>
            <TabList className="inline-flex bg-white border border-purple-blue rounded-full gap-1 justify-center items-center">
              <Tab
                className="py-[21.5px] pl-[58.8px] pr-[42px] rounded-[73px] text-xl font-bold text-dark-blue cursor-pointer border border-transparent focus:outline-none focus:ring-0 transition-colors duration-300"
                selectedClassName="bg-purple-blue text-white border border-purple-blue shadow-sm"
              >
                Firm, Które...
              </Tab>
              <Tab
                className="px-6 py-[21.5px] rounded-[73px] text-xl font-bold text-dark-blue cursor-pointer border border-transparent focus:outline-none focus:ring-0 transition-colors duration-300"
                selectedClassName="bg-purple-blue text-white border border-purple-blue shadow-sm"
              >
                Właścicieli, Którzy...
              </Tab>
            </TabList>
            <TabPanel>
              <div className="mt-[77px] grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center place-items-center">
                {DlaKogo_data.map((item, index) => {
                  const iconBgColors = [
                    "#5E13F6",
                    "#FF3B61",
                    "#FF4DF5",
                    "#00F0FF",
                  ];
                  const iconShadows = [
                    "group-hover:shadow-[5px_7px_58.2px_0px_#5E13F6]",
                    "group-hover:shadow-[5px_7px_58.2px_0px_#FF3B61]",
                    "group-hover:shadow-[5px_7px_58.2px_0px_#FF4DF5]",
                    "group-hover:shadow-[5px_7px_58.2px_0px_#00F0FF]",
                  ];

                  const iconBg = iconBgColors[index] || "#000";
                  const iconShadow = iconShadows[index] || "";

                  const iconPositionClass =
                    index === 1
                      ? "mt-2 mr-6"
                      : index === 2
                      ? "-mt-10 mr-4"
                      : "mr-4 mb-4";

                  return (
                    <div
                      key={index}
                      className="group rounded-[20px] w-full max-w-[300px] pt-6 pb-5 text-center duration-300 cursor-pointer bg-white hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                    >
                      <div
                        className={`w-[77px] h-[77px] mx-auto mb-4 flex items-center justify-center rounded-xl transition-shadow duration-300 ${iconShadow}`}
                        style={{ backgroundColor: iconBg }}
                      >
                        <div
                          className={`text-black w-6 h-6 ${iconPositionClass}`}
                        >
                          <item.icon className="w-full h-full" />
                        </div>
                      </div>
                      <h3 className="text-dark-black font-bold text-xl leading-100">
                        {item.title}
                      </h3>
                      <p className="text-dark-black text-sm opacity-80 mt-[11px] leading-snug">
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
                  Coming Soon: Owner Specific Features...
                </p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DlaKogo;
