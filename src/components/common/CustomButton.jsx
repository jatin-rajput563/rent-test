import React from 'react'

const CustomButton = ({btnText ,btnClass}) => {
  return (
    <div>
      <button className={`${btnClass}  bg-purple-blue text-white font-semibold`}>{btnText}</button>
    </div>
  )
}

export default CustomButton
