import { Link } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BSNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BSNavbar.Brand as={Link} to="/">Quiz App</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Trang chủ</Nav.Link>
            <Nav.Link as={Link} to="/quiz">Quiz</Nav.Link>
            <Nav.Link as={Link} to="/quiz/add">Thêm Câu Hỏi</Nav.Link>
            <Nav.Link as={Link} to="/about">Giới thiệu</Nav.Link>
            <Nav.Link as={Link} to="/contact">Liên hệ</Nav.Link>
            <Nav.Link as={Link} to="/news">Tin tức</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;