import React from 'react'
import '../Styles/global.css'
import LeftComponent from '../Components/LeftComponents/LeftComponent'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Reset from '../Components/ResetpasswordComonent/ResetpasswordComponent'




function Resetpassword() {
  return (
    <div className='reset-page'>
        <Container className='reset-page-container'>
            <Row>
                <Col>
                    <LeftComponent/>
                </Col>
                <Col>
                    <Reset/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Resetpassword