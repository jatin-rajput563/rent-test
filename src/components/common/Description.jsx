import React from "react";

const Description = ({ descText, descClass }) => {
  return (
    <div>
      <p className={`text-dark-blue leading-129 ${descClass}`}>{descText}</p>
    </div>
  );
};

export default Description;
