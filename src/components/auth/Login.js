import React from "react";
import Aside from "../layout/Aside";
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className="wrapper">
      <Aside />
      <div className="mainWrapper">
        <div className="loginWrapper">
          <div>
            <img src="/static/img/Login-Best-Pizza.png" alt="Logo del sitio" />
          </div>
          <div>
            <h1>Bienvenido</h1>
            <h3>A las mejores pizzas del país</h3>
          </div>
          <form>
            <div>
              <input type="text" name="user" placeholder="Usuario" />
              <input type="text" name="password" placeholder="Contraseña" />
            </div>
            <Link to={'/'}>¿Olvidaste tu contraseña?</Link>
            <button>Iniciar sesión</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
