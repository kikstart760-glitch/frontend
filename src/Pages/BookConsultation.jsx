import React from 'react'
import { Link } from 'react-router-dom'
import BannerComponent from '../Components/BannerComponent/BannerComponent'
import BookComponent from '../Components/BookComponent/BookComponent'
import GetStarted from '../Components/GetStarted/GetStarted'
import BrandsComponents from '../Components/BrandsComponent/BrandsComponents'

function BookConsultation() {
  return (
    <>
      <div className="back5">
        <div className='container'>
          <BannerComponent
            title="Book a Consultation"
          />
        </div>
      </div>
      <div className="container">
        <BookComponent />
      </div>
      <div className="back4">
        <div className="container">
          <BrandsComponents/>
        </div>
      </div>
    </>
  )
}

export default BookConsultation
