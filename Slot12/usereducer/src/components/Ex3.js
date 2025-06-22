import React, { useReducer, useState } from "react";
import { Button, Form, Container, Row, Col, ListGroup } from "react-bootstrap";
function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}

const initialState = {
  items: [],
};

function ItemList() {
  // Khởi tạo useReducer với reducer và initial state
  const [state, dispatch] = useReducer(listReducer, initialState);

  // State quản lý input cho item name
  const [newItemName, setNewItemName] = useState("");

  // Thêm một mục mới vào danh sách
  const handleAddItem = () => {
    if (newItemName) {
      const newItem = { id: Date.now(), name: newItemName }; // Tạo item với id duy nhất
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName(""); // Reset input sau khi thêm mục
    }
  };

  // Xóa một mục khỏi danh sách
  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="offset-md-3">
          <Form>
            <Form.Group controlId="formItem">
              <Form.Label>Enter Item:</Form.Label>
              <Form.Control
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter item name"
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddItem}>
              Add Item
            </Button>
          </Form>

          <h3 className="mt-4">Item List:</h3>
          <ListGroup>
            {state.items.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between"
              >
                {item.name}
                <Button
                  variant="danger"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;