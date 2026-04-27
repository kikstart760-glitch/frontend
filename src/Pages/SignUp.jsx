import React from 'react'
import '../Styles/global.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LeftComponent from '../Components/LeftComponents/LeftComponent'
import SignupComponent from '../Components/SignupComponents/SignupComponent'

function SignUp() {
  return (
    <div className='signup-page'>
        <Container className='signup-page-container'>
            <Row>
                <Col>
                    <LeftComponent/>
                </Col>
                <Col>
                    <SignupComponent/>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default SignUp