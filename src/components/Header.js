import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../x.svg";
import { ReactComponent as MenuIcon } from "../menu.svg";
import Logo from "../logo.png";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
            <img className="logo" src={Logo} />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#" className="all-btn">
              ABOUT
            </a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#" className="all-btn">
              NOMINEES
            </a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#" className="all-btn">
              VOTE
            </a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="#">SIGN-IN</a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="" className="sign-up">
              SIGN-UP
            </a>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#" className="all-btn">
            SIGN-IN
          </a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="" className="all-btn">
            SIGN-UP
          </a>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
