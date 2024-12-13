
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section logo-section">
            <div className="apple-logo">
              <img
                src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/01/logo.svg"
                alt="Logo"
              />
            </div>
            <p>
              Konec sit amet nibh vestibulum ipsum cursus rhoncus. Duis ac
              tortor gravida ligula eleifend finibus sed vel tellus.
            </p>
            <h3>Social Media</h3>
            <div className="social-media-icon">
              <a href="" className="expert-icon">
                <FaInstagram />
              </a>
              <a href="" className="expert-icon">
                <FaFacebookF />
              </a>
              <a href="" className="expert-icon">
                <FaYoutube />
              </a>
              <a href="" className="expert-icon">
                <FaXTwitter />
              </a>
            </div>
          </div>

          <div className="footer-section contact-section">
            <h3>Get In Touch</h3>
            <p>
              Manzana María Elena Leiva <br /> s/n., Vitoria, Can 58948
            </p>
            <p>Call Us:</p>
            <p>+00 (0) 123 456 789</p>
            <p>Email:</p>
            <p> admin@example.com</p>
          </div>

          <div className="footer-section links-section">
            <h3>Useful Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>History</li>
              <li>Shipping & Returns</li>
              <li>Refund Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="footer-section services-section">
            <h3>Customer Services</h3>
            <ul>
              <li>Communication App</li>
              <li>Tour A School</li>
              <li>Health & Safety</li>
              <li>Our Curriculum</li>
              <li>Our Educators</li>
            </ul>
          </div>

          <div className="footer-section newsletter-section">
            <h3>Subscribe to Our Newsletter</h3>
            <p>
              Urna porttitor rhoncus dolor purus.Pellentesque massa placerat
              duis.
            </p>
            <input type="email" placeholder="Enter Your Email ID" />
            <button>Subscribe Now</button>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="footer-container">
        <div>
          <p>© 2023 Wedesigntech. All Rights Reserved.</p>
        </div>
        <div className="footer-icons">
          <img
            src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/01/payment-icon-1.png"
            alt=""
            className="footer-icon"
          />
          <img
            src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/01/payment-icon-7.png"
            alt=""
            className="footer-icon"
          />
          <img
            src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/01/payment-icon-6.png"
            alt=""
            className="footer-icon"
          />
          <img
            src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/01/payment-icon-5.png"
            alt=""
            className="footer-icon"
          />
          <img
            src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/01/payment-icon-4.png"
            alt=""
            className="footer-icon"
          />
          <img
            src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/01/payment-icon-3.png"
            alt=""
            className="footer-icon"
          />
          <img
            src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/01/payment-icon-2.png"
            alt=""
            className="footer-icon"
          />
        </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
