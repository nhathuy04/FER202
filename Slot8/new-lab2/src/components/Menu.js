import React from 'react';
import { Card, Button, Container, Row, Col, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
  return (
    <Row>
      <Col lg={12} className="mb-5"> 
        <Container>
          <Row>
            <h2 className="text-white">Our Menu</h2>
            <Col md={3}>
              <Card className="position-relative">
                <Card.Img variant="top" src="./images/menu1.jpg" alt="Margherita Pizza" />
                <Badge bg="warning" text="dark" className="position-absolute top-0 start-0 px-3 py-1" style={{ borderTopLeftRadius: '0.3rem', fontWeight: 'bold' }}>
                  SALE
                </Badge>
                <Card.Body>
                  <Card.Title>Margherita Pizza</Card.Title>
                  <Card.Text>
                    <del className="text-muted">$40.00</del>{' '}
                    <span className="text-warning" style={{ fontWeight: 'bold' }}>$31.40</span>
                  </Card.Text>
                  <Button variant="dark" className="w-100" href="#">
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src="./images/menu2.jpg" alt="Mushroom Pizza" />
                <Card.Body>
                  <Card.Title>Mushroom Pizza</Card.Title>
                  <Card.Text>$25.00</Card.Text>
                  <Button variant="dark" className="w-100" href="#">
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="position-relative">
                <Card.Img variant="top" src="./images/menu3.jpg" alt="Hawaiian Pizza" />
                <Badge bg="warning" text="dark" className="position-absolute top-0 start-0 px-3 py-1" style={{ borderTopLeftRadius: '0.3rem', fontWeight: 'bold' }}>
                  NEW
                </Badge>
                <Card.Body>
                  <Card.Title>Hawaiian Pizza</Card.Title>
                  <Card.Text>$30.00</Card.Text>
                  <Button variant="dark" className="w-100" href="#">
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="position-relative">
                <Card.Img variant="top" src="./images/menu4.jpg" alt="Pesto Pizza" />
                <Badge bg="warning" text="dark" className="position-absolute top-0 start-0 px-3 py-1" style={{ borderTopLeftRadius: '0.3rem', fontWeight: 'bold' }}>
                  SALE
                </Badge>
                <Card.Body>
                  <Card.Title>Pesto Pizza</Card.Title>
                  <Card.Text>
                    <del className="text-muted">$40.00</del>{' '}
                    <span className="text-warning" style={{ fontWeight: 'bold' }}>$31.40</span>
                  </Card.Text>
                  <Button variant="dark" className="w-100" href="#">
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default Menu;