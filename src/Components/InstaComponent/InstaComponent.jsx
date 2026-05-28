import React from 'react'
import '../InstaComponent/InstaComponent.css'
import img1 from '../../assets/insta1.png'
import img2 from '../../assets/insta2.png'
import img3 from '../../assets/insta3.png'
import img4 from '../../assets/insta4.png'
import img5 from '../../assets/insta5.png'
import img6 from '../../assets/insta6.png'
import img7 from '../../assets/insta1.png'
import img8 from '../../assets/insta2.png'
import img9 from '../../assets/insta3.png'
import img10 from '../../assets/insta4.png'
import img11 from '../../assets/insta5.png'
import img12 from '../../assets/insta6.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {  Autoplay } from "swiper/modules";


function InstaComponent() {
  return (
    <div className='insta-wrapper'>
      <h5>Follow Us On Instagram</h5>
        <Swiper
          slidesPerView={6}
          spaceBetween={1}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          modules={[ Autoplay ]}
        >
          <SwiperSlide>
            <img src={img1} alt="Instagram Image 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="Instagram Image 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="Instagram Image 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="Instagram Image 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="Instagram Image 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="Instagram Image 6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt="Instagram Image 7" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} alt="Instagram Image 8" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} alt="Instagram Image 9" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img10} alt="Instagram Image 10" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img11} alt="Instagram Image 11" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img12} alt="Instagram Image 12" />
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default InstaComponent
