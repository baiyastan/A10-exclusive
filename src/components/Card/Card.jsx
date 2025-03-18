import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

import star from "../../assets/svg/star.svg"
import "./Card.scss"

function Card() {
    const stars = new Array(5).fill(star);

  return (
    <div className='main'>
    <div className='inside'>
      <img src='/game.png' alt='Gamepad'/>
      <button className='sale'>-40%</button>
      <button className='heart'>
        <FaRegHeart className='heart-in' />
      </button>
      <button className='eye'>
        <FiEye className='eye-in' />
      </button>
    </div>
    <h2>HAVIT HV-G92 Gamepad</h2>
    <div className='text'>
      <h3>$120</h3>
      <h4>$160</h4>
    </div>
    <div className='stars'>
      {stars.map((index) => (
        <img key={index} src={star} alt={`Star ${index + 1}`} />
      ))}
      <p>(88)</p>
    </div>
  </div>
  )
}

export default Card
