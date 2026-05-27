import React from 'react'
import { Link } from 'react-router-dom'
import BannerComponent from '../Components/BannerComponent/BannerComponent'
import bgImg from '../assets/nav bg.png'
import WelcomeComponent from '../Components/WelcomeComponent/WelcomeComponent'
import DestinationComponent from '../Components/DestinationComponent/DestinationComponent'
import AboutComponent from '../Components/AboutComponent/AboutComponent'

function Home() {
  return (
    <>
    <div className="back">
      <div className='container'>
        <BannerComponent/>
      </div>
    </div>
    <div className="back2">
      <div className="container">
        <WelcomeComponent/>
      </div>
    </div>
    <div className="container">
      <DestinationComponent/> 
    </div>
    <div className="container">
      <AboutComponent/>
    </div>
    </>
  )
}

export default Home
