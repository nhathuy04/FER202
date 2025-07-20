import { useState } from 'react';
  import { Form, Button } from 'react-bootstrap';
  import Swal from 'sweetalert2';

  function CourseForm({ initialValues, onSubmit }) {
    const [formData, setFormData] = useState(initialValues || { name: '', description: '', image: '', quiz: [] });
    const [errors, setErrors] = useState({ name: '', description: '' });
    const [imagePreview, setImagePreview] = useState(initialValues?.image || '');

    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === 'name' || name === 'description') {
        setFormData({ ...formData, [name]: value });
        setErrors((prev) => ({ ...prev, [name]: value.trim() ? '' : `Vui lòng nhập ${name === 'name' ? 'tên khóa học' : 'mô tả'}` }));
      }
    };

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, image: reader.result });
          setImagePreview(reader.result);
          setErrors((prev) => ({ ...prev, name: '', description: '' }));
        };
        reader.readAsDataURL(file);
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = { name: '', description: '' };
      let hasError = false;

      if (!formData.name.trim()) {
        newErrors.name = 'Vui lòng nhập tên khóa học!';
        hasError = true;
      }
      if (!formData.description.trim()) {
        newErrors.description = 'Vui lòng nhập mô tả!';
        hasError = true;
      }

      setErrors(newErrors);
      if (hasError) return;

      onSubmit(formData);
      Swal.fire({
        title: 'Lưu thành công!',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      });
    };

    return (
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tên khóa học</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
            required
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mô tả</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
            isInvalid={!!errors.description}
            required
          />
          <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Hình ảnh</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
          />
          {imagePreview && (
            <div className="mt-2">
              <img src={imagePreview} alt="Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
            </div>
          )}
        </Form.Group>
        <Button type="submit" variant="primary">Lưu</Button>
      </Form>
    );
  }

  export default CourseForm;