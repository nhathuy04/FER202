import React from 'react';
import { Navbar, Nav, Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
  return (
    <Row>
      <Col lg={12} >
        <Container>
          <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              Pizza House
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="me-auto mb-2 mb-lg-0">
                <Nav.Item className="ms-lg-5">
                  <Nav.Link href="#" active>
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="ms-lg-5">
                  <Nav.Link href="#">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item className="ms-lg-5">
                  <Nav.Link href="#">Contact</Nav.Link>
                </Nav.Item>
              </Nav>
              <Form className="d-flex" role="search">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="danger" type="submit">
                  <i className="fa fa-search"></i>
                </Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Col>
    </Row>
  );
};

export default NavBar;