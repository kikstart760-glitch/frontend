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
                </Row>
            </Container>
        </div>
    </>
  )
}

export default BlogComponent