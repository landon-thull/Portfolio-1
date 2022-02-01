import * as React from "react";
import "./Styles/Header.css";

export default function Header() {
  return (
    <header className="header-main">
      <nav className="nav-main">
        <a className="active nav-item">Home</a>
        <a href="#about" className="active nav-item">
          About
        </a>
        <a href="#portfolio" className="active nav-item">
          Portfolio
        </a>
        <a href="#contact" className="active nav-item">
          Contact
        </a>
      </nav>
    </header>
  );
}
