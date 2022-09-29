import React from 'react'
import './Explore.css'
import app from "../../assets/app-photo.png"

export const Explore = () => {
  return (
    <div className="Explore">
        <div className="explore-text">
            <span className='text-1'>Welcome to,</span>
            <span className='text-2'>Shopping Ka</span>
            <span className='text-3'>Naya Tareeka</span>
            <span className='text-4'>join 9M+ members who win rewards and cashbacks everyday</span>
        </div>

        <div className="explore-buttons">
            <span className='download-btn'>Download now</span>
            <span className='explore-btn'>Explore now</span>
        </div>

        <div className="explore-image">
            <img src={app} alt="" />
        </div>
    </div>
  )
}
