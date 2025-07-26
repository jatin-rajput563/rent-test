import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { DlaKogo_data } from "../utils/helper";
import CustomHeading from "./common/CustomHeading";

const DlaKogo = () => {
  return (
    <section className="py-[114px] min-h-screen">
      <div className="max-w-[1180px] px-5 mx-auto">
        <div className="text-center">
          <h2 className="text-[28px] md:text-[36px] font-bold text-dark-blue"></h2>
          <CustomHeading
            headClass={
              "font-bold text-dark-blue !leading-[121%] mb-6 text-center"
            }
            headText={"Dla kogo?"}
          />
          <Tabs>
            <TabList className="inline-flex bg-[#f2ebfe] p-[5px] rounded-full gap-2">
              <Tab
                className="px-6 py-2 rounded-full text-sm font-semibold text-dark-blue cursor-pointer react-tabs__tab"
                selectedClassName="bg-purple-600 text-white"
              >
                Firm, Które...
              </Tab>
              <Tab
                className="px-6 py-2 rounded-full text-sm font-semibold text-dark-blue cursor-pointer react-tabs__tab"
                selectedClassName="bg-purple-600 text-white"
              >
                Właścicieli, Którzy...
              </Tab>
            </TabList>
            <TabPanel>
              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {DlaKogo_data.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-[20px] max-w-[251px] px-5 pt-6 pb-5 text-center shadow-lg hover:scale-[1.02] duration-300 cursor-pointer ${
                      index === 1
                        ? "bg-white border-2 border-[#fce7f3]"
                        : "bg-white"
                    }`}
                  >
                    <div
                      className={`w-[55px] h-[55px] mx-auto mb-4 flex items-center justify-center rounded-xl ${item.bg}`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-dark-blue font-semibold text-lg">
                      {item.title}
                    </h3>
                    <p className="text-dark-blue text-sm opacity-80 mt-1 leading-snug">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
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
