import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Menu from './components/Menu';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <Navbar />
        <Carousel />
        <Menu />
        <BookingForm />
      </div>
    </div>
  );
}

export default App;