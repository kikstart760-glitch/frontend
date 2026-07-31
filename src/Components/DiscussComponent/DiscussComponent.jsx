import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./DiscussComponent.css";
import img1 from "../../assets/discuss.png";

function DiscussComponent() {
  return (
    <>
        <div className="discuss-cover">
            <Container>
                <Row>
                    <Col md={4} className="discuss-left">
                        <img src={img1} alt="Discuss" className="discuss-img" />
                    </Col>
                    <Col md={8} className="discuss-right">
                          <h2 className="discuss-title">
                              Discussing partnership <br />
                              and branding
                          </h2>

                          <p className="discuss-text">
                              Escape Beyond Travel takes pride in our strong partnerships that allow us to provide our <br />
                              clients with exceptional and exclusive travel experiences. As an affiliate of the esteemed <br />
                              Gifted Travel Network, we have access to a vast network of resources, industry expertise, and <br />
                              support that enables us to offer unparalleled service and personalized itineraries.
                          </p>

                          <p className="discuss-text">
                              In addition to our affiliation with Gifted Travel Network, we are proud to partner with <br />
                              Virtuoso, a renowned global network of luxury travel advisors and suppliers. This partnership <br />
                              grants us access to a curated collection of the world's finest hotels, resorts, cruise lines, and <br />
                              tour operators. Virtuoso's reputation for excellence and their commitment to delivering <br />
                              extraordinary experiences align perfectly with our own values and mission.
                          </p>

                          <p className="discuss-text">
                              By leveraging our Virtuoso partnership, we are able to design unique and special luxurious <br />
                              itineraries that go beyond the ordinary, ensuring that our clients receive the utmost value for <br />
                              their travel investment. From exclusive amenities and complimentary upgrades to VIP access <br />
                              and personalized services,our Virtuoso partners add an extra layer of luxury and distinction <br />
                              to our clients' travel experiences.
                          </p>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  );
}

export default DiscussComponent;