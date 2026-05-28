import React from 'react'
import { Link } from 'react-router-dom'
import BannerComponent from '../Components/BannerComponent/BannerComponent'
import bgImg from '../assets/nav bg.png'
import WelcomeComponent from '../Components/WelcomeComponent/WelcomeComponent'
import DestinationComponent from '../Components/DestinationComponent/DestinationComponent'
import NewsComponent from '../Components/NewsComponent/NewsComponent'
import GetStarted from '../Components/GetStarted/GetStarted'
import BrandsComponents from '../Components/BrandsComponent/BrandsComponents'
import AboutComponent from '../Components/AboutComponent/AboutComponent'
import InstaComponent from '../Components/InstaComponent/InstaComponent'

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
      <div className="container">
        <NewsComponent/>
      </div>
      <div className="instagram">
        <InstaComponent/>
      </div>
      <div className="back3">
        <div className="container">
          <GetStarted/>
        </div>
      </div>
      <div className="back4">
        <div className="container">
          <BrandsComponents/>
        </div>
      </div>
    </>
  )
}

export default Home
