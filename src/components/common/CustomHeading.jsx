import React from "react";

const CustomHeading = ({ headClass, headText }) => {
  return (
    <div>
      <h2
        className={`font-bold text-[40px] sm:text-[44px] md:text-[48px] leading-120 text-dark-blue ${headClass}`}
      >
        {headText}
      </h2>
    </div>
  );
};

export default CustomHeading;
