import React from 'react'
import '../BlogComponents/BlogComponent.css'
import {Container, Row, Col} from 'react-bootstrap'
import img1 from '../../assets/blog1.png'
import img2 from '../../assets/blog2.png'
import img3 from '../../assets/blog3.png'
import img4 from '../../assets/blog4.png'
import img5 from '../../assets/blog5.png'
import img6 from '../../assets/blog6.png'
import calendar from '../../assets/date.png'
import { Accordion } from 'react-bootstrap'

function BlogComponent() {
    const data = [
        {
            img: img1,
            calendar: calendar,
            date: '15 Feb, 2023',
            title: 'Mauris dictum, elit et consequat condimentum,',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis ligula vitae fringilla feugiat.'
        },
        {
            img: img2,
            calendar: calendar,
            date: '15 Feb, 2023',
            title: 'Mauris dictum, elit et consequat condimentum,',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis ligula vitae fringilla feugiat.'
        },
        {
            img: img3,
            calendar: calendar,
            date: '15 Feb, 2023',
            title: 'Mauris dictum, elit et consequat condimentum,',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis ligula vitae fringilla feugiat.'
        },
        {
            img: img4,
            calendar: calendar,
            date: '15 Feb, 2023',
            title: 'Mauris dictum, elit et consequat condimentum,',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis ligula vitae fringilla feugiat.'
        },
        {
            img: img5,
            calendar: calendar,
            date: '15 Feb, 2023',
            title: 'Mauris dictum, elit et consequat condimentum,',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis ligula vitae fringilla feugiat.'
        },
        {
            img: img6,
            calendar: calendar,
            date: '15 Feb, 2023',
            title: 'Mauris dictum, elit et consequat condimentum,',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis ligula vitae fringilla feugiat.'
        }
    ]
  return (
    <>
        <div className="blog-wraper">
            <Container>
                <Row>
                    <Col md={8}>
                        <div className="all-blogs">
                            <div className="blog-card">
                                {data.map((item, index) => (
                                    <div className="blog-card-item" key={index}>
                                        <img src={item.img} alt={`Blog ${index + 1}`} />
                                        <div className="blog-date">
                                            <img src={item.calendar} alt="Date" />
                                            <span>{item.date}</span>
                                        </div>
                                        <div className="blog-title">
                                            <h5>{item.title}</h5>
                                        </div>
                                        <div className="blog-description">
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                      <Col md={4}>
                          <div className="blog-sidebar">
                              {/* Search Box */}
                              <div className="blog-search">
                                  <input
                                      type="text"
                                      placeholder="SEARCH..."
                                      className="form-control"
                                  />
                              </div>
                              {/* Accordion */}
                              <Accordion flush className="blog-accordion">
                                  <Accordion.Item eventKey="0">
                                      <Accordion.Header>FUSCE FACILISIS</Accordion.Header>
                                      <Accordion.Body>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                      </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="1">
                                      <Accordion.Header>CURABITUR VEL</Accordion.Header>
                                      <Accordion.Body>
                                          Curabitur vel turpis vitae lorem facilisis gravida.
                                      </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="2">
                                      <Accordion.Header>VIVAMUS EGET</Accordion.Header>
                                      <Accordion.Body>
                                          Vivamus eget sapien eu nunc faucibus suscipit.
                                      </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="3">
                                      <Accordion.Header>CURABITUR QUIS</Accordion.Header>
                                      <Accordion.Body>
                                          Donec volutpat, erat sed dictum feugiat.
                                      </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="4">
                                      <Accordion.Header>NAM BLANDIT</Accordion.Header>
                                      <Accordion.Body>
                                          Nam blandit, tortor id convallis posuere.
                                      </Accordion.Body>
                                  </Accordion.Item>
                              </Accordion>
                              {/* Normal Items */}
                              <div className="blog-sidebar-item">
                                  FUSCE FACILISIS
                              </div>
                              <div className="blog-sidebar-item">
                                  CURABITUR VEL
                              </div>
                          </div>
                      </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default BlogComponent