import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Alert, Card, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { login } from '../redux/authSlice';
import './LoginForm.css';

function LoginForm() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const validateForm = () => {
    const newErrors = { username: '', password: '' };
    let isValid = true;

    if (!credentials.username.trim()) {
      newErrors.username = 'Vui lòng nhập tên đăng nhập';
      isValid = false;
    }
    if (!credentials.password.trim()) {
      newErrors.password = 'Vui lòng nhập mật khẩu';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    if (value.trim()) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    setLoginError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      console.log('Đang gửi yêu cầu đăng nhập:', credentials);
      await dispatch(login(credentials));
      console.log('Đăng nhập thành công');
      const swalResult = await Swal.fire({
        title: 'Đăng nhập thành công!',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        allowOutsideClick: false,
      });
      if (swalResult.isDismissed || swalResult.isConfirmed) {
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.error('Lỗi đăng nhập:', err.message);
      setLoginError('Tài khoản hoặc mật khẩu không đúng');
    }
  };

  return (
    <Card className="login-card shadow-lg p-4" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <Card.Body>
        <h2 className="text-center mb-4 text-primary">Đăng Nhập</h2>
        {loginError && <Alert variant="danger" className="text-center mb-3">{loginError}</Alert>}
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-4 align-items-center" controlId="formUsername">
            <Form.Label column sm={3} className="text-end fw-bold">Tên đăng nhập</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
                className="rounded-pill"
                placeholder="Nhập tên đăng nhập"
              />
              <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4 align-items-center" controlId="formPassword">
            <Form.Label column sm={3} className="text-end fw-bold">Mật khẩu</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                className="rounded-pill"
                placeholder="Nhập mật khẩu "
              />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <div className="d-grid gap-3">
            <Button
              type="submit"
              variant="primary"
              className="rounded-pill py-2"
              style={{ fontSize: '1.1rem' }}
            >
              Đăng Nhập
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default LoginForm;