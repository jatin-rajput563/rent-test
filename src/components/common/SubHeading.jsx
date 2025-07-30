import React from 'react'

const SubHeading = ({subHeadingText, subHeadingClass}) => {
  return (
    <div>
      <p className={`font-bold text-base sm:text-xl text-dark-blue  ${subHeadingClass}`}>{subHeadingText}</p>
    </div>
  )
}

export default SubHeading
