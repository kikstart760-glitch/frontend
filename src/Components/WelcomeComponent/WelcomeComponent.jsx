import React from 'react'
import '../WelcomeComponent/WelcomeComponent.css'
import Button2Component from '../Button2Component/Button2Component'

function WelcomeComponent() {
    return (
        <section className="hero-section">
            <div className="hero-overlay">
                <p className="hero-subtitle">Welcome to Escape Beyond Travel.</p>

                <h2 className="hero-title">
                    where unforgettable journeys meet <br />
                    personalized luxury.
                </h2>

                <p className="hero-description">
                    We understand that life can get overwhelming, especially for
                    professionals who have dedicated themselves to their careers.
                    That’s why we’re here to offer you a unique way to refresh,
                    rejuvenate, and embark on extraordinary travel experiences.
                </p>

                <p className="hero-description">
                    We believe that travel is a powerful tool for personal well-being
                    and a source of endless inspiration. As a former educator, I have
                    witnessed firsthand the transformative impact of exploration and
                    stepping outside our comfort zones. With a deep understanding of
                    your needs and desires, I have crafted a travel agency specifically
                    tailored to professionals like you, who seek a break from the daily
                    grind and an opportunity to indulge in the world’s most enchanting
                    destinations.
                </p>

                 <div className="button-container">
                     <Button2Component text="Learn More" path="/destinations" />
                 </div>
            </div>
        </section>
    )
}

export default WelcomeComponent
