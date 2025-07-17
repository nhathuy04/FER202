import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCart, deleteFromCart } from '../store/cartSlice';
import { Card, Button, Form } from 'react-bootstrap';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.products);
  const cartItems = useSelector(state => state.cart.items);
  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleUpdateCart = (id) => {
    const quantity = parseInt(quantities[id]) || 1;
    dispatch(updateCart({ id, quantity }));
  };

  const handleDeleteFromCart = (id) => {
    dispatch(deleteFromCart(id));
  };

  const handleQuantityChange = (id, value) => {
    setQuantities(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="mt-4">
      <h2>Danh Sách Sản Phẩm</h2>
      {products.map(product => {
        const cartItem = cartItems.find(item => item.id === product.id);
        return (
          <Card key={product.id} className="mb-3">
            <Card.Body>
              <Card.Title>ID: {product.id} - {product.name}</Card.Title>
              <Card.Text>Giá: ${product.price.toFixed(2)}</Card.Text>
              <Card.Text>Danh mục: {product.catalogs.join(', ')}</Card.Text>
              <Button variant="primary" onClick={() => handleAddToCart(product)}>
                Thêm vào Giỏ Hàng
              </Button>
              {cartItem && (
                <div className="mt-2 d-flex align-items-center gap-2">
                  <Form.Control
                    type="number"
                    min="1"
                    value={quantities[product.id] || cartItem.quantity}
                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    style={{ width: '80px' }}
                  />
                  <Button variant="success" onClick={() => handleUpdateCart(product.id)}>
                    Cập nhật Giỏ Hàng
                  </Button>
                  <Button variant="danger" onClick={() => handleDeleteFromCart(product.id)}>
                    Xóa khỏi Giỏ Hàng
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ProductList;