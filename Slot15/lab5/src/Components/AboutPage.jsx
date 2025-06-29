import { Container, Row, Col, Image } from "react-bootstrap";
import "../assets/AboutPage.css";

const AboutPage = () => {
  return (
    <Container className="py-5 about-container">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center text-danger">About Me</h2>
          <p className="text-center text-muted">
            I'm a passionate frontend developer who loves building beautiful and responsive web applications.
          </p>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col md={4}>
          <Image
            src="/meme.jpg"
            roundedCircle
            fluid
            alt="Your Photo"
          />
        </Col>
        <Col md={8}>
          <h4>Hi, I'm Nhật Huy 👋</h4>
          <p>
            I specialize in ReactJS and modern frontend development. I love building clean UI, solving coding problems, and learning new technologies every day.
          </p>
          <p>
            Feel free to connect with me if you're interested in working together, have any questions, or just want to say hi!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
