import React from "react";

const CustomHeading = ({ headingClass, headingText }) => {
  return (
    <div>
      <h2
        className={`font-bold text-[40px] xl:text-[48px] leading-120 text-dark-blue ${headingClass}`}
      >
        {headingText}
      </h2>
    </div>
  );
};

export default CustomHeading;
