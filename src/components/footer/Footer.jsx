import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4 className="footer-title">About</h4>
          <ul className="footer-links">
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Jobs</li>
            <li>In Press</li>
            <li>Gallery</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Support</h4>
          <ul className="footer-links">
            <li>Contact Us</li>
            <li>Online Chat</li>
            <li>WhatsApp</li>
            <li>Telegram</li>
            <li>Ticketing</li>
            <li>Call Center</li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="footer-column">
          <h4 className="footer-title">FAQ</h4>
          <ul className="footer-links">
            <li>Account</li>
            <li>Booking</li>
            <li>Payments</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      <div className="footer-container footer-social-icon">
        <div className="newsletter">
          <h4 className="footer-title">Newsletter</h4>
          <p className="footer-text">
            Don’t miss out on the exciting world of travel – subscribe now and
            embark on a journey of discovery with us.
          </p>
          <div className="email-box">
            <div className="newsletter-input">
              <div className="input-with-icon">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Enter your email" />
              </div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
        <div className="footer-social-icons">
          <span>
            <i className="fab fa-facebook"></i>
          </span>
          <span>
            <i className="fab fa-twitter"></i>
          </span>
          <span>
            <i className="fab fa-instagram"></i>
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2023 Indotravi, All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
