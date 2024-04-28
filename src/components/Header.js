import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";
import "./Header.css";
function Header() {
  return (
    <div class="header">
      <div class="header_left">
        <div class="title_name">NELSON LU</div>
        <div class="subtitle">Software Engineer</div>
      </div>
      <div class="header_right">
        <Link class="link" to="/">
          About
        </Link>
        <Link class="link" to="/projects">
          Projects
        </Link>
      </div>
    </div>
  );
}

export default Header;
