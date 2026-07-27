import React from 'react'
import '../AboutMeComponent/AboutMeComponent.css'
import { Container, Row, Col } from 'react-bootstrap'
import img from '../../assets/Rogers.png'


function AboutMeComponent() {
  return (
    <>
      <div className="aboutme-component">
        <div className="aboutme-left">
          <div className="aboutme-title">
            <h2>
              Hello, and welcome!
              <br />I am Jacqueline Rogers
            </h2>
          </div>
          <div className="aboutme-img">
            <figure>
              <img src={img} alt="Jacqueline Rogers" />
            </figure>
          </div>
        </div>
        <div className="aboutme-right">
          <p>
            the Owner and Travel Advisor of Escape Beyond Travel. With a
            background in education and a burning desire to create extraordinary
            experiences, I founded this company with a clear purpose in mind: to
            offer a gateway to escape the ordinary and venture beyond the
            boundaries of everyday life.
          </p>
          <p>
            As a former educator, I witnessed firsthand the immense value of
            broadening one's horizons and embracing new perspectives. I believe
            that travel has the power to ignite our curiosity, inspire personal
            growth, and provide a much-needed respite from our demanding lives.
            That is why I decided to channel my passion for exploration into
            creating a travel agency that goes beyond traditional itineraries
            and embraces the concept of transformative journeys.
          </p>
          <p>
            Escape Beyond Travel is not just about booking flights and securing
            accommodations; it is about crafting immersive experiences that
            enrich your life and leave an indelible mark on your soul. I believe
            that true travel is an art form, and I am dedicated to curating
            bespoke itineraries that reflect your individuality, interests, and
            aspirations. Whether you seek adventure, cultural immersion, or
            simply a moment of serenity, I am here to bring your dreams to life.
            My commitment to excellence extends to every aspect of your journey.
            I collaborate with a network of trusted partners, hand-selecting the
            finest accommodations, expert guides, and hidden gems to ensure that
            your travel experience surpasses your expectations. Your comfort,
            safety, and enjoyment are my top priorities, and I work tirelessly
            to ensure that every detail is flawlessly executed.
          </p>
          <p>
            At Escape Beyond Travel, we believe that life is meant to be lived
            to the fullest. We invite you to break free from the confines of the
            familiar, embark on a transformative adventure, and discover the
            world's wonders. Let us be your trusted advisor, your guide, and
            your confidante as we create unforgettable memories together.
          </p>
        </div>
        <div className="bottom-text">
            <p>
                I invite you to explore our website, discover the array of
                exceptional travel experiences we offer, and reach out to me
                personally to discuss your unique travel aspirations. Together, we
                will craft a journey that transcends the ordinary, allowing you to
                escape beyond the boundaries and embrace the extraordinary. Your
                transformative escape begins here. Regenerate response.
            </p>
        </div>
      </div>
    </>
  );
}

export default AboutMeComponent