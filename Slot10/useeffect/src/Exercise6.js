import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormValidation = () => {
  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [gender, setGender] = useState('');
  const [isGenderValid, setIsGenderValid] = useState(false);
  const [country, setCountry] = useState('');
  const [isCountryValid, setIsCountryValid] = useState(false);
  const [agree, setAgree] = useState(false);
  const [isAgreeValid, setIsAgreeValid] = useState(false);
  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    setIsNameValid(name.trim().length >= 3);
  }, [name]);
  useEffect(() => {
    setIsGenderValid(gender !== '');
  }, [gender]);
  useEffect(() => {
    setIsCountryValid(country !== '');
  }, [country]);
  useEffect(() => {
    setIsAgreeValid(agree);
  }, [agree]);
  useEffect(() => {
    setFormValid(isNameValid && isGenderValid && isCountryValid && isAgreeValid);
  }, [isNameValid, isGenderValid, isCountryValid, isAgreeValid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: '100%', maxWidth: '550px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"  value={name} onChange={(e) => setName(e.target.value)}
                onBlur={() => setNameTouched(true)}
                isInvalid={nameTouched && !isNameValid}
                isValid={nameTouched && isNameValid}
                placeholder="Enter your name"
              />
              <Form.Control.Feedback type="invalid">
                Name must be at least 3 characters long.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Gender</Form.Label>
              <div>
                <Form.Check inline type="radio" label="Male" name="gender"value="male" checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <Form.Check inline type="radio" label="Female" name="gender" value="female" checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <Form.Check inline type="radio" label="Other"  name="gender" value="other" checked={gender === 'other'}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
              {!isGenderValid && (
                <div className="text-danger mt-1">Please select a gender.</div>
              )}
            </Form.Group>

            <Form.Group controlId="formCountry" className="mt-3">
              <Form.Label>Country</Form.Label>
              <Form.Select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                isValid={country !== ''}
                isInvalid={country === ''}
              >
                <option value="">-- Select --</option>
                <option value="Hanoi">Hà Nội</option>
                <option value="Danang">Đà Nẵng</option>
                <option value="HCM">Hồ Chí Minh</option>
              </Form.Select>
              {country === '' && (
                <Form.Control.Feedback type="invalid">
                  Please select a country.
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group controlId="formCheckbox" className="mt-3">
              <Form.Check
                type="checkbox"
                label="I agree to the terms and conditions"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                isInvalid={!isAgreeValid}
              />
              {!isAgreeValid && (
                <div className="text-danger mt-1">You must agree before submitting.</div>
              )}
            </Form.Group>
            <div className="d-grid mt-4">
              <Button type="submit" disabled={!formValid}>
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FormValidation;
