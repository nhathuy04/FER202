import { useState } from "react"; // Thêm useState
import { Container, Card, Row, Col, Modal, Button } from "react-bootstrap";
import { newLists } from "./data/News_Data.jsx";
import pikachu from "../assets/img/contact/pikachu_hello.gif";
import mario from "../assets/img/contact/mario_banner.gif";
import github from "../assets/img/contact/github.gif";
import facebook from "../assets/img/contact/facebook.gif";
import discord from "../assets/img/contact/discord.gif";
import linkedin from "../assets/img/contact/linkedin.gif";
import cat from "../assets/img/contact/cat.gif";
import qrCode from "../assets/img/QR.jpg";

const AboutPage = () => {
  const [showQR, setShowQR] = useState(false); // State để kiểm soát Modal

  const handleShowQR = () => setShowQR(true);
  const handleCloseQR = () => setShowQR(false);

  return (
    <Container className="my-4">
      {/* Phần tiêu đề và giới thiệu chung */}
      <Row>
        <Col md={12} className="mb-4">
          <Card className="shadow-sm h-100 d-flex flex-column">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title className="text-center">
                  <img src={pikachu} width="85" alt="pikachu_hello" />
                  Giới thiệu
                </Card.Title>
                <Card.Text className="mt-3">
                  Đây là ứng dụng Quiz được xây dựng với ReactJS và Redux Toolkit. Ứng dụng cho phép người dùng thực hiện các bài kiểm tra về JavaScript và React, thêm câu hỏi mới, và xem lại kết quả.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Phần About Me và hình ảnh Mario */}
      <Row className="align-items-stretch">
        <Col md={8}>
          <Card className="shadow-sm h-100 d-flex flex-column">
            <Card.Body className="d-flex flex-column justify-content-between p-3">
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                <ul>
                  <li>
                    🎓 I'm a student at <strong>FPT University Da Nang Campus</strong>.
                  </li>
                  <li>
                    🔭 I'm currently learning <strong>Java, React, Node.js</strong>
                  </li>
                  <li>❤️ I'm passionate about:</li>
                  <ul>
                    <li>🖥️ Website Developer</li>
                  </ul>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm h-100 d-flex flex-column">
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Img variant="top" src={mario} alt="Coding" className="rounded img-fluid" />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Phần Connect with me */}
      <Row className="mt-4">
        <Col md={12}>
          <Card className="shadow-sm h-100 d-flex flex-column">
            <Card.Body className="d-flex flex-column align-items-center p-3">
              <Card.Title className="text-center">
                <img src={cat} width="40" height="40" alt="Cat" className="me-2" />
                Connect with me
              </Card.Title>
              <div className="d-flex justify-content-center gap-4 mt-3">
                <a href="https://github.com/nhathuy04/FER202" target="_blank" rel="noreferrer">
                  <img src={github} alt="github" className="img-fluid" style={{ width: "50px" }} />
                </a>
                <a href="https://www.facebook.com/nhatt.huy.11228" target="_blank" rel="noreferrer">
                  <img src={facebook} alt="facebook" className="img-fluid" style={{ width: "50px" }} />
                </a>
              </div>
              <div className="mt-3 text-center">
                <Button variant="primary" onClick={handleShowQR}>
                  Pay for me
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal để hiển thị QR Code */}
      <Modal show={showQR} onHide={handleCloseQR} centered>
        <Modal.Header closeButton>
          <Modal.Title>QR Code</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={qrCode}
            height="300"
            width="300"
            alt="QR Code for Donation"
            className="img-fluid"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseQR}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>

      
    </Container>
  );
};

export default AboutPage;