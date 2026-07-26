import React from 'react'
import BannerComponent from '../Components/BannerComponent/BannerComponent'
import TravelComponent from '../Components/TravelComponent/TravelComponent'

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
      </>
  )
}

export default Destination
