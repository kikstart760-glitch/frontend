import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Footer/Footer.css";
import fb from "../../assets/fb.png";
import insta from "../../assets/insta.png";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import location from "../../assets/location.png";
import date from "../../assets/date.png";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>

          {/* LEFT */}
          <Col md={3} className="footer-col">
            <h5>Hey There!</h5>
            <p>
              Welcome to Escape Beyond Travel, <br />
               where unforgettable journeys meet <br />
              personalized luxury. 
            </p>

            <div className="social-icons" style={{marginTop:'50px'}}>
              <img src={fb} alt="Facebook" />
              <img src={insta} alt="Instagram" />
            </div>
          </Col>

          {/* QUICK LINKS */}
          <Col md={3} className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li>Home</li>
              <li>Company Info</li>
              <li>About Me</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </Col>

          {/* RECENT POSTS */}
          <Col md={3} className="footer-col">
            <h5>Recent Post</h5>

            <div className="post">
              <span><img src={date} alt="Date" /> 15 Feb, 2023</span>
              <p>Lorem Ipsum is dummy text</p>
            </div>

            <div className="post">
              <span><img src={date} alt="Date" /> 15 Feb, 2023</span>
              <p>Lorem Ipsum is dummy text</p>
            </div>
          </Col>

          {/* CONTACT */}
          <Col md={3} className="footer-col">
            <h5>Contact Information</h5>

            <p>
              <img src={location} alt="Location" /> 
              &nbsp;&nbsp;Dummy Address, Fake Road, <br>
              </br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem Ipsum 456/d, UK
            </p>
            <p><img src={email} alt="Email" /> <a href="mailto:jacquie@escapebeyondtravel.com">&nbsp;&nbsp;jacquie@escapebeyondtravel.com</a></p>
            <p><img src={phone} alt="Phone" /> <a href="tel:912-414-6441">&nbsp;&nbsp;912-414-6441</a></p>
          </Col>

        </Row>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          Copyright © 2023 Escape Beyond Travel, Inc. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;