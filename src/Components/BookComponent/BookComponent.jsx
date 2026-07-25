import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import '../BookComponent/BookComponent.css'
import Button2Component from '../Button2Component/Button2Component'
import img from '../../assets/loc.png'
import img2 from '../../assets/ph.png'
import img3 from '../../assets/em.png'
import img4 from '../../assets/virtuoso.png'

function BookComponent() {
  return (
    <div className="book_Wrapper">
      <Container>
        <Row>
          <Col md={6} className="book_left">
              <h2>Get started today</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitusce convallis</p>
              <div className="book-form">
                <Form className="custom-form-wrapper2">
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-2">
                        <Form.Control
                          type="text"
                          placeholder="First name"
                          className="custom-form-control"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-2">
                        <Form.Control
                          type="text"
                          placeholder="Last name"
                          className="custom-form-control"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-2">
                        <Form.Control
                          type="tel"
                          placeholder="Phone"
                          className="custom-form-control"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-2">
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          className="custom-form-control"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group className="mb-2">
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Message"
                          className="custom-form-control custom-message-box"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
                <div className="button-wrapper">
                  <Button2Component text="Submit Now" path="/contact" />
                </div>
              </div>
            </Col>
          <Col md={6} className="book_right">
            <div className="book_right_content">
              <div className="location_pic">
                <span><img src={img} alt="Location" /></span>
              </div>
              <div className="location_text">
                <h5>Address</h5>
                <p>Dummy Address, Fake Road. Lorem <br></br> ipsum 456/d. UK</p>
              </div>
            </div>
            <div className="book_right_content">
              <div className="location_pic">
                <span><img src={img2} alt="Phone" /></span>
              </div>
              <div className="location_text">
                <h5>Phone</h5>
                <p>912-414-6441</p>
              </div>
            </div>
            <div className="book_right_content">
              <div className="location_pic">
                <span><img src={img3} alt="Email" /></span>
              </div>
              <div className="location_text">
                <h5>Email</h5>
                <p>jacquie@escapebeyondtravel.com</p>
              </div>
            </div>
            <div className="book_right_pic">
              <img src={img4} alt="Virtuoso" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BookComponent
