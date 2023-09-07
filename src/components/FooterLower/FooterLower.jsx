import "./FooterLower.scss";
import { NavLink, Link } from "react-router-dom";

function FooterLower() {
  return (
    <>
      <div className="footer-section">
        <div className="footer-lower">
          <div className="footer-lower__logo"></div>
          <div className="footer-lower__rights">© 2023 All Rights Reserved</div>
        </div>
      </div>
    </>
  );
}

export default FooterLower;
