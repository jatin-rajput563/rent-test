import React from 'react'

const CustomPara = ({paraText, paraClass}) => {
  return (
    <div>
      <p className={`${paraClass} text-dark-blue leading-129`}>{paraText}</p>
    </div>
  )
}

export default CustomPara
