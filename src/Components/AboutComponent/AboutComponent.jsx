import React from 'react';
import '../AboutComponent/AboutComponent.css';
import img1 from '../../assets/about.png';
import img2 from '../../assets/about-lady-back.png';
import Button2Component from '../Button2Component/Button2Component';
import { Container, Row, Col } from 'react-bootstrap';

function AboutComponent() {
  return (
    <>
    <h2 className="about-heading">About me</h2>
    <div className="about-cover">
      <div className="about-content">
        <div className="about-left">
          <img src={img1} alt="about" />
        </div>
        <div className="about-right">
          <h6>Hello, and welcome!</h6>

          <div className="about-title">
            <h6>I am Jacqueline Rogers</h6>
          </div>

          <p className="about-text">
            The Owner and Travel Advisor of Escape Beyond Travel. With a background in education and 
            a burning desire to create extraordinary experiences, I founded this company with a clear
            purpose in mind: to offer a gateway to escape the ordinary and venture beyond the boundaries
            of everyday life.
          </p>

          <p className="about-text">
            As a former educator, I witnessed firsthand the immense value of broadening one's horizons
            and embracing new perspectives. I believe that travel has the power to ignite our curiosity, 
            inspire personal growth, and provide a much-needed respite from our demanding lives. That is 
            why I decided to channel my passion for exploration into creating a travel agency that goes 
            beyond traditional itineraries and embraces the concept of transformative journeys.
          </p>

          {/* BUTTONS */}
          <div className="about-buttons">
            <Button2Component text="Learn More" path="/destinations" />
            <button className="linkedin-btn">in</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutComponent;