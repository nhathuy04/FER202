import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function LaptopDetail() {
  const [laptop, setLaptop] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLaptop = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/Laptops/${id}`);
        setLaptop(response.data);
      } catch (error) {
        console.error('Error fetching laptop:', error);
        navigate('/404');
      }
    };
    fetchLaptop();
  }, [id, navigate]);

  if (!laptop) return <h1>Loading...</h1>;

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ maxWidth: '400px', width: '100%' }}>
        <Card.Img
          variant="top"
          src={laptop.image || 'https://via.placeholder.com/300x200'}
          style={{ maxHeight: '250px', objectFit: 'contain', width: '100%' }}
        />
        <Card.Body>
          <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
          <Card.Text>
            <p><strong>Year:</strong> {laptop.year}</p>
            <p><strong>Price:</strong> {laptop.price}</p>
            <p><strong>Description:</strong> {laptop.description || 'High-performance laptop suitable for professional use.'}</p>
          </Card.Text>
          <Button variant="primary" className="w-100" onClick={() => navigate('/laptops')}>
            Back to Laptop List
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LaptopDetail;