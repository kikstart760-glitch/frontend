import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import '../GetStarted/GetStarted.css'
import bgImg from '../../assets/from-side.png'
import Button2Component from '../Button2Component/Button2Component'

function GetStarted() {
  return (
    <div className="get-started-wrapper">
       <Container>
        <Row>
            <Col md={6} className="get-started-left">
                <h2>Get started today</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitusce convallis</p>
                <div className="get-started-form">
                    <Form className="custom-form-wrapper">
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
            <Col md={6} className="get-started-right">
                <img src={bgImg} alt="Get Started" className="img-fluid" />
            </Col>
        </Row>
       </Container>
    </div>
  )
}

export default GetStarted