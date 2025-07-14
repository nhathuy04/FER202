import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';
import LaptopList from './components/LaptopList';
import LaptopDetail from './components/LaptopDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/laptops" element={<LaptopList user={user} />} />
          <Route path="/laptops/:id" element={<LaptopDetail />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;