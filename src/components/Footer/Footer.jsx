import "./Footer.scss";
import { NavLink, Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer__section">
        <div className="footer">
          <div className="footer__container">
            <div className="footer__container-item">
              <div className="footer__item-header">About Us</div>
              <div className="footer__item-text">About</div>
              <div className="footer__item-text">Media</div>
              <div className="footer__item-text">Gift Shop</div>
              <div className="footer__item-text">Careers</div>
            </div>
            <div className="footer__container-item">
              <div className="footer__item-header">Help & Support</div>
              <div className="footer__item-text">Contact Us</div>
              <div className="footer__item-text">FAQs</div>
              <div className="footer__item-text">Accessibility</div>
              <div className="footer__item-text">Policies</div>
            </div>
          </div>
          <div className="footer__container">
            <div className="footer__container-item">
              <div className="footer__item-header">Find Us</div>
              <div className="footer__item-text">Directions</div>
            </div>
            <div className="footer__container-item">
              <div className="footer__item-header">Address & Phone Number</div>
              <div className="footer__item-text">1234 Elm Street</div>
              <div className="footer__item-text">Fictionville, FA 12345</div>
              <div className="footer__item-text">778-123-4567</div>
            </div>
          </div>
          <div className="footer__container">
            <div className="footer__container-item">
              <div className="footer__item-header">Connect With Us</div>
              <div className="footer__item-social-container">
                <div className="footer__item-social instagram"></div>
                <div className="footer__item-social youtube"></div>
                <div className="footer__item-social twitter"></div>
                <div className="footer__item-social facebook"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
