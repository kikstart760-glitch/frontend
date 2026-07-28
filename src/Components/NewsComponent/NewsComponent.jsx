import React from 'react'
import '../NewsComponent/NewsComponent.css'
import img1 from '../../assets/news1.png'
import img2 from '../../assets/news2.png'
import img3 from '../../assets/news3.png'
import calendar from '../../assets/date.png'
import Button2Component from '../Button2Component/Button2Component'

function NewsComponent() {
  return (
    <>
        <div className="news-component">
            <h2>Latest News</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis ligula vitae fringilla feugiat.
                <br />
                Praesent et ex facilisis, iaculis urna at, mattis felis. Aenean faucibus ut est ut pulvinar.
            </p>
        </div>
        <div className="all-news-cards">
            <div className="news-card">
                <img src={img1} alt="News 1" />
                <div className="news-date">
                    <img src={calendar} alt="Date" />
                    <span>15 Feb, 2023</span>
                </div>
                <div className="news-title">
                    <h5>Mauris dictum, elit et consequat condimentum,</h5>
                </div>
                <div className="news-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis ligula vitae fringilla feugiat.</p>
                </div>
            </div>
            <div className="news-card">
                <img src={img2} alt="News 2" />
                <div className="news-date">
                    <img src={calendar} alt="Date" />
                    <span>15 Feb, 2023</span>
                </div>
                <div className="news-title">
                    <h5>Mauris dictum, elit et consequat condimentum,</h5>
                </div>
                <div className="news-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis ligula vitae fringilla feugiat.</p>
                </div>
            </div>
            <div className="news-card">
                <img src={img3} alt="News 3" />
                <div className="news-date">
                    <img src={calendar} alt="Date" />
                    <span>15 Feb, 2023</span>
                </div>
                <div className="news-title">
                    <h5>Mauris dictum, elit et consequat condimentum,</h5>
                </div>
                <div className="news-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis ligula vitae fringilla feugiat.</p>
                </div>
            </div>
        </div>
        <div className="news-button">
            <Button2Component text="View all Blogs" path="/blog" />
        </div>
    </>
  )
}

export default NewsComponent