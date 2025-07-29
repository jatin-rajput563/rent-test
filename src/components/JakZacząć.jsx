import React from "react";
import RoadmapTopImg from "../assets/images/png/roadmap-top-img.png";
import RoadmapImg1 from "../assets/images/svg/roadmap-img-1.svg";
import RoadmapImg2 from "../assets/images/svg/roadmap-img-2.svg";
import RoadmapImg3 from "../assets/images/svg/roadmap-img-3.svg";
import RoadmapLine1 from "../assets/images/svg/roadmap-line-1.svg";
import RoadmapLine2 from "../assets/images/svg/roadmap-line-2.svg";
import CustomHeading from "./common/CustomHeading";
import CustomPara from "./common/CustomPara";

const JakZacząć = () => {
  return (
    <>
      <div className="sm:pt-[191px]">
        <div className="max-w-[1140px] mx-auto px-[19.5px] xl:px-0">
          <img
            className="max-w-[221px] mx-auto"
            src={RoadmapTopImg}
            alt="roadmap-top-img"
          />
          <div className="w-full shadow-lg rounded-[15px] border border-[#F6F5F4] pt-[25px] sm:pt-[35px] md:pt-[45px] lg:pt-[62px] pb-[53px] sm:pb-[62px] relative">
            <CustomHeading headText={"Jak Zacząć?"} headClass={"text-center"} />
            <CustomPara
              paraClass={
                "max-w-[234px] sm:max-w-[450px] mx-auto !text-dark-black opacity-70 text-center leading-134 pt-[18px] ff-cabin capitalize mb-[41px] sm:mb-[51px] md:mb-[69px]"
              }
              paraText={
                " Chcesz uprościć zarządzanie swoją nieruchomością? Wykonaj trzy proste kroki:"
              }
            />
            <div className="relative max-w-[1200px] mx-auto px-4 before:content-[''] hidden min-[1070px]:block before:absolute before:top-0 before:bottom-0 before:left-1/2 before:-ml-[3px]">
              <img
                className="absolute min-[1140px]:left-[43%] z-10 left-[47%]"
                src={RoadmapImg1}
                alt="roadmap-img-1"
              />
              <img
                className="absolute left-[49.2%] top-[11%] hidden min-[1140px]:block"
                src={RoadmapLine1}
                alt="roadmap-line-1"
              />
              <div className="w-1 bg-black absolute left-[50.5%] top-[1%] block min-[1140px]:hidden h-[350px] min-[768px]:h-[281px] max-[900px]:left-[52%]"></div>
              <img
                className="absolute left-[47%] min-[1140px]:left-[51.8%] top-[37%]"
                src={RoadmapImg2}
                alt="roadmap-img-2"
              />
              <img
                className="absolute right-[47.9%] top-[48%] hidden min-[1140px]:block"
                src={RoadmapLine2}
                alt="line-2"
              />
              <img
                className="absolute min-[1140px]:left-[43%] left-[47%] top-[74.6%] "
                src={RoadmapImg3}
                alt="roadmap-img-3"
              />
              <div className="relative w-1/2 lg:pl-[95px] -top-[3px] md:left-0 max-lg:!max-w-[292px]">
                <div className="max-w-[352px]">
                  <h2 className="text-xl font-bold text-right pb-[6px]">
                    Skonfiguruj Swój Pakiet
                  </h2>
                  <p className="ff-cabin leading-134 text-dark-black opacity-70 mb-0 text-right capitalize">
                    Porozmawiaj z Zoe i pozwól jej wybrać funkcje, które
                    odpowiadają potrzebom Twojej firmy.
                  </p>
                </div>
              </div>
              <div className="relative w-1/2 !pl-0 md:!pl-[90px] lg:!pl-[119px] mb-10 left-1/2 min-[1024px]:left-[44%] min-[1140px]:left-[51%] max-[1139px]:top-[21px]">
                <div className="max-w-[339px]">
                  <h2 className="text-xl font-bold font-lato pb-[6px] max-w-[402px] lg:whitespace-nowrap  text-dark-black">
                    Uzyskaj Spersonalizowane Rekomendacje
                  </h2>
                  <p className="ff-cabin leading-134 text-dark-black opacity-70 capitalize">
                    Otrzymaj natychmiastową, dostosowaną do Twoich potrzeb
                    propozycję modułu — wraz z przejrzystą wyceną.
                  </p>
                </div>
              </div>
              <div className="relative w-1/2 lg:pl-[95px] md:left-0 max-lg:!max-w-[292px]">
                <div className="max-w-[353px]">
                  <h2 className="text-xl font-bold text-right font-lato pb-[6px] text-dark-black">
                    Przetestuj lub Skontaktuj się z nami
                  </h2>
                  <p className="ff-cabin leading-134 text-dark-black opacity-70 text-right capitalize">
                    Załóż konto, lub umów się na bezpłatną konsultację z naszym
                    zespołem.
                  </p>
                </div>
              </div>
            </div>
            <div className="block min-[1070px]:hidden">
              <div className="justify-center flex flex-col items-center">
                <img
                  className="size-[54.26px]"
                  src={RoadmapImg1}
                  alt="roadmap-img-1"
                />
                <p className="font-bold text-xl leading-[100%] pt-[13px] font-lato text-center whitespace-nowrap text-dark-black">
                  Skonfiguruj Swój Pakiet
                </p>
                <p className="sm:max-w-[338px] max-w-[206px] text-center text-dark-black opacity-70 leading-134 ff-cabin pt-[6px]">
                  Porozmawiaj z Zoe i pozwól jej wybrać funkcje, które
                  odpowiadają potrzebom Twojej firmy.
                </p>
              </div>
              <div className="justify-center flex flex-col items-center mt-[49px]">
                <img
                  className="size-[54.26px]"
                  src={RoadmapImg2}
                  alt="roadmap-img-2"
                />
                <p className="font-bold text-xl leading-120 pt-[13px] text-dark-black font-lato max-w-[212px] sm:max-w-[300px] text-center mx-auto">
                  Uzyskaj Spersonalizowane Rekomendacje
                </p>
                <p className="sm:max-w-[338px] max-w-[242px] text-center text-dark-black opacity-[70%] leading-134 ff-cabin pt-[6px]">
                  Otrzymaj natychmiastową, dostosowaną do Twoich potrzeb
                  propozycję modułu — wraz z przejrzystą wyceną.
                </p>
              </div>
              <div className="justify-center flex flex-col items-center mt-[49px]">
                <img
                  className="size-[54.26px]"
                  src={RoadmapImg3}
                  alt="roadmap-img-3"
                />
                <p className="font-bold text-xl leading-120 pt-[13px] text-dark-black font-lato max-w-[212px] text-center mx-auto">
                  Przetestuj lub Skontaktuj się z nami
                </p>
                <p className="sm:max-w-[338px] max-w-[212px] text-center text-dark-black opacity-[70%] leading-134 ff-cabin pt-[6px]">
                  Załóż konto, lub umów się na bezpłatną konsultację z naszym
                  zespołem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JakZacząć;
