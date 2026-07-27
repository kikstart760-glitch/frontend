import React from 'react'
import BannerComponent from '../Components/BannerComponent/BannerComponent'
import CompanyComponent from '../Components/CompanyComponent/CompanyComponent'
import InstaComponent from '../Components/InstaComponent/InstaComponent'
import GetStarted from '../Components/GetStarted/GetStarted'
import BrandsComponents from '../Components/BrandsComponent/BrandsComponents'

function CompanyInfo() {
  return (
    <>
        <div className="back5">
            <div className="container">
                <BannerComponent 
                    title={"About Escape Travel"} 
                    subtitle={<>Welcome to Escape Beyond Travel, where unforgettable journeys
                    <br /> meet personalized luxury.</>}
                />
            </div>
        </div>
        <div className="container">
            <CompanyComponent/>
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

export default CompanyInfo