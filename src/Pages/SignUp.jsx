import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LeftComponent from '../Components/LeftComponents/LeftComponent'
import RightComponent from '../Components/RightComponents/RightComponent'

function SignUp() {
  return (
    <div className='signup-page'>
        <Container>
            <Row>
                <Col>
                    <LeftComponent/>
                </Col>
                <Col>
                    <RightComponent/>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default SignUp