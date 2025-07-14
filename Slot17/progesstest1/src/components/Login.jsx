import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Container, Form, Button, Modal, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage('Username and password are required.');
      return;
    }

    try {
      const response = await axios.get('http://localhost:3001/UserAccounts', {
        params: { username, password },
      });

      const matchedUser = response.data.find(
        (user) => user.username === username && user.password === password
      );

      if (matchedUser) {
        setUser(matchedUser);
        setErrorMessage('');
        setShowModal(true); 
  
        setTimeout(() => {
          navigate('/laptops');
        }, 1000);
      } else {
        setErrorMessage('Invalid username or password!');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Server error. Please try again later.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div style={{ width: '100%', maxWidth: '400px', border: '1px solid #eee', borderRadius: '10px', padding: '30px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {errorMessage && (
            <Alert variant="danger">{errorMessage}</Alert>
          )}

          <Button type="submit" className="w-100" variant="primary">
            Login
          </Button>
        </Form>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">Welcome, {username} login Successful!</Modal.Body>
        </Modal>
    </Container>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default Login;
