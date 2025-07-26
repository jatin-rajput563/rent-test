import React from "react";
import logoImg from "../assets/images/png/logo-text.png";
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
            <p className="leading-[129%] opacity-80 text-dark-blue max-w-[820px] text-center mx-auto pt-[15px]">
              Pierwszy w Polsce system CRM oparty na sztucznej inteligencji,
              stworzony specjalnie dla firm zarządzających nieruchomościami. <br />   
              Zautomatyzuj swoje działania, wyeliminuj chaos i skaluj
              działalność — bez zatrudniania dodatkowych pracowników.
            </p>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
