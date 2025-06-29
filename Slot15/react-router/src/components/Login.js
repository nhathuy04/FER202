import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Alert } from 'react-bootstrap';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xác thực đơn giản (thay bằng API thực tế trong môi trường sản phẩm)
    if (username === 'admin' && password === 'password') {
      setError('');
      navigate('/posts'); // Chuyển hướng đến trang Posts
    } else {
      setError('Tên người dùng hoặc mật khẩu không đúng');
    }
  };

  return (
    <Container className="mt-5">
      <h2>Đăng Nhập</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Tên người dùng</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tên người dùng"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Đăng Nhập
        </Button>
      </Form>
    </Container>
  );
}

export default Login;