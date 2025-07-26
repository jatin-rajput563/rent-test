import React from "react";

const CustomPara = ({ paraText, paraClass }) => {
  return (
    <div>
      <p className={`  ${paraClass}`}>{paraText}</p>
    </div>
  );
};

export default CustomPara;
