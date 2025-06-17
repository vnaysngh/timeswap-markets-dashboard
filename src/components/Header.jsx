import React from "react";
import "../styles/Header.css";

const Header = () => (
  <header className="dashboard-header">
    <div className="dashboard-title">Timeswap Pool Dashboard</div>
    <nav className="dashboard-navbar">
      <a href="#">Home</a>
      <span>|</span>
      <a href="#">Pools</a>
      <span>|</span>
      <a href="#">About</a>
    </nav>
  </header>
);

export default Header;
