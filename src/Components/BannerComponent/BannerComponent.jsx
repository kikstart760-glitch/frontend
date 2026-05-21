import React from 'react'
import '../BannerComponent/BannerComponent.css'
import bgimg from '../../assets/nav bg.png'

function BannerComponent() {
  return (
    <div className='banner-cover'>
      <div className="content">
        <p className="banner-description">Luxury Travel Reimagined</p>
        <h1 className="banner-title">
          Recharge, Rejuvenate, and <br /> 
          Rediscover Your Passion for Life.
        </h1>
        <p className="banner-subtitle">
          "Escape the Ordinary, Embrace the Extraordinary: Luxury Travel <br /> 
            Experiences for Professionals Seeking Balance."
        </p>
      </div>
    </div>
  )
}

export default BannerComponent
