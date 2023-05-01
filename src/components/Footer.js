import "../css/Footer.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Footer({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn ? (
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-left">
              <div className="footer-row">
                <h4>Get In Touch</h4>
              </div>
              <div className="footer-row">
                <p>
                  <i className="fa-solid fa-mobile-screen-button"></i> Phone:
                  054-241-5860
                </p>
              </div>
              <div className="footer-row">
                <p>
                  {" "}
                  <i className="fa-solid fa-envelope"></i> Email: FYV@stone.com
                </p>
              </div>
              <div className="footer-row">
                <p>
                  <i className="fa-solid fa-location-dot"></i> Address: 123
                  Street, Nazareth, Israel
                </p>
              </div>
            </div>
            <div className="footer-middle">
              <h4>Quick Links</h4>
              <ul>
                <Link to="/" className="products">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="products">
                  <li>About Us</li>
                </Link>
                <Link to="/marbles" className="products">
                  <li>Products</li>
                </Link>
                <Link to="/contact" className="products">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
          </div>
          <hr className="footer-divider" />
          <div className="copy-right">
            <i className="fa-regular fa-copyright"></i> Premium Stone. All
            Rights Reserved.
          </div>
        </footer>
      ) : (
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-left">
              <div className="footer-row">
                <h4>Get In Touch</h4>
              </div>
              <div className="footer-row">
                <p>
                  <i className="fa-solid fa-mobile-screen-button"></i> Phone:
                  054-241-5860
                </p>
              </div>
              <div className="footer-row">
                <p>
                  {" "}
                  <i className="fa-solid fa-envelope"></i> Email: FYV@stone.com
                </p>
              </div>
              <div className="footer-row">
                <p>
                  <i className="fa-solid fa-location-dot"></i> Address: 123
                  Street, Nazareth, Israel
                </p>
              </div>
            </div>
            <div className="footer-middle">
              <h4>Quick Links</h4>
              <ul>
                <Link to="/" className="products">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="products">
                  <li>About Us</li>
                </Link>
                <Link to="/marbles" className="products">
                  <li>Products</li>
                </Link>
                <Link to="/contact" className="products">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
          </div>
          <hr className="footer-divider" />
          <div className="copy-right">
            <i className="fa-regular fa-copyright"></i> Premium Stone. All
            Rights Reserved.
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
