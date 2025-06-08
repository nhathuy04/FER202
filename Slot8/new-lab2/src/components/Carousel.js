import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousels = () => {
  return (
    <Row>
      <Col lg={12} className="mb-5">
        <Carousel id="carouselExampleCaptions">
          <Carousel.Item active>
            <img src="./images/pizza1.jpg" className="d-block w-100" alt="Margherita Pizza" />
            <Carousel.Caption className="d-none d-md-block">
              <h2>Margherita Pizza</h2>
              <p className="fs-4">
                A classic Italian pizza with fresh tomato, mozzarella, and basil, delivering a simple yet vibrant taste!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="./images/pizza2.jpg" className="d-block w-100" alt="Mushroom Pizza" />
            <Carousel.Caption className="d-none d-md-block">
              <h2>Mushroom Pizza</h2>
              <p className="fs-4">
                Rich and earthy flavors with a blend of mushrooms, mozzarella, and a creamy garlic sauce on a crispy crust.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="./images/pizza3.jpg" className="d-block w-100" alt="Hawaiian Pizza" />
            <Carousel.Caption className="d-none d-md-block">
              <h2>Hawaiian Pizza</h2>
              <p className="fs-4">
                A sweet and savory delight with ham, pineapple, and mozzarella, perfect for a tropical twist
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/pizza4.jpg" className="d-block w-100" alt="Pesto Pizza" />
            <Carousel.Caption className="d-none d-md-block">
              <h2>Pesto Pizza</h2>
              <p className="fs-4">
                Fresh pesto sauce, mozzarella, cherry tomatoes, and arugula, offering a bold and herbaceous flavor.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/pizza5.jpg" className="d-block w-100" alt="Manato Pizza" />
            <Carousel.Caption className="d-none d-md-block">
              <h2>Manato Pizza</h2>
              <p className="fs-4">
                A unique blend of spicy pepperoni, roasted peppers, and ricotta, topped with a tangy tomato sauce
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
};

export default Carousels;