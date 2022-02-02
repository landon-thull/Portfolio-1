import * as React from "react";
import "./Styles/Header.css";

export default function Navbar() {
  function dropdownToggle() {}
  return (
    <header className="header-main">
      <h2 className="name">Landon Thull</h2>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home">HOME</a>
          </li>
          <li className="nav-item">
            <a href="#about">ABOUT</a>
          </li>
          <li className="nav-item">
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li className="nav-item">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
