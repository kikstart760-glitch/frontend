import React from 'react'
import BannerComponent from '../Components/BannerComponent/BannerComponent'
import TravelComponent from '../Components/TravelComponent/TravelComponent'
import InstaComponent from '../Components/InstaComponent/InstaComponent'
import GetStarted from '../Components/GetStarted/GetStarted'
import BrandsComponents from '../Components/BrandsComponent/BrandsComponents'
import DiscussComponent from '../Components/DiscussComponent/DiscussComponent'
import SeasonComponent from '../Components/SeasonComponent/SeasonComponent'

function Destination() {
  return (
      <>
          <div className="back6">
              <div className="container">
                  <BannerComponent title="Destination" />
              </div>
          </div>
          <div className="container">
              <TravelComponent />
          </div>
          <div className="container">
                <DiscussComponent />
          </div>
          <div className="container">
                <SeasonComponent />
          </div>
          <div className="instagram">
              <InstaComponent />
          </div>
          <div className="back3">
              <div className="container">
                  <GetStarted />
              </div>
          </div>
          <div className="back4">
              <div className="container">
                  <BrandsComponents />
              </div>
          </div>
      </>
  )
}

export default Destination
