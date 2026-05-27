import React from 'react'
import '../BrandsComponent/BrandsComponents.css'
import img1 from '../../assets/brand1.png'
import img2 from '../../assets/brand2.png'
import img3 from '../../assets/brand3.png'
import img4 from '../../assets/brand4.png'

function BrandsComponents() {
  return (
    <div className="brands-wrapper">
        <p>An independent affiliated</p>
        <img src={img1} alt="Brand 1" />
        <img src={img2} alt="Brand 2" />
        <img src={img3} alt="Brand 3" />
        <img src={img4} alt="Brand 4" />
    </div>
  )
}

export default BrandsComponents