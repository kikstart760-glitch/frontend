import React from 'react'
import '../BannerComponent/BannerComponent.css'
import bgimg from '../../assets/nav bg.png'

function BannerComponent() {
  return (
    <div className='banner-cover'>
      <div className="content">
            <p>Luxury Travel Reimagined</p>
            <h1 className="banner-title">Welcome to Kikstart</h1>
            <p className="banner-subtitle">Your one-stop solution for all your needs</p>
        </div>
    </div>
  )
}

export default BannerComponent
