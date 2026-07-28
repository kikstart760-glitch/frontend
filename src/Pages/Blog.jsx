import React from 'react'
import BannerComponent from '../Components/BannerComponent/BannerComponent'
import BrandsComponents from '../Components/BrandsComponent/BrandsComponents'
import GetStarted from '../Components/GetStarted/GetStarted'
import InstaComponent from '../Components/InstaComponent/InstaComponent'
import BlogComponent from '../Components/BlogComponents/BlogComponent'

function Blog() {
  return (
    <>
        <div className="back7">
            <div className="container">
                <BannerComponent title="Travel Blog" 
                subtitle={<>Welcome to Escape Beyond Travel, where unforgettable journeys <br/>meet personalized luxury.</>}
                />
            </div>
        </div>
        <div className="container">
          <BlogComponent/>
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

export default Blog
