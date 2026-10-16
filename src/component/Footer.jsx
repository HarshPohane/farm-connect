import { Link } from "react-router-dom";
import logo from "./icon-images/connect.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img
              src={logo}
              alt="FarmConnect Logo"
            />

            <h2>
              Farm<span>Connect</span>
            </h2>
          </Link>

          <p>
            Connecting farmers with skilled workers,
            modern equipment and reliable transportation.
            Making farming easier, smarter and better.
          </p>

          <div className="footer-social">
            <a
              href="https://www.instagram.com/YOUR_INSTAGRAM_ID/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img
                src="/images/instagram.png"
                alt="Instagram"
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/workers">Find Workers</Link>
          <Link to="/equipment">Rent Equipment</Link>
          <Link to="/transport">Transport</Link>
          <Link to="/bookings">My Bookings</Link>
        </div>

        {/* Contact Information */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <div className="contact-item">
            <img src="/images/location.png" alt="Location" />
            <span>Nagpur, Maharashtra, India</span>
          </div>

          <div className="contact-item">
            <img src="/images/phone.png" alt="Phone" />
            <a href="tel:+917744006306">
              +91 7744006306
            </a>
          </div>

          <div className="contact-item">
            <img src="/images/email.png" alt="Email" />
            <a href="mailto:harshpohane4@gmail.com">
              harshpohane4@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <img src="/images/instagram.png" alt="Instagram" />
            <a
              href="https://www.instagram.com/YOUR_INSTAGRAM_ID/"
              target="_blank"
              rel="noreferrer"
            >
              @YOUR_INSTAGRAM_ID
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} FarmConnect.
          All rights reserved.
        </p>

        <p className="footer-tagline">
          Growing Together, Farming Smarter.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
