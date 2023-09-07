import "./Header.scss";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo"></div>
        <div className="header__nav">
          <div className="header__nav-item">TICKETS & MEMBERSHIPS</div>
          <div className="header__nav-item">PLAN YOUR VISIT</div>
          <div className="header__nav-item">EXHIBITS & EXPERIENCES</div>
          <div className="header__nav-item">GROUPS</div>
          <div className="header__nav-item buy-ticket">BUY A TICKET</div>
        </div>
      </header>
    </>
  );
}

export default Header;
