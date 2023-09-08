import "./Header.scss";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo"></div>
        <div className="header__nav">
          <div className="header__nav-item dropdown">TICKETS & MEMBERSHIPS</div>
          <div className="header__nav-item dropdown">PLAN YOUR VISIT</div>
          <div className="header__nav-item dropdown">
            EXHIBITS & EXPERIENCES
          </div>
          <div className="header__nav-item dropdown">GROUPS</div>
          <div className="buy-ticket">BUY A TICKET</div>
        </div>
      </header>
    </>
  );
}

export default Header;
