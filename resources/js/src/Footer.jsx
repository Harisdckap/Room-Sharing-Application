import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-2">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              We provide the best platform for renting rooms and PGs. Our aim is to make your search for a home easier and more convenient.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/listings" className="text-white text-decoration-none">All Listings</Link>
              </li>
              <li>
                <Link to="/rooms" className="text-white text-decoration-none">Rooms</Link>
              </li>
              <li>
                <Link to="/pg" className="text-white text-decoration-none">PG</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: support@rentapp.com</p>
            <p>Phone: +123 456 7890</p>
            <div className="d-flex mt-2">
              <a href="#" className="me-3 text-white">
                <img src="path/to/facebook-icon.png" alt="Facebook" className="img-fluid" style={{ width: '24px' }} />
              </a>
              <a href="#" className="me-3 text-white">
                <img src="path/to/twitter-icon.png" alt="Twitter" className="img-fluid" style={{ width: '24px' }} />
              </a>
              <a href="#" className="text-white">
                <img src="path/to/instagram-icon.png" alt="Instagram" className="img-fluid" style={{ width: '24px' }} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 Room Rent Application. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
