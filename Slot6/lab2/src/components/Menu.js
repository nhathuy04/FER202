import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
  return (
    <div className="col-lg-12 mb-5">
      <div className="container">
        <div className="row">
          <h2 className="text-white">Our Menu</h2>
          <div className="col-md-3">
            <div className="card position-relative border-0">
              <img src="./images/pizza3.jpg" className="card-img-top" alt="Margherita Pizza" />
              <span className="position-absolute top-0 start-0 bg-warning text-dark px-3 py-1">SALE</span>
              <div className="card-body">
                <h5 className="card-title">Margherita Pizza</h5>
                <p className="card-text">
                  <del className="text-muted">$40.00</del>{' '}
                  <span className="text-warning">$31.40</span>
                </p>
                <a href="#" className="form-control btn btn-dark">Buy</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0">
              <img src="./images/pizza4.jpg" className="card-img-top" alt="Mushroom Pizza" />
              <div className="card-body">
                <h5 className="card-title">Mushroom Pizza</h5>
                <p className="card-text">$25.00</p>
                <a href="#" className="form-control btn btn-dark">Buy</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card position-relative border-0">
              <img src="./images/pizza2.jpg" className="card-img-top" alt="Hawaiian Pizza" />
              <span className="position-absolute top-0 start-0 bg-warning text-dark px-3 py-1">NEW</span>
              <div className="card-body">
                <h5 className="card-title">Hawaiian Pizza</h5>
                <p className="card-text">$30.00</p>
                <a href="#" className="form-control btn btn-dark">Buy</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card position-relative border-0">
              <img src="./images/pizza1.webp" className="card-img-top" alt="Pesto Pizza" />
              <span className="position-absolute top-0 start-0 bg-warning text-dark px-3 py-1">SALE</span>
              <div className="card-body">
                <h5 className="card-title">Pesto Pizza</h5>
                <p className="card-text">
                  <del className="text-muted">$40.00</del>{' '}
                  <span className="text-warning">$31.40</span>
                </p>
                <a href="#" className="form-control btn btn-dark">Buy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;