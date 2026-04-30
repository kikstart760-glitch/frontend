import React from 'react'
import '../Styles/global.css'
import LeftComponent from '../Components/LeftComponents/LeftComponent'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import ForgetPassword from '../Components/ForgetpasswordComponents/ForgetPassword'

function Forgotpassword() {
  return (
     <div className='forgot-password-page'>
        <Container className='forgot-password-container'>
            <Row>
                <Col>
                    <LeftComponent/>
                </Col>
                <Col>
                    <ForgetPassword/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Forgotpassword