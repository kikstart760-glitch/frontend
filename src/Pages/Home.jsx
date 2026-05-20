import React from 'react'
import { Link } from 'react-router-dom'
import BannerComponent from '../Components/BannerComponent/BannerComponent'
import bgImg from '../assets/nav bg.png'

function Home() {
  return (
    <div className="back" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className='container'>
        <BannerComponent/>
      </div>
    </div>
    
  )
}

export default Home
