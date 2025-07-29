import React, { useState, useRef, useEffect } from "react";
import { ACCORDION_DATA } from "../utils/helper";
import CustomButton from "./common/CustomButton";
import CustomHeading from "./common/CustomHeading";

const Najczęściej = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="sm:px-5 pt-[48px] sm:pt-[176px]">
      <div className="max-w-[996px] mx-auto">
        <CustomHeading
          headText="Najczęściej Zadawane Pytania"
          headClass="mb-[22px] text-center"
        />
        <div className="space-y-5 sm:space-y-6 max-sm:px-5">
          {ACCORDION_DATA.map((obj, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#F8F5FF] rounded-[15px]"
                    : "bg-white shadow-[0_4px_25px_rgba(0,0,0,0.04)] rounded-[191px]"
                }`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className={`w-full flex flex-col text-left font-bold text-dark-black text-lg sm:text-xl leading-[120%] px-[25px] transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "py-[30px]"
                      : "min-h-[76px] py-[20px] justify-center"
                  }`}
                >
                  <div className="flex justify-between items-center w-full transition-all duration-300">
                    <span>{obj.question}</span>
                    <div className="flex items-center justify-center w-[25px] h-[25px] sm:w-[32px] sm:h-[32px]">
                      <svg
                        className={`w-[25px] h-[25px] sm:w-[32px] sm:h-[32px] transition-transform duration-300 transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke={isOpen ? "#5E13F6" : "currentColor"}
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 9l-7 7-7-7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? "mt-[6px]" : "mt-0"
                    }`}
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-base font-normal text-dark-black opacity-70 leading-[134%] ff-cabin max-w-[900px]">
                        {obj.answer}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
          <CustomButton
            btnText="Poznaj Zoe!"
            btnClass="bg-purple-blue text-white flex mx-auto py-[9px] px-[24.5px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Najczęściej;
