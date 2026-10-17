import { Link } from "react-router-dom";
import logo from "./icon-images/connect.png";
import instagram from "./icon-images/instagram.png";
import locationPin from "./icon-images/location-pin.png";
import mobile from "./icon-images/mobile.png";
import mail from "./icon-images/mail.png";
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
              Farm-<span>Connect</span>
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
              <img src={instagram} alt="Instagram" />
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
            <img src={locationPin} alt="Location" />
            <span>Nagpur, Maharashtra, India</span>
          </div>

          <div className="contact-item">
            <img src={mobile} alt="Phone" />
            <a href="tel:+917744006306">
              +91 7744006306
            </a>
          </div>

          <div className="contact-item">
            <img src={mail} alt="Email" />
            <a href="mailto:harshpohane4@gmail.com">
              harshpohane4@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <img src={instagram} alt="Instagram" />
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
      </div>

    </footer>
  );
}

export default Footer;
