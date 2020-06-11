import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Link to={'/'}>
          <i class="fab fa-facebook-square"></i>
        </Link>
        <Link to={'/'}>
          <i class="fab fa-instagram"></i>
        </Link>
      </div>
      <div>
        <img src="/static/img/Best Pizza.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
