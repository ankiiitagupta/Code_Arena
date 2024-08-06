
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   
    return (
      <header className="header">
        <Link to="/" id="top" className="logo">Code Arena</Link>
        <nav className="navbar">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" smooth to="/#about">About Us</Link>
          <Link className="nav-link" smooth to="/#about">Problems</Link>
          <Link className="nav-link" smooth to="/#footer">Contact Us</Link>
          <Link className="nav-link" to="/login">
            <button className="login-but">Login</button>
          </Link>
        
        </nav>
      </header>
    );
  };
  
export default Header;