import React from 'react'
import '../LeftComponents/LeftComponents.css'
import img from '../../assets/Rectangle 26.png'
import img2 from '../../assets/logo.png'

function LeftComponent() {
  return (
    <div className="backgroundImg" style={{ backgroundImage: `url(${img})` }}>
      
      <div className="title">
        <img src={img2} alt="logo" />
      </div>

      <div className="sub-title">
        <p>
          Recharge, Rejuvenate, and <br />
          Rediscover Your Passion for Life.
        </p>
      </div>

    </div>
  )
}

export default LeftComponent