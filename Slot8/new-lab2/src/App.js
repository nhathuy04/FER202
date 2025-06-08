import React from 'react';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import NavBar from './components/NavBars';
import Carousels from './components/Carousel';
import Menu from './components/Menu';
import Booking from './components/Booking';

function App() {
  return (
    <Container fluid className="bg-dark">
      <Row>
        <NavBar />
        <Carousels/>
        <Menu />
        <Booking />
      </Row>
    </Container>
  );
}

export default App;