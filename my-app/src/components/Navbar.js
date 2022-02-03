import * as React from "react";
import { useState, useEffect } from "react";
import "./Styles/Header.css";
import Dropdown from "./Dropdown.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const dropdownOpener = () => {
    if (open === true) {
      return <Dropdown />;
    } else {
      return <div></div>;
    }
  };

  return (
    <header className="header-main">
      <h2 className="name">Landon Thull</h2>
      <div
        className="menu-icon"
        onClick={() => {
          setOpen(!open);
          console.log(open);
        }}
      >
        <li className="menu-bar"></li>
        <li className="menu-bar"></li>
        <li className="menu-bar"></li>
      </div>
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
        {open && <Dropdown />}
      </nav>
    </header>
  );
}
