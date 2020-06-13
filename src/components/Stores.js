import React, { useState, useEffect } from "react";
import Aside from "./layout/Aside";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Modal from "./layout/Modal";
import axios from "axios";
import Slideshow from "./layout/SlideShow";

const Stores = (props) => {
  const [stores, setStores] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState([]);

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
      ["/static/img/Panos_pizza.png", "/static/img/panos_pizza_1.png"],
      ["/static/img/Sbarro.png", "/static/img/sbarro_pizza.png"],
      ["/static/img/pizzeria_camion.png", "/static/img/pizzeria_camion_pizza.png"],
      ["/static/img/voglia_di_pizza.png", "/static/img/vogliadipizza_pizza.png"],
      ["/static/img/stroller_pizza.png", "/static/img/stroller_pizza_1.png"]
    ];
    const stores = data.map((item, index) =>
      Object.assign(item, { img: pictures[index] })
    );
    setStores(stores);
    setSearchResults(stores);
  };

  const loadStore = (store) => {
    setModalShow(true);
    setModalData(store);
  };

  const closeModal = () => {
    setModalShow(false);
    setModalData([]);
  };

  window.onclick = (e) => {
    const modal = document.querySelector('.modal');
    if (e.target === modal) {
      setModalShow(false);
      setModalData([]);
    }
  } 

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
                <div className="store" key={store.id} onClick={() => loadStore(store)}>
                  <Slideshow img1={store.img[0]} img2={store.img[1]} />
                  <div>
                    <p>{store.name}</p>
                    <small>{store.address}</small>
                  </div>
                </div>
              ))}
            </div>
            <Modal state={modalShow} data={modalData} onClose={closeModal}/>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Stores;
