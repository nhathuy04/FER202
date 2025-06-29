import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container } from "react-bootstrap";

// Component UserProfile2
const UserProfile2 = ({ name: initialName, age: initialAge, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: initialName,
    age: initialAge,
  });
  const [errors, setErrors] = useState({});

  // Kiểm tra lỗi khi component mount và khi formData thay đổi
  useEffect(() => {
    validateForm();
  }, [formData]);

  // Hàm xử lý thay đổi giá trị input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Hàm kiểm tra lỗi
  const validateForm = () => {
    const newErrors = {};

    // Kiểm tra tên
    if (!formData.name) {
      newErrors.name = "Tên là bắt buộc";
    }

    // Kiểm tra tuổi
    const age = parseInt(formData.age, 10);
    if (!formData.age) {
      newErrors.age = "Tuổi không được để trống!";
    } else if (isNaN(age)) {
      newErrors.age = "Tuổi phải là một số hợp lệ!";
    } else if (age < 18 || age > 100) {
      newErrors.age = "Tuổi phải nằm trong khoảng từ 18 đến 100!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Hàm xử lý khi submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Container>
      <h3>Thông Tin Người Dùng</h3>
      <Form onSubmit={handleSubmit}>
        {/* Trường tên */}
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Trường tuổi */}
        <Form.Group controlId="formAge" className="mb-3">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Nút submit */}
        <Button variant="primary" type="submit">
          Gửi
        </Button>
      </Form>
    </Container>
  );
};

// Xác định PropTypes cho UserProfile2
UserProfile2.propTypes = {
  name: PropTypes.string.isRequired, // 'name' là chuỗi bắt buộc
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 'age' có thể là chuỗi hoặc số
  onSubmit: PropTypes.func.isRequired, // Hàm onSubmit để xử lý khi người dùng submit form
};

export default UserProfile2;