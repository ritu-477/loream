import React from 'react'

const PrimaryPara = ({text,className}) => {
  return (
      <p className={`font-medium para  ${className}`}>{text}</p>
  )
}

export default PrimaryPara