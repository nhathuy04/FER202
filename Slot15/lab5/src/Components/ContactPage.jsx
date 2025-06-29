import React, { useState } from 'react';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    agree: false,
  });

  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const isValid = {
    firstName: form.firstName.trim() !== '',
    lastName: form.lastName.trim() !== '',
    username: form.username.trim() !== '',
    city: form.city.trim() !== '',
    state: form.state.trim() !== '',
    zip: form.zip.trim() !== '',
    agree: form.agree === true,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allValid = Object.values(isValid).every(Boolean);
    if (!allValid) {
      setTouched({
        firstName: true,
        lastName: true,
        username: true,
        city: true,
        state: true,
        zip: true,
        agree: true,
      });
    } else {
      alert('Form submitted successfully!');
    }
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="First name"
            value={form.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            isValid={touched.firstName && isValid.firstName}
            isInvalid={touched.firstName && !isValid.firstName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter your first name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Last name"
            value={form.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            isValid={touched.lastName && isValid.lastName}
            isInvalid={touched.lastName && !isValid.lastName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter your last name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.username && isValid.username}
              isInvalid={touched.username && !isValid.username}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            onBlur={handleBlur}
            isValid={touched.city && isValid.city}
            isInvalid={touched.city && !isValid.city}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            name="state"
            placeholder="State"
            value={form.state}
            onChange={handleChange}
            onBlur={handleBlur}
            isValid={touched.state && isValid.state}
            isInvalid={touched.state && !isValid.state}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            type="text"
            name="zip"
            placeholder="Zip"
            value={form.zip}
            onChange={handleChange}
            onBlur={handleBlur}
            isValid={touched.zip && isValid.zip}
            isInvalid={touched.zip && !isValid.zip}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Check
          name="agree"
          label="Agree to terms and conditions"
          checked={form.agree}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched.agree && !isValid.agree}
          feedback="You must agree before submitting."
          feedbackType="invalid"
          required
        />
      </Form.Group>

      <Button type="submit">Submit form</Button>
    </Form>
  );
}
