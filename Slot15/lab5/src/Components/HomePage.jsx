import { useState } from "react";
import "../assets/HomePage.css";
import { Carousel } from "react-bootstrap";
import banner1 from "../assets/img/slide1.jpg";
import banner2 from "../assets/img/slide2.jpg";
import banner3 from "../assets/img/slide3.jpg";
import menu1 from "../assets/img/menu-01.jpg";
import menu2 from "../assets/img/menu-02.jpg";
import menu3 from "../assets/img/menu-03.jpg";
import menu4 from "../assets/img/menu-04.jpg";
import menu5 from "../assets/img/menu-05.jpg";
import menu6 from "../assets/img/menu-06.jpg";
import menu7 from "../assets/img/menu-07.jpg";
import menu8 from "../assets/img/menu-08.jpg";

const banners = [banner1, banner2, banner3];
const menus = [menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8];

const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="homepage-container">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={2000} className="custom-carousel">
        {banners.map((banner, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={banner}
              alt={`Banner ${idx + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="best-sellers">
        <div className="products">
          {menus.map((menu, index) => (
            <div key={index} className="product">
              <img src={menu} alt={`Sản phẩm ${index + 1}`} />
            </div>
          ))}
        </div>
        <h2>This is Home Page</h2>

      </div>
    </div>
  );
};

export default HomePage;