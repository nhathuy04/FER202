import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const validateInput = (value) => {
  return value.trim().length >= 5;
};

function ValidatedInput() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [touched, setTouched] = useState(false); 
  useEffect(() => {
    if (touched) {
      const isValidInput = validateInput(value);
      setIsValid(isValidInput);
      setErrorMessage(
        isValidInput ? "" : "Giá trị phải có ít nhất 5 ký tự!"
      );
    }
  }, [value, touched]);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Giá trị đã nhập: " + value);
  };
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="validatedInput" className="mb-3">
                  <Form.Label>Nhập một giá trị</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Tối thiểu 5 ký tự"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={() => setTouched(true)}
                    isValid={touched && isValid}
                    isInvalid={touched && !isValid}
                  />

                </Form.Group>

                <div className="d-grid">
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={!isValid}
                  >
                    Gửi
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ValidatedInput;
