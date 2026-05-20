import React from 'react'
import '../Styles/global.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import LeftComponent from '../Components/LeftComponents/LeftComponent'
import EmailsmsComponent from '../Components/EmailsmsComponent/EmailsmsComponent'


function Emailsms() {
  return (
    <div className='emailsms-page'>
        <Container className='emailsms-container'>
            <Row>
                <Col>
                    <LeftComponent/>
                </Col>
                <Col>
                    <EmailsmsComponent/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Emailsms
