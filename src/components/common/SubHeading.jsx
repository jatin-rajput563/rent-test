import React from 'react'

const SubHeading = ({subText, subClass}) => {
  return (
    <div>
      <p className={`font-bold text-base sm:text-xl text-dark-blue leading-[100%]  ${subClass}`}>{subText}</p>
    </div>
  )
}

export default SubHeading
