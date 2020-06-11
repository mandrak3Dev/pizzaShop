import React from "react";
import Aside from "../layout/Aside";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Restaurants = () => {
  return (
    <div className="wrapper">
      <Aside />
      <div className="mainWrapper">
        <div className="containerWrapper">
          <Header />
          <div className="sitesWrapper">
            <div className="titleWrapper">
              <h2>Tiendas</h2>
              <span>Escoge tu pizzeria favorita</span>
            </div>
            <div className="gridWrapper"></div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
