import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LeftComponent from '../Components/LeftComponents/LeftComponent'
import RightComponent from '../Components/RightComponents/RightComponent'

function SignUp() {
  return (
    <div>
        <div className="container">
            <Container>
                <Row>
                    <Col md={6}>
                        <LeftComponent/>
                    </Col>
                    <Col md={6}>
                        <RightComponent/>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  );
}

export default SignUp