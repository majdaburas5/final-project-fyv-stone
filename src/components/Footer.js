import "../css/Footer.css";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className="footer-left">
        <div className="footer-row">
          <h4>Get In Touch</h4>
        </div>
        <div className="footer-row">
          <p><i class="fa-solid fa-location-dot"></i> Phone: 054-241-5860</p>
        </div>
        <div className="footer-row">
          <p> <i className="fa-solid fa-envelope"></i> Email: FYV@stone.com</p>
        </div>
        <div className="footer-row">
          <p><i class="fa-solid fa-location-dot"></i> Address: 123 Street, Nazareth, Israel</p>
        </div>
      </div>
      <div className="footer-middle">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      
    
      </div>
      <hr className="footer-divider"/>
      <div className="copy-right"><i class="fa-regular fa-copyright"></i> Premium Stone. All Rights Reserved.</div>
    </footer>
    
  );
}

export default Footer;
