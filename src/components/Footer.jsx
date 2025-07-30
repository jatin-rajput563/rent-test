import React from "react";
import { useLocation } from "react-router-dom";
import CustomButton from "./common/CustomButton";
import CustomHeading from "./common/CustomHeading";
import FooterLogo from "../assets/images/svg/FooterLogo.svg";
import { FooterIcons, navLinks } from "../utils/helper";
import Location from "../assets/images/svg/Location.svg";
import Phone from "../assets/images/svg/Phone.svg";
import Mail from "../assets/images/svg/Mail.svg";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div
        className={`sm:px-[37px] px-[21px] ${
          isHomePage ? "sm:pt-[81px] pt-[93px]" : "pt-[199px] sm:pt-[63px]"
        }`}
      >
        <div
          className={`container max-w-[1366px] !transform-[unset] -mt-[59px] sm:-mt-[65px] translate-y-[59px] sm:translate-y-[65px] mx-auto rounded-[15px] bg-purple-blue w-full px-5 sm:px-6 ${
            isHomePage
              ? "sm:py-10 pt-[41px] md:py-[61px] pb-[57px]"
              : "sm:py-[66px] pt-[47.5px] max-sm:pb-[63.5px]"
          }`}
        >
          <CustomHeading
            headText={
              isHomePage
                ? " Zrób pierwszy krok w kierunku bezstresowego zarządzania nieruchomościami"
                : "Poznaj moc Zoe"
            }
            headClass={`text-center !leading-120 text-white !text-[32px] sm:!text-[40px] md:!text-[44px] lg:!text-[48px] ${
              isHomePage
                ? "mb-[39px] md:mb-[41px] lg:mb-[51px]"
                : "mb-[12px] sm:mb-[15px] !text-[48px] !leading-[124%]"
            }`}
          />

          {!isHomePage && (
            <p className="text-white opacity-80 text-center max-w-[593px] mx-auto leading-134 mb-[30px] sm:mb-[39px]">
              Pozwól Zoe zająć się powtarzalnymi zadaniami, aby Twój zespół mógł
              skupić się na tym, co najważniejsze. Nie jest tylko funkcją — jest
              Twoją przewagą konkurencyjną.
            </p>
          )}

          <div className="flex justify-center">
            <CustomButton
              btnText={
                isHomePage ? "Zarejestruj się" : "Skonfiguruj swój pakiet"
              }
              btnClass={`text-white text-center hover:bg-white hover:text-dark-blue border-solid border-white !py-[9px] ${
                isHomePage ? "sm:!px-[23.8px] !px-[59.3px]" : "!px-[20.8px]"
              }`}
            />
          </div>
        </div>
      </div>

      <footer className="bg-dark-blue sm:pt-[169px] pt-[141px]">
        <div className="container w-full mx-auto max-w-[1182px] px-[21px] pb-[59px]">
          <div className="flex flex-wrap flex-row items-start">
            <div className="lg:w-[46%] sm:w-1/3 w-full max-sm:mb-[33px]">
              <div className="max-sm:flex justify-center">
                <a href="#" rel="noopener noreferrer">
                  <img
                    src={FooterLogo}
                    alt="footer-logo"
                    width="183"
                    height="54"
                    className="max-sm:w-[246px] max-sm:h-[74px] max-[183px] max-h-[54px]"
                  />
                </a>
              </div>
              <p className="max-w-[257px] leading-160 text-white opacity-80 max-sm:text-center max-sm:mx-auto pt-[12px] sm:pt-[14.12px]">
                Zbudowane przez profesjonalistów, dla profesjonalistów
              </p>
              <div className="flex gap-4 mt-[22px] sm:mt-4 items-center max-sm:justify-center">
                {FooterIcons.map(({ href, svg }, index) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className="hover:scale-115 transition-transform duration-300 group"
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
              <div className="flex lg:gap-[183px] max-sm:justify-between max-sm:w-full gap-[50px] sm:gap-6 md:gap-16">
                <div className="sm:max-w-[173px] max-w-[109px]">
                  <p className="text-base text-white font-semibold font-lato leading-118 mb-[21px]">
                    Szybkie linki
                  </p>
                  <ul className="flex gap-4 flex-col">
                    {navLinks.map((link, i) => (
                      <li key={i} className="leading-160">
                        <a
                          href={link.href}
                          className="font-lato opacity-80 text-white text-base leading-160 relative after:h-[1px] after:absolute after:bg-white after:left-0 after:bottom-0 after:rounded-full after:right-full hover:after:right-0 after:duration-300 hover:text-white duration-300"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sm:max-w-[175px] max-w-[150px]">
                  <p className="text-base text-white -ml-[25px] sm:-ml-0 font-semibold font-lato leading-118 mb-[21px]">
                    Napisz do nas
                  </p>
                  <ul className="flex gap-4 flex-col">
                    <li className="relative">
                      <a
                        href="#"
                        className="opacity-80 text-white flex text-base leading-160 relative after:h-[1px] after:absolute after:bg-white after:left-0 after:bottom-0 after:rounded-full after:right-full hover:after:right-0 after:duration-300 hover:text-white duration-300"
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
                        +48 519 519 190
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
                        info@renteasy.ai
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center text-white py-4 px-5 text-sm sm:border-t sm:border-white sm:text-base opacity-80">
          © {new Date().getFullYear()} RentEasy.AI — All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
