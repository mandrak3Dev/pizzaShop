import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <Link to={"/"} className="active">
          <img src="/static/img/ic_contrase§a.png" alt="" />
          <span>Salir</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={"/"} className="active">
              <span>Pizzerias</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
