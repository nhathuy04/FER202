import { useState, useEffect } from "react";
import { Container, Carousel, Card, Row, Col } from "react-bootstrap";
import slide1 from "../assets/img/slide1.jpg";
import slide2 from "../assets/img/slide2.jpg";
import slide3 from "../assets/img/slide3.jpg";
import menu01 from "../assets/img/menu-01.jpg";
import menu02 from "../assets/img/menu-02.jpg";
import menu03 from "../assets/img/menu-03.jpg";
import menu04 from "../assets/img/menu-04.jpg";
import menu05 from "../assets/img/menu-05.jpg";
import menu06 from "../assets/img/menu-06.jpg";
import menu07 from "../assets/img/menu-07.jpg";
import menu08 from "../assets/img/menu-08.jpg";

const banners = [slide1, slide2, slide3];
const menus = [menu01, menu02, menu03, menu04, menu05, menu06, menu07, menu08];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % banners.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <Container className="my-4">
      <Carousel activeIndex={currentSlide} onSelect={setCurrentSlide}>
        {banners.map((banner, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 rounded" src={banner} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <h2 className="text-center my-4">Trang chủ</h2>
      <Row>
        {menus.map((menu, index) => (
          <Col xs={12} sm={6} md={3} className="mb-3" key={index}>
            <Card>
              <Card.Img variant="top" src={menu} className="rounded" />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;