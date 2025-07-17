import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import store from './store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductForm from './components/ProductForm';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
          <Container>
            <Navbar.Brand as={NavLink} to="/">Ứng dụng Giỏ Hàng</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/" end>
                  Giỏ Hàng
                </Nav.Link>
                <Nav.Link as={NavLink} to="/add-product">
                  Thêm Sản Phẩm
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="py-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ProductList />
                  <Cart />
                </>
              }
            />
            <Route path="/add-product" element={<ProductForm />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;