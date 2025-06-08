import React from 'react';
import { Form, Button, Container, Row, Col, FormSelect } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Booking = () => {
  return (
    <Row>
      <Col lg={12} className="mb-5">
        <Container>
          <Row>
            <h2 className="text-center text-white">Book Your Table</h2>
            <Row className="mb-3">
              <Col>
                <Form.Control type="text" placeholder="Your name *" aria-label="Your name" />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Your email *" aria-label="Your email" />
              </Col>
              <Col className="mb-5">
                <FormSelect id="inputState">
                  <option defaultValue>Select a Service</option>
                  <option>pizza 1</option>
                  <option>pizza 2</option>
                </FormSelect>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Please write your comment"
                  aria-label="Please write your comment"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="warning" className="text-white" type="submit">
                  Send Message
                </Button>
              </Col>
            </Row>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default Booking;