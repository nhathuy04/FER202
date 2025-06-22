import React, { useReducer, useState } from "react";
import { Button, Form, Container, Row, Col, ListGroup, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((item) => item.id !== action.id) };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.newName, isEditing: false } : item
        ),
      };
    case "SET_EDITING":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, isEditing: action.isEditing } : item
        ),
      };
    default:
      return state;
  }
}

const initialState = {
  items: [],
};

function ItemLists() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [filterText, setFilterText] = useState("");
  const [sortOption, setSortOption] = useState("name");

  const handleAddItem = () => {
    if (newItemName.trim()) {
      const newItem = { id: Date.now(), name: newItemName.trim(), isEditing: false };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const handleEditItem = (id, newName) => {
    if (newName.trim()) {
      dispatch({ type: "EDIT_ITEM", id, newName: newName.trim() });
    }
  };

  const handleSetEditing = (id, isEditing) => {
    dispatch({ type: "SET_EDITING", id, isEditing });
  };

  const sortedAndFilteredItems = state.items
    .filter((item) => item.name.toLowerCase().includes(filterText.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else {
        return a.id - b.id; // Sort by creation time (id as timestamp)
      }
    });

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="offset-md-3">
          <Form>
            <Form.Group controlId="formItem" className="mb-3">
              <Form.Label>Enter Item:</Form.Label>
              <div className="d-flex">
                <Form.Control
                  type="text"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  placeholder="Enter item name"
                />
                <Button variant="primary" onClick={handleAddItem} className="ms-2">
                  Add Item
                </Button>
              </div>
            </Form.Group>
            <Form.Group controlId="formFilter" className="mb-3">
              <Form.Control
                type="text"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                placeholder="Filter items..."
              />
            </Form.Group>
            <Form.Group controlId="formSort" className="mb-3">
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Sort by {sortOption === "name" ? "Name" : "Created Time"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setSortOption("name")}>Sort by Name</Dropdown.Item>
                  <Dropdown.Item onClick={() => setSortOption("time")}>Sort by Created Time</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Form>

          <h3 className="mt-4">Item List:</h3>
          <ListGroup>
            {sortedAndFilteredItems.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                {item.isEditing ? (
                  <div className="d-flex w-100">
                    <Form.Control
                      type="text"
                      defaultValue={item.name}
                      onBlur={(e) => handleEditItem(item.id, e.target.value)}
                      autoFocus
                    />
                  </div>
                ) : (
                  item.name
                )}
                <div>
                  {item.isEditing ? (
                    <Button
                      variant="secondary"
                      onClick={() => handleSetEditing(item.id, false)}
                      className="me-2"
                    >
                      Cancel
                    </Button>
                  ) : (
                    <Button
                      variant="warning"
                      onClick={() => handleSetEditing(item.id, true)}
                      className="me-2"
                    >
                      Edit
                    </Button>
                  )}
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </Button>
                  {item.isEditing && (
                    <Button
                      variant="success"
                      onClick={() => handleEditItem(item.id, document.querySelector(`input[defaultValue="${item.name}"]`).value)}
                      className="ms-2"
                    >
                      Save
                    </Button>
                  )}
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemLists;