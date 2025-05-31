import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingForm = () => {
  return (
    <div className="col-lg-12 mb-5">
      <div className="container">
        <div className="row">
          <h2 className="text-center text-white">Book Your Table</h2>
          <div className="row mb-3">
            <div className="col">
              <input type="text" className="form-control" placeholder="Your name *" aria-label="Your name" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Your email *" aria-label="Your email" />
            </div>
            <div className="col mb-5">
              <select id="inputState" className="form-select">
                <option selected>Select a Service</option>
                <option>...</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <textarea className="form-control" rows="5" placeholder="Please write your comment" aria-label="Please write your comment"></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input type="submit" className="btn btn-warning text-white" value="Send Message" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;