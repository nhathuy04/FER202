import { useState } from "react";
import Swal from "sweetalert2";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Input change:", name, value); // Debug
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    switch (name) {
      case "name":
        if (!value.trim()) newErrors.name = "Họ và tên không được để trống!";
        else delete newErrors.name;
        break;
      case "email":
        if (!value.trim()) newErrors.email = "Email không được để trống!";
        else if (!/^\S+@\S+\.\S+$/.test(value))
          newErrors.email = "Email không hợp lệ!";
        else delete newErrors.email;
        break;
      case "message":
        if (!value.trim()) newErrors.message = "Tin nhắn không được để trống!";
        else delete newErrors.message;
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Họ và tên không được để trống!";
    if (!formData.email.trim()) newErrors.email = "Email không được để trống!";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Email không hợp lệ!";
    if (!formData.message.trim()) newErrors.message = "Tin nhắn không được để trống!";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // Debug
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      Swal.fire({
        title: "Thành công!",
        text: `Đã gửi thành công vào lúc ${new Date().toLocaleString("vi-VN", {
          timeZone: "Asia/Ho_Chi_Minh",
        })}`,
        icon: "success",
        confirmButtonText: "OK",
        timer: 3000,
        timerProgressBar: true,
      }).then(() => {
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      });
    }
  };

  return (
    <Container className="my-4">
      <Row>
        <Col md={6} className="mx-auto">
          <Card className="shadow-sm p-4">
            <Card.Body>
              <Card.Title className="text-center text-primary">Liên hệ</Card.Title>
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Họ và tên</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Nhập họ và tên"
                    isInvalid={!!errors.name}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name || "Vui lòng nhập họ và tên!"}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Nhập email"
                    isInvalid={!!errors.email}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email || "Vui lòng nhập email!"}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Tin nhắn</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={4}
                    placeholder="Nhập tin nhắn"
                    isInvalid={!!errors.message}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message || "Vui lòng nhập tin nhắn!"}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Gửi
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;