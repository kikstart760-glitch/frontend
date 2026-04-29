import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LeftComponent from '../Components/LeftComponents/LeftComponent'
import OtpComponents from '../Components/OtpComponents/OtpComponents'
import '../Styles/global.css'


function Otp() {
  return (
    <div className='otp-page'>
        <Container className='otp-page-container'>
            <Row>
                <Col>
                    <LeftComponent/>
                </Col>
                <Col>
                    <OtpComponents/>
                </Col>
            </Row>
        </Container> 
    </div>
  )
}

export default Otp