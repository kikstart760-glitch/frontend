import React from 'react'
import { Link } from 'react-router-dom'
import BannerComponent from '../Components/BannerComponent/BannerComponent'
import bgImg from '../assets/nav bg.png'
import BookComponent from '../Components/BookComponent/BookComponent'
import img1 from '../assets/book_cover.png'

function BookConsultation() {
  return (
    <div className="back">
        <div className='container'>
          <BannerComponent/>
        </div>
      </div>
  )
}

export default BookConsultation
