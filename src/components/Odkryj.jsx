import React from "react";
import spyImg from "../assets/images/png/spy-img.png";
import discoverRentImg from "../assets/images/png/discover-rent-img.png";
import CustomHeading from "./common/CustomHeading";
import SubHeading from "./common/SubHeading";
// import Description from "./common/Description";
import CustomButton from "./common/CustomButton";
import CustomPara from "./common/CustomPara";

const Odkryj = () => {
  return (
    <div>
      <section className="lg:pt-[140px] md:pt-[80px] pt-[52px] px-[17px]">
        <div className="max-w-[1137px] mx-auto">
          <div className="max-w-[221px] ml-12 z-10 pointer-events-none max-sm:mx-auto pointer-events-none">
            <img src={spyImg} alt="spy-img" />
          </div>
          <div className="bg-white border-2 border-grey rounded-[15px] renteasy-bg-shadow md:py-[55px] max-md:pt-[41px] max-md:pb-[33px] xl:pl-14 pl-[37px] pr-[37px] max-lg:px-7 max-sm:px-[10px]">
            <div className="min-[821px]:flex max-[821px]:flex-wrap gap-9 lg:gap-[58px]">
              <div className="flex flex-col max-[820px]:items-center max-sm:px-4">
                <CustomHeading
                  headClass={
                    "font-bold text-dark-blue !leading-[121%] font-lato xl:text-5xl md:text-custom-4xl max-[820px]:text-center max-w-[471px]"
                  }
                  headText={" Odkryj RentEasy.AI"}
                />
                <div className="xl:pr-3">
                  <SubHeading
                    subText={
                      "Jesteśmy Twoim zespołem ds. operacji cyfrowych, pracującym dla Ciebie 24/7."
                    }
                    subClass={
                      "pt-[11px] sm:pt-[18px] !leading-129 sm:pb-[14px] pb-[6px] max-w-[437px] max-[820px]:text-center max-[820px]:mx-auto"
                    }
                  />
                  <CustomPara
                    paraClass={
                      "opacity-80 font-normal max-w-[262px] max-md:mx-auto sm:max-w-[457px] max-[820px]:text-center"
                    }
                    paraText={
                      <>
                        RentEasy.AI to pierwszy w Polsce system CRM stworzony od
                        podstaw specjalnie dla firm zarządzających
                        nieruchomościami. Automatyzujemy codzienne operacje,
                        ograniczamy chaos i pomagamy rozwijać działalność bez
                        konieczności zatrudniania dodatkowych pracowników.
                        <br /> <br />{" "}
                        <span className="hidden sm:block">
                          Nie jesteśmy kolejnym ładnym panelem do ewidencji
                          mieszkań. Jesteśmy cyfrowym zespołem operacyjnym,
                          który pracuje dla Ciebie 24/7.
                        </span>
                      </>
                    }
                  />
                </div>
                <CustomButton
                  btnClass={
                    "py-[11.4px] px-[23px] max-w-max rounded-[21px] max-sm:mx-auto bg-purple-blue text-white mt-0 sm:mt-[28px] mb-[28px] min-[830px]:mb-0 md:mt-[35px] leading-121"
                  }
                  btnText={"Sprawdź nas!"}
                />
              </div>
              <div>
                <img
                  src={discoverRentImg}
                  alt="discover-rent-img"
                  className="max-[425px]:h-[474px] min-[820px]:w-[517.3px] min-[820px]:h-[515px] pointer-events-none rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Odkryj;
