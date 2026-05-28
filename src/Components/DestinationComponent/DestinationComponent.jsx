import React from 'react'
import '../DestinationComponent/DestinationComponent.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {  Autoplay } from "swiper/modules";
import img1 from '../../assets/travel1.png'
import img2 from '../../assets/travel2.png'
import img3 from '../../assets/travel3.png'
import img4 from '../../assets/travel4.png'
import Button2Component from '../Button2Component/Button2Component';


function DestinationComponent() {

  const data = [
    {
      title: "Bali, Indonesia",
      img: img1,
      desc: "Experience the serenity of Ubud’s lush landscapes, indulge in luxurious spa treatments, and immerse yourself in Balinese culture through traditional ceremonies and yoga retreats.",
    },
    {
      title: "Amalfi Coast, Italy",
      img: img2,
      desc: "Discover the beauty of the Mediterranean coastline while indulging in exquisite Italian cuisine, exploring charming coastal villages, and rejuvenating with scenic hikes and spa treatments.",
    },
    {
      title: "Costa Rica",
      img: img3,
      desc: "Immerse yourself in the tropical paradise of Costa Rica, where wellness retreats offer yoga, meditation, and eco-friendly adventures amidst stunning rainforests and pristine beaches.",
    },
    {
      title: "Kyoto, Japan",
      img: img4,
      desc: "Delve into the tranquility of Kyoto’s ancient temples and gardens, experience traditional tea ceremonies, and enjoy the art of Japanese cuisine as you explore the city’s rich cultural heritage.",
    },
    {
      title: "Sedona, Arizona, USA",
      img: img1,
      desc: "Find inner peace and harmony in the stunning red rock landscapes of Sedona. Engage in mindfulness practices, hike the picturesque trails, and indulge in luxurious spa therapies inspired by Native American traditions.",
    },
    {
      title: "Maldives",
      img: img2,
      desc: "Escape to a private overwater villa in the Maldives, where crystal-clear turquoise waters and pristine white sands create an idyllic backdrop for relaxation. Enjoy yoga on the beach.",
    },
    {
      title: "Marrakech, Morocco",
      img: img3,
      desc: "Immerse yourself in the vibrant colors, bustling markets, and rich flavors of Marrakech. Indulge in traditional hammam rituals, explore ancient palaces, and savor delectable Moroccan cuisine.",
    },
    {
      title: "Patagonia, Chile",
      img: img4,
      desc: "Embark on an adventure to the awe-inspiring landscapes of Patagonia, where breathtaking mountains, glaciers, and lakes await. Engage in invigorating outdoor activities such as hiking and kayaking.",
    },
    {
      title: "Kerala, India",
      img: img3,
      desc: "Discover the ancient practices of Ayurveda in the lush backwaters of Kerala. Experience rejuvenating treatments, explore tranquil tea plantations, and immerse yourself in the spirituality of this enchanting region.",
    },
    {
      title: "Zanzibar, Tanzania",
      img: img4,
      desc: "Unwind on the pristine beaches of Zanzibar, known for its turquoise waters and swaying palm trees. Engage in yoga retreats, explore spice markets, and indulge in traditional Swahili cuisine.",
    },
  ];
    
  return (
    <>
    <div className="travel">
      <h2 className="travel-title">Beyond travel destinations</h2>
      <Button2Component text="View all Destinations" path="/destinations" />
    </div>
      {/* SLIDER */}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[ Autoplay ]}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="item">
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <span>Learn More →</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default DestinationComponent
