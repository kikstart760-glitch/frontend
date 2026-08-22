import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "../ErrorComponent/ErrorComponent.css";

function ErrorComponent() {
  return (
    <main className="error-component">
      <section className="error-content">
        <Container>
          <Row>
            <Col md={6} className="error-text">
              <h1>Oops! Page not found</h1>
              <p>The page you are looking for does not exist or has moved.</p>
              <Link to="/" className="btn btn-primary">
                Go back to Home
              </Link>
            </Col>
            <Col md={6} className="error-animation">
              <div className="errorpic">
                <iframe
                  title="Page not found animation"
                  src="https://lottie.host/embed/86878a21-9e02-4c62-ab2f-0d0cafac9b4c/0xLO8XhRhP.json"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default ErrorComponent;