import React from 'react'
import '../CompanyComponent/CompanyComponent.css'
import { Container, Row, Col } from 'react-bootstrap'
import img from '../../assets/company-img.png'


function CompanyComponent() {
  return (
    <>
      <div className="company-component">
        <Container>
          <Row>
            <Col md={6}>
              <div className="company-left">
                <div className="company-title">
                  <h2>
                    We understand that life can get overwhelming, especially for
                    professionals who have dedicated themselves to their
                    careers.
                  </h2>
                  <p>
                    That's why we're here to offer you a unique way to refresh,
                    rejuvenate, and embark on extraordinary travel experiences.
                  </p>
                </div>
                <div className="company-img">
                  <figure>
                    <img src={img} alt="Company" />
                  </figure>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="company-right">
                <p>
                  We believe that travel is a powerful tool for personal
                  well-being and a source of endless inspiration. As a former
                  educator, I have witnessed firsthand the transformative impact
                  of exploration and stepping outside our comfort zones. With a
                  deep understanding of your needs and desires, I have crafted a
                  travel agency specifically tailored to professionals like you,
                  who seek a break from the daily grind and an opportunity to
                  indulge in the world's most enchanting destinations.
                </p>
                <p>
                  Our philosophy centers around the idea that life is too short
                  to settle for ordinary experiences. We curate bespoke
                  itineraries that go beyond the typical tourist hotspots,
                  taking you on a journey of discovery and self-discovery. From
                  majestic landscapes to vibrant cultures, our handpicked
                  destinations offer an escape from the everyday, inviting you
                  to immerse yourself in new perspectives and embrace the magic
                  of the unknown.
                </p>
                <p>
                  As a luxury travel advisor, I am committed to providing you
                  with unparalleled service and attention to detail. Each
                  itinerary is carefully crafted to reflect your preferences,
                  interests, and desires, ensuring that every moment of your
                  trip is tailored to your unique taste. Whether you crave
                  adventure, cultural exploration, or pure relaxation, we will
                  design an experience that exceeds your expectations.
                </p>
                <p>
                  With Escape Beyond Travel, you can trust that every aspect of
                  your journey will be meticulously planned, from luxury
                  accommodations to exclusive dining experiences. We collaborate
                  with a network of trusted partners around the world, ensuring
                  that you have access to the finest accommodations, top-notch
                  guides, and insider recommendations. We take care of the
                  logistics, allowing you to fully immerse yourself in the joy
                  of travel, free from stress and worries.It's time to
                  prioritize your well-being and embark on a journey of
                  self-renewal. Let us be your guide as you reconnect with your
                  passions, discover hidden treasures, and create lasting
                  memories. With us, the world is yours to explore, and we can't
                  wait to accompany you on this transformative adventure.
                </p>
                <p>
                  Indulge in the luxury of travel and let us redefine your
                  journey to wellness. Contact us today to start planning the
                  trip of a lifetime.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompanyComponent