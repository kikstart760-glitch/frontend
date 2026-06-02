import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../BookComponent/BookComponent.css'

function BookComponent() {
  return (
    <div className="book_Wrapper">
      <Container>
        <Row>
          <Col md={6} className="book_left">
            <h2>Book a Consultation</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitusce convallis</p>
          </Col>
          <Col md={6} className="book_right">
            <h2>Book a Consultation</h2>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BookComponent
