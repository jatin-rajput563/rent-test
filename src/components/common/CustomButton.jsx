import React from 'react'

const CustomButton = ({btnText ,btnClass}) => {
  return (
    <div>
      <button className={`${btnClass} border border-transparent font-semibold button-bg-shadow duration-300 hover:border-purple-blue hover:bg-transparent hover:text-purple-blue cursor-pointer`}>{btnText}</button>
    </div>
  )
}

export default CustomButton
