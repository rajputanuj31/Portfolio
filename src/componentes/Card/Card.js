import React from 'react'
import "./Card.css"

const Card = ({image}) => {
  return (
    <div className='card'>
      <img src={image} alt="" />
    </div>
  )
}

export default Card
