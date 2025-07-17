import React from 'react';
import { useSelector } from 'react-redux';
import { Card, ListGroup, Badge } from 'react-bootstrap';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Card className="mt-4">
      <Card.Header>
        <h2>Giỏ Hàng</h2>
      </Card.Header>
      <Card.Body>
        {cartItems.length === 0 ? (
          <p>Giỏ hàng của bạn đang trống.</p>
        ) : (
          <>
            <ListGroup variant="flush">
              {cartItems.map(item => (
                <ListGroup.Item key={item.id}>
                  <div><strong>Tên:</strong> {item.name}</div>
                  <div><strong>ID:</strong> {item.id}</div>
                  <div><strong>Giá:</strong> ${item.price.toFixed(2)}</div>
                  <div><strong>Danh mục:</strong> {item.catalogs.join(', ')}</div>
                  <div><strong>Số lượng:</strong> <Badge bg="primary">{item.quantity}</Badge></div>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <h3 className="mt-3">Tổng giá: ${totalCost.toFixed(2)}</h3>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default Cart;