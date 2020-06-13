import React, { useState, useEffect } from "react";
import Aside from "./layout/Aside";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import axios from "axios";

const Stores = (props) => {
  const [stores, setStores] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      props.history.push("/");
    }
    fetchData();
    // eslint-disable-next-line
  }, []);
  
  useEffect(() => {
    const results = stores.filter(store =>
      store.name.toLowerCase().includes(searchValue)
    );
    setSearchResults(results);
    // eslint-disable-next-line
  }, [searchValue])

  const fetchData = async () => {
    const url =
      "https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json";
    const request = await axios(url);
    const data = request.data.response.stores;
    const pictures = [
      "/static/img/Panos_pizza.png",
      "/static/img/Sbarro.png",
      "/static/img/pizzeria_camion.png",
      "/static/img/voglia_di_pizza.png",
      "/static/img/stroller_pizza.png",
    ];
    const stores = data.map((item, index) =>
      Object.assign(item, { img: pictures[index] })
    );
    setStores(stores);
    setSearchResults(stores);
  };

  const loadStore = (store) => {
    console.log(store);
  };

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper">
      <Aside img={"/static/img/Logo.png"} />
      <div className="mainWrapper">
        <div className="containerWrapper">
          <Header />
          <div className="sitesWrapper">
            <div>
              <div className="titleWrapper">
                <h2>Tiendas</h2>
                <span>Escoge tu pizzeria favorita</span>
              </div>
              <div>
                <input
                  type="text"
                  name="search"
                  value={searchValue}
                  onChange={handleChangeSearch}
                  placeholder="Buscar"
                />
              </div>
            </div>
            <div className="gridWrapper">
              {searchResults.map((store) => (
                <div key={store.id} onClick={() => loadStore(store)}>
                  <img src={store.img} alt="Imágen de tienda" />
                  <div>
                    <p>{store.name}</p>
                    <small>{store.address}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Stores;
