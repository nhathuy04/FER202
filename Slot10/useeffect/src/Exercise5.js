import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function ValidatedForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [formValid, setFormValid] = useState(false);

  // Xác thực email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  // Xác thực mật khẩu
  const validatePassword = (password) => password.length >= 8;
  useEffect(() => {
    const emailOk = validateEmail(email);
    const passwordOk = validatePassword(password);
    setIsEmailValid(emailOk);
    setIsPasswordValid(passwordOk);
    setFormValid(emailOk && passwordOk);
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };
  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: '100%', maxWidth: '500px', padding: '24px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <Card.Body>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Nhập email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setEmailTouched(true)}
                isInvalid={emailTouched && !isEmailValid}
                isValid={emailTouched && isEmailValid}
              />
              <Form.Control.Feedback type="invalid">
                Email không hợp lệ. Vui lòng nhập lại!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setPasswordTouched(true)}
                isInvalid={passwordTouched && !isPasswordValid}
                isValid={passwordTouched && isPasswordValid}
              />
              <Form.Control.Feedback type="invalid">
                Mật khẩu phải có ít nhất 8 ký tự!
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-grid mt-4">
              <Button variant="primary" type="submit" disabled={!formValid}>
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ValidatedForm;
