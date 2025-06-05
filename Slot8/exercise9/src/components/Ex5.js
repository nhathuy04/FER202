import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "../App4.css";

function Exercise5() {
  return (
    <div>
      {/* Header */}
      <Navbar expand="lg" className="header py-4" variant="dark">
        <Container className="flex-column text-center">
          <img src="/image.png" alt="FPT University" className="logo mb-3" />
          <Nav className="justify-content-center">
            <Nav.Link href="#" className="text-white px-3">Home</Nav.Link>
            <Nav.Link href="#about" className="text-white px-3">About</Nav.Link>
            <Nav.Link href="#contact" className="text-white px-3">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* About Section */}
      <Container className="section" id="about">
        <h2 className="mb-3">About</h2>
        <p>This is the about section of the website.</p>
      </Container>

      {/* Contact Section */}
      <Container className="section" id="contact">
        <h2 className="mb-3">Contact</h2>
        <p>
          For any inquiries, please contact us at{" "}
          <a href="mailto:example@example.com">example@example.com</a>.
        </p>
      </Container>

      {/* Footer */}
      <div className="footer text-center py-3">
        © 2023 Website. All rights reserved.
      </div>
    </div>
  );
}

export default Exercise5;
