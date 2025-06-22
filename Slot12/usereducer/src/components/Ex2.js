import React, { useReducer } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.value };
    case 'SET_AGE':
      return { ...state, age: action.value };
    default:
      return state;
  }
}

function ChangeNameAge() {
  const [state, dispatch] = useReducer(formReducer, { name: '', age: '' });

  const handleNameChange = (e) => {
    dispatch({ type: 'SET_NAME', value: e.target.value });
  };

  const handleAgeChange = (e) => {
    dispatch({ type: 'SET_AGE', value: e.target.value });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Counter: 0</h1>
      <Row className="justify-content-center mb-4">
        <Col xs={12} md={6} className="text-center">
          <Button variant="primary" className="me-2">+</Button>
          <Button variant="danger" className="me-2">-</Button>
          <Button variant="secondary">Reset</Button>
        </Col>
      </Row>
      <Form>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={state.name}
                onChange={handleNameChange}
                placeholder="Input name"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="formAge">
              <Form.Label>Age:</Form.Label>
              <Form.Control
                type="text"
                value={state.age}
                onChange={handleAgeChange}
                placeholder="Input age"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <h3>Name: {state.name}</h3>
            <h3>Age: {state.age}</h3>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default ChangeNameAge;