import React from 'react'
import '../Styles/global.css'
import LeftComponent from '../Components/LeftComponents/LeftComponent'
import LoginComponent from '../Components/LoginComponents/LoginComponent'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'

function Login() {
  return (
    <div className='login-page'>
        <Container className='login-page-container'>
            <Row>
                <Col>
                    <LeftComponent/>
                </Col>
                <Col>
                    <LoginComponent/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Login
