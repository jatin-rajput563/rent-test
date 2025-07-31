import React from "react";
import logoImg from "../assets/images/png/logo-text.png";
import heroDots from "../assets/images/png/dots-img.png";
import CustomButton from "./common/CustomButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HEROSLIDER_DATA } from "../utils/helper";

const Hero = () => {
  return (
    <>
      <div className="px-[19.5px] sm:px-[24px] md:px-[27px] lg:px-[37px]">
        <div className="max-w-[1440px] relative bg-light-grey mx-auto rounded-[30px] pt-[53px] sm:pt-[77px]">
          <img
            className="absolute right-[14px] top-[28px] max-w-[114px] w-full pointer-events-none h-[186px] max-[1275px]:left-[14px] max-[1067px]:hidden"
            src={heroDots}
            alt="dots"
          />
          <div className="justify-center items-center flex mx-auto mb-[18px] max-w-[291px] sm:max-w-full">
            <p className="bg-light-purple max-w-[352.97px] text-sm sm:text-base max-sm:whitespace-nowrap w-full py-[11.5px] uppercase rounded-[21px] border border-purple-blue text-purple-blue font-bold leading-100 text-center">
              Twój zespół cyfrowy dostępny 24/7.{" "}
            </p>
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] hidden lg:block font-bold leading-[128%] text-dark-blue max-w-[860px] text-center mx-auto">
              Zautomatyzuj zarządzanie nieruchomościami
              <span className="bg-light-purple rounded-tl-xl rounded-bl-xl relative pl-2 ml-1">
                dzięki AI.
                <img
                  className="absolute -top-[32px] pointer-events-none -right-[85px] "
                  src={logoImg}
                  alt="logo-text-img" />
              </span>
            </h1>
            <h1 className="text-4xl sm:text-5xl min-[769px]:text-6xl lg:text-[64px] lg:hidden font-bold leading-[128%] text-dark-blue max-w-[860px] text-center mx-auto">
              Zautomatyzuj zarządzanie nieruchomościami dzięki AI.
            </h1>
            <p className="leading-134 opacity-80 text-dark-blue max-[425px]:max-w-[280px] lg:max-w-[820px] text-center pt-[9px] sm:pt-[15px] mx-auto">
              Pierwszy w Polsce system CRM oparty na sztucznej inteligencji,
              stworzony specjalnie dla firm zarządzających nieruchomościami.
              <br />
              Zautomatyzuj swoje działania, wyeliminuj chaos i skaluj
              działalność — bez zatrudniania dodatkowych pracowników.
            </p>
            <div className="sm:mt-[15.5px] mt-[10px] flex flex-wrap gap-[10px] sm:gap-[27px] mx-auto justify-center items-center">
              <CustomButton
                btnClass="!py-[9px] !px-[16.7px] bg-purple-blue text-white"
                btnText={"Jesteśmy również na YouTube."} />
              <CustomButton
                btnClass="!py-[9px] !px-[22.6px] bg-purple-blue text-white"
                btnText={"Zobacz Zoe w akcji"} />
            </div>
          </div>
          <div className="min-[769px]:mt-[5.5px] px-4">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={5}
              spaceBetween={44}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              centeredSlides={true}
              pagination={{
                clickable: false,
              }}
              breakpoints={{ 1440: { slidesPerView: 5 }, 1280: { slidesPerView: 4 }, 1024: { slidesPerView: 3.5 }, 768: { slidesPerView: 2.5 }, 640: { slidesPerView: 2 }, 480: { slidesPerView: 1.5 }, 0: { slidesPerView: 1 }, }}
              className="mySwiper" >
              {HEROSLIDER_DATA.map((slide, index) => { let textMaxWidth = "max-w-[220px]"; if (index === 1) textMaxWidth = "max-w-[260px]"; else if (index === 2) textMaxWidth = "max-w-[250px]"; else if (index === 3) textMaxWidth = "max-w-[250px]";
                return (
                  <SwiperSlide key={index}>
                    <div
                      className="relative bg-white rounded-[15px]  w-full h-[261px] mt-[48px] sm:mt-[60px] md:mt-[75px] lg:mt-[82px] mb-[33px] sm:mb-[20px] mx-auto"
                      style={{ boxShadow: "7px -5px 35.4px 0px #5E13F61A" }} >
                      <img className=" h-[145px] w-full object-cover rounded-t-[15px]" src={slide.image} alt="slider-img" />
                      <div className="absolute top-[40%] size-[54px] left-1/2 -translate-x-1/2 z-10">
                        <slide.sliderIcon />
                      </div>
                      <p className={`text-xs ${textMaxWidth} leading-129 pt-[31px] pl-[17px] pr-[31px] pb-[40px] text-center mx-auto text-dark-blue opacity-80`} >
                        {slide.description}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
