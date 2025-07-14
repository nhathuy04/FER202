import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Form, Row, Col, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

function LaptopList({ user }) {
  const [laptops, setLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchLaptops();
  }, []);

  const fetchLaptops = async (search = '') => {
    try {
      const response = await axios.get('http://localhost:3001/Laptops');
      const data = response.data;
      if (search) {
        const filtered = data.filter(laptop =>
          laptop.brand.toLowerCase().includes(search.toLowerCase()) ||
          laptop.model.toLowerCase().includes(search.toLowerCase())
        );
        setLaptops(filtered);
        console.log('Filtered laptops:', filtered); 
      } else {
        setLaptops(data);
        console.log('All laptops:', data); 
      }
    } catch (error) {
      console.error('Error fetching laptops:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search term:', searchTerm); 
    fetchLaptops(searchTerm);
  };

  return (
    <Container className="mt-5">
      <h2>Laptop List</h2>
      <p>Welcome, {user?.username}</p>
      <Form onSubmit={handleSearch} className="mb-4">
        <Row>
          <Col md={8}>
            <Form.Control
              type="text"
              placeholder="Search by brand or model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <Row xs={1} md={2} lg={4} className="g-4">
        {laptops.map((laptop) => (
          <Col key={laptop.id}>
            <Card>
              <Card.Img variant="top" src={laptop.image } style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                <Card.Text>
                  Year: {laptop.year}<br />
                  Price: {laptop.price}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/laptops/${laptop.id}`)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

LaptopList.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }),
};

export default LaptopList;