import React from "react";
import logoImg from "../assets/images/png/logo-text.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { HeroSlider_Data } from "../utils/helper";

const Hero = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="max-w-[1440px] px-[37px] bg-light-grey mx-auto rounded-[30px] pt-[77px]">
          <div className="justify-center items-center flex">
            <p className="bg-light-purple max-w-[352.97px] w-full py-[11.5px] rounded-[21px] border border-purple-blue text-purple-blue font-bold leading-100 text-center">
              Twój zespół cyfrowy dostępny 24/7.
            </p>
          </div>
          <div>
            <h1 className="text-[64px] font-bold leading-[120%] text-dark-blue max-w-[860px] text-center mx-auto">
              Zautomatyzuj zarządzanie nieruchomościami
              <span className="bg-light-purple rounded-tl-xl rounded-bl-xl relative">
                dzięki AI.
                <img
                  className="absolute -top-[32px] -right-[85px]"
                  src={logoImg}
                  alt="logo-text-img"
                />
              </span>
            </h1>
            <p className="leading-[129%] opacity-80 text-dark-blue max-w-[820px] text-center pt-[15px] mx-auto">
              Pierwszy w Polsce system CRM oparty na sztucznej inteligencji,
              stworzony specjalnie dla firm zarządzających nieruchomościami.{" "}
              <br />
              Zautomatyzuj swoje działania, wyeliminuj chaos i skaluj
              działalność — bez zatrudniania dodatkowych pracowników.
            </p>
          </div>
          <div className="mt-10">
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: false,
              }}
              className="mySwiper"
            >
              {HeroSlider_Data.map((slide, index) => (
                <div key={index}>
                  <SwiperSlide>
                    <div
                      className="bg-white rounded-t-[15px] max-w-[231px] w-full h-[261px]"
                      style={{ boxShadow: "7px -5px 35.4px 0px #5E13F61A" }}
                    >
                      <img
                        className="max-w-[231px] w-full rounded-t-[15px]"
                        src={slide.Image}
                        alt="slider-img"
                      />
                      <p className="text-xs max-w-[183px] leading-[129%] pt-[31px] pl-[17px] pr-[31px] pb-[40px] text-center mx-auto ">{slide.description}</p>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
