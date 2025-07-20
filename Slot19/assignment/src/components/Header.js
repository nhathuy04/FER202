import { Navbar, Nav, NavDropdown, Button, Container, Form, FormControl } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { setSearchQuery } from '../redux/courseSlice'; // Sửa import
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth || { isAuthenticated: false, user: null });
  const { searchQuery } = useSelector((state) => state.courses || { searchQuery: '' }); // Lấy từ courseSlice
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery || '');

  useEffect(() => {
    setLocalSearchQuery(searchQuery); // Đồng bộ localSearchQuery với state Redux
  }, [searchQuery]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setLocalSearchQuery(query);
    dispatch(setSearchQuery(query)); // Dispatch action với payload là query
    console.log('Search dispatched:', query);
  };

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = '/';
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">Course Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
          </Nav>
          <Form className="d-flex me-3">
            <FormControl
              type="search"
              placeholder="Tìm kiếm khóa học..."
              className="me-2"
              aria-label="Search"
              value={localSearchQuery}
              onChange={handleSearch}
            />
          </Form>
          <Nav>
            {isAuthenticated ? (
              <>
                {user?.role === 'admin' && <Nav.Link as={Link} to="/admin">Admin</Nav.Link>}
                <Button variant="outline-danger" onClick={handleLogout} className="ms-2">Logout</Button>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">Login / Register</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;