import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import Post from './components/Post';
import PostDetail from './components/PostDetail';
import { Container } from 'react-bootstrap';
import Login from './components/Login';

function App() {
  return (
    // <div>
    //   <h1>React Router Example</h1>
    //   <Navigation />
    //   <Container>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/posts" element={<Post />} />
    //       <Route path="/post/:id" element={<PostDetail />} />
    //     </Routes>
    //   </Container>
    // </div>
    <div>
      <h1>React Router Example</h1>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Container>
    </div>
  );
}
export default App;