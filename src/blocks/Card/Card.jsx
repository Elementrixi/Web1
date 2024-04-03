import React from 'react'

export const Card = ({ benefit }) => {
  const {title, text} = benefit;
  
  return (
    <div className="card">
      <div className="card__kayak"></div>
      <h3 className="card__header">{title}</h3>
      <p className="card__text">{text}</p>
    </div>
  )
}
