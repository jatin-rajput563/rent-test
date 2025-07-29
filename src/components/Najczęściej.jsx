import React, { useState, useRef, useEffect } from "react";
import { ACCORDION_DATA } from "../utils/helper";
import CustomButton from "./common/CustomButton";

const Najczęściej = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [heightMap, setHeightMap] = useState({});

  const contentRefs = useRef([]);

  useEffect(() => {
    const newHeights = {};
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        newHeights[index] = ref.scrollHeight;
      }
    });
    setHeightMap(newHeights);
  }, [openIndex]);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-5 pt-[176px]">
      <div className="max-w-[996px] mx-auto">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-[51px]">
          Najczęściej Zadawane Pytania
        </h2>

        <div className="space-y-5 sm:space-y-6">
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
                  className={`w-full flex flex-col text-left font-bold text-base md:text-xl leading-[120%] px-[25px] transition-all duration-300 ${
                    isOpen ? "py-[30px]" : "py-5 sm:py-[26px]"
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span>{obj.question}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
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

                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: isOpen ? `${heightMap[index] || 0}px` : "0px",
                    }}
                  >
                    <p
                      ref={(el) => (contentRefs.current[index] = el)}
                      className="mt-[6px] text-base font-normal text-[#000302] opacity-70 leading-[134%] ff-cabin max-w-[900px]"
                    >
                      {obj.answer}
                    </p>
                  </div>
                </button>
              </div>
            );
          })}
          <CustomButton btnText="Poznaj Zoe!" btnClass="bg-purple-blue text-white flex mx-auto py-[9px] px-[24.5px]" />
        </div>
      </div>
    </div>
  );
};

export default Najczęściej;
