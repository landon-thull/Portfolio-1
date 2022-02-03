import * as React from "react";

export default function Dropdown() {
  return (
    <ul className="dropdown-list">
      <li className="dropdown-item">
        <a href="#home">HOME</a>
      </li>
      <li className="dropdown-item">
        <a href="#about">ABOUT</a>
      </li>
      <li className="dropdown-item">
        <a href="#portfolio">PORTFOLIO</a>
      </li>
      <li className="dropdown-item">
        <a href="#contact">CONTACT</a>
      </li>
    </ul>
  );
}
