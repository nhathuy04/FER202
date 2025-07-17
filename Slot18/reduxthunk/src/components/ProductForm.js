import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Card } from 'react-bootstrap';
import { addProductAsync } from '../store/cartSlice';

const ProductForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    catalogs: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: formData.name,
      price: parseFloat(formData.price),
      description: formData.description,
      catalogs: formData.catalogs.split(',').map(cat => cat.trim()),
    };
    dispatch(addProductAsync(newProduct));
    setFormData({ name: '', price: '', description: '', catalogs: '' });
  };

  return (
    <Card className="mt-4">
      <Card.Header>
        <h2>Thêm Sản Phẩm Mới</h2>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Tên sản phẩm</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Giá</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Mô tả</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="catalogs">
            <Form.Label>Danh mục (phân cách bằng dấu phẩy)</Form.Label>
            <Form.Control
              type="text"
              name="catalogs"
              value={formData.catalogs}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Thêm Sản Phẩm
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ProductForm;