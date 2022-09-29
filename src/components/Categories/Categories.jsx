import React from 'react'
import './Categories.css'

import smartphone from "../../assets/categories/smartphone.png"
import speaker from "../../assets/categories/speaker.png"
import smartwatch from "../../assets/categories/smartwatch.png"
import refrigerator from "../../assets/categories/refrigerator.png"
import washing from "../../assets/categories/washing-machine.png"
import tv from "../../assets/categories/tv.png"

export const Categories = () => {
  return (
    <div className="Categories">

      <span className='title'>Popular Categories</span>

      <div className="icons">
        <img src={smartphone} alt="" />
        <img src={speaker} alt="" />
        <img src={smartwatch} alt="" />
        <img src={refrigerator} alt="" />
        <img src={washing} alt="" />
        <img src={tv} alt="" />
      </div>
    </div>
  )
}
