import React from 'react'
import '../SeasonComponent/SeasonComponent.css'
import img1 from '../../assets/season1.png'
import img2 from '../../assets/season2.png'
import img3 from '../../assets/season3.png'
import img4 from '../../assets/season4.png'
import img5 from '../../assets/season5.png'
import Button2Component from '../Button2Component/Button2Component'

function SeasonComponent() {
  const seasons = [
    {
      id: 1,
      title: "Four Seasons Hotels and Resorts",
      img: img1,
      desc: "Offering luxurious accommodations, impeccable service, and breathtaking locations worldwide, Four Seasons is synonymous with excellence and refinement."
    },
    {
      id: 2,
      title: "Belmond",
      img: img2,
      desc: "Renowned for their iconic train journeys, exquisite hotels, and river cruises, Belmond creates unforgettable experiences that blend luxury, adventure, and cultural immersion"
    },
    {
      id: 3,
      title: "Aman Resorts",
      img: img3,
      desc:"Setting the standard for luxury hospitality, Aman Resorts provides unparalleled tranquility and elegance in their stunning properties across the globe."
    },
    {
      id: 4,
      title: "Ritz-Carlton",    
      img: img4,
      desc: "With a legacy of sophistication and unparalleled service, Ritz-Carlton properties offer refined luxury and exceptional amenities in some of the world's most sought-after destinations."
    },
    {
      id: 5,
      title: "Rosewood Hotels & Resorts",
      img: img5,
      desc: "Known for their dedication to creating immersive experiences, Rosewood properties combine luxury with a sense of place, capturing the essence of each unique destination."
    }
  ]
  return (
    <>
      <div className="discuss_heading">
        <h2>Here are just a few of our esteemed Virtuoso partners <br/> 
        who consistently exceed expectations and provide <br/>
        exceptional experiences:
        </h2>
      </div>
      <div className="season-items">
        {seasons.map((item) => (
          <div className="season-card" key={item.id}>
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="season_text">
        <h6 className='first'>In addition to our affiliation with Gifted Travel Network, we are proud to partner with Virtuoso, a renowned global network of luxury travel advisors and suppliers. <br/>
          This partnership grants us access to a curated collection of the world's finest hotels, resorts, cruise lines, and <br/>
          tour operators. Virtuoso's reputation for excellence and their commitment to delivering extraordinary experiences align perfectly with our own values and mission.</h6>
          <h6 className='second'>When you travel with Escape Beyond Travel, you can trust that our network of esteemed partners will go above and beyond to deliver the value and luxury you <br/>
            deserve. Contact us today to embark on a journey of a lifetime, where every moment is crafted with excellence and tailored to your desires.</h6>
      </div>
      <div className="butt">
        <Button2Component text="Book a Consultation" path="/book" />
      </div>
    </>
  )
}

export default SeasonComponent
