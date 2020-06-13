import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <Link to={"/"}>
        <div>
          <img src="/static/img/Best Pizza.png" alt="" />
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
