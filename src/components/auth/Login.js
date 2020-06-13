import React, { useState, useEffect } from "react";
import Aside from "../layout/Aside";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Login = (props) => {
  useEffect(() => {
    if (localStorage.getItem("user")) {
      props.history.push("/stores");
    }
    // eslint-disable-next-line
  }, []);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin(user);
    setUser({ email: "", password: "" });
  };

  const userLogin = async (user) => {
    try {
      const url =
        "https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json";
      const request = await axios(url);
      const validUser = request.data.response.users.find(
        (element) =>
          element.email === user.email && element.password === user.password
      );
      if (validUser) {
        Swal.fire({
          icon: "success",
          title: `Bienvenido ${validUser.name}!`,
          text: "Login correcto!",
        });
        localStorage.setItem("user", validUser.email);
        props.history.push("/stores");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Datos invalidos!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Usuario"
                value={email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={handleChange}
              />
            </div>
            <Link to={"/"}>¿Olvidaste tu contraseña?</Link>
            <button>Iniciar sesión</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
