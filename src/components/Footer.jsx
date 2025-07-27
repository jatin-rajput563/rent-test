import React from "react";
import CustomButton from "./common/CustomButton";
import CustomHeading from "./common/CustomHeading";
import FooterLogo from "../assets/images/svg/FooterLogo.svg";
import { FooterIcons } from "../utils/helper";
import Location from "../assets/images/svg/Location.svg";
import Phone from "../assets/images/svg/Phone.svg";
import Mail from "../assets/images/svg/Mail.svg";

const Footer = () => {
  return (
    <>
      <section className="sm:px-[37px] px-[21px] sm:pt-20 pt-[116px]">
        <div className="container max-w-[1366px] !transform-[unset] -mt-[59px] sm:-mt-[65px] translate-y-[59px] sm:translate-y-[65px] mx-auto rounded-[15px] bg-purple-blue w-full sm:py-10 pt-[41px] md:py-[61px] px-5 pb-[57px] sm:px-6">
          <CustomHeading
            headText=" Zrób pierwszy krok w kierunku bezstresowego zarządzania
            nieruchomościami"
            headClass={
              "text-center !leading-120 mb-[39px] md:mb-[41] lg:mb-[51px] text-white !text-[32px] sm:!text-[40px] md:!text-[48px]"
            }
          />
          <div className="flex justify-center">
            <CustomButton
              btnText={"Zarejestruj się"}
              btnClass={
                "text-white text-center hover:bg-white hover:text-dark-blue border-solid border-white !py-[9px] !px-[23.8px]"
              }
            />
          </div>
        </div>
      </section>

      <footer className="bg-dark-blue sm:pt-[169px] pt-[141px]">
        <div className="container w-full mx-auto max-w-[1182px] px-[21px] pb-[59px]">
          <div className="flex flex-wrap flex-row items-start">
            <div className="lg:w-[46%] sm:w-1/3 w-full max-sm:mb-[33px]">
              <div className="max-sm:flex justify-center">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src={FooterLogo}
                    alt="footer-logo"
                    width="183"
                    height="54"
                    className="max-sm:w-[246px] max-sm:h-[74px]"
                  />
                </a>
              </div>
              <p className="max-w-[257px] leading-160 text-white opacity-80 max-sm:text-center max-sm:mx-auto pt-[12px] sm:pt-[14.12px]">
                Zbudowane przez profesjonalistów, dla profesjonalistów
              </p>
              <div className="flex gap-4 mt-[22px] sm:mt-4 items-center max-sm:justify-center">
                {FooterIcons.map(({ name, href, svg }, index) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className="hover:scale-115 transition-transform duration-300 group hover:rotate-360"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      className="group"
                      xmlns="http://www.w3.org/2000/svg"
                      dangerouslySetInnerHTML={{ __html: svg }}
                    ></svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:w-[54%] sm:w-2/3 w-full flex sm:justify-end lg:justify-start pt-4">
              <div className="flex lg:gap-[112px] max-sm:justify-between max-sm:w-full gap-[50px] sm:gap-6 md:gap-16">
                <div className="sm:max-w-[173px] max-w-[109px]">
                  <p className="text-base text-white font-semibold font-lato leading-118 mb-[21px]">
                    Szybkie linki
                  </p>
                  <ul className="flex gap-4 flex-col">
                    {[
                      "Strona Główna",
                      "Dla kogo?",
                      "Jak to działa?",
                      "Moduły",
                      "Zoe",
                    ].map((link, i) => (
                      <li key={i} className="leading-160">
                        <a
                          href="#"
                          className="font-lato opacity-80 text-white text-base leading-160 relative after:h-[1px] after:absolute after:bg-white after:left-0 after:bottom-0 after:rounded-full after:right-full hover:after:right-0 after:duration-300 hover:text-white duration-300"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sm:max-w-[175px] max-w-[150px]">
                  <p className="text-base text-white font-semibold font-lato leading-118 mb-[21px]">
                    Napisz do nas
                  </p>
                  <ul className="flex gap-4 flex-col">
                    <li className="relative">
                      <a
                        href="#"
                        className=" opacity-80 text-white flex text-base leading-160 relative after:h-[1px] after:absolute after:bg-white after:left-0 after:bottom-0 after:rounded-full after:right-full hover:after:right-0 after:duration-300 hover:text-white duration-300"
                      >
                        <img
                          className="absolute left-[-30px] top-[-1px]"
                          src={Location}
                          alt="location-icon"
                        />
                        ul. Nowy Świat 33/13 00-029 Warszawa
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        href="tel:+48123456789"
                        className="font-lato opacity-80 text-white text-base leading-160 relative after:h-[1px] after:absolute after:bg-white after:left-0 after:bottom-0 after:rounded-full after:right-full hover:after:right-0 after:duration-300 hover:text-white duration-300"
                      >
                        <img
                          className="absolute left-[-30px] top-[-5px]"
                          src={Phone}
                          alt="phone-icon"
                        />
                        +48 123 456 789
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        href="mailto:support@renteasy.ai"
                        className="font-lato opacity-80 text-white text-base leading-160 relative after:h-[1px] after:absolute after:bg-white after:left-0 after:bottom-0 after:rounded-full after:right-full hover:after:right-0 after:duration-300 hover:text-white duration-300"
                      >
                        <img
                          className="absolute left-[-30px] top-[-5px]"
                          src={Mail}
                          alt="mail-icon"
                        />
                         support@renteasy.ai
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-solid border-white py-4 px-5">
          <p className="sm:text-base text-sm text-center leading-160 opacity-80 text-white ff-poppins">
            © <span>{new Date().getFullYear()}</span> RentEasy.AI — All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
