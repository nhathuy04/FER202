import React from "react";
import { Card, Row, Col, Image, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SimpleCard = ({ item }) => {
  return (
    <Container className="py-2">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <Card className="p-3 mb-2">
            <Row className="align-items-center g-0">
              {/* Image and Title Section */}
              <Col xs={6} className="text-center">
                <Image
                  src="/image.png"
                  alt="FPT University Logo"
                  fluid
                  style={{ maxWidth: "80%", height: "auto" }}
                />
                
              </Col>

              {/* Text Section */}
              <Col xs={6} className="text-end" style={{ paddingRight: "50px"}}>
                <Card.Text className="mb-1" style={{ fontWeight: "bold" }}>Hoai Nguyen - FPT Đà Nẵng</Card.Text>
                <Card.Text className="mb-0">
                  Mobile: <a href="tel:+84988272763" className="text-dark" style={{ textDecoration: "none" }}>0988272763</a>
                </Card.Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SimpleCard;