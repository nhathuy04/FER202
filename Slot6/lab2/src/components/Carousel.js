import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const Carousel = () => {
  return (
    <div className="col-lg-12 mb-5">
      <div className="row">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" ></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" >
              <img src="./images/pizza1.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h2>Margherita Pizza</h2>
                <p className="fs-5">A classic Italian pizza with fresh tomato, mozzarella, and basil, delivering a simple yet vibrant taste!</p>
              </div>
            </div>
            <div className="carousel-item" >
              <img src="./images/pizza2.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h2>Mushroom Pizza</h2>
                <p className="fs-4">Rich and earthy flavors with a blend of mushrooms, mozzarella, and a creamy garlic sauce on a crispy crust.</p>
              </div>
            </div>
            <div className="carousel-item" >
              <img src="./images/pizza3.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h2>Hawaiian Pizza</h2>
                <p className="fs-5">A sweet and savory delight with ham, pineapple, and mozzarella, perfect for a tropical twist</p>
              </div>
            </div>
            <div className="carousel-item" >
              <img src="/images/pizza4.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h2>Pesto Pizza</h2>
                <p className="fs-5">Fresh pesto sauce, mozzarella, cherry tomatoes, and arugula, offering a bold and herbaceous flavor.</p>
              </div>
            </div>
            <div className="carousel-item" >
              <img src="/images/pizza5.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h2>Manato Pizza</h2>
                <p className="fs-5">A unique blend of spicy pepperoni, roasted peppers, and ricotta, topped with a tangy tomato sauce</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;