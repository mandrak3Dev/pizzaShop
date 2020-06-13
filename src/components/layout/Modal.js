import React from "react";

const Modal = (props) => {
  const { state, data, onClose } = props;

  return (
    <>
      {state ? (
        <div className="modal">
          <div>
            <span onClick={onClose}>&times;</span>
            <div>
              <div>
                <div>
                  <h3>{data.name}</h3>
                  <span>{data.address}</span>
                </div>
                <img src={data.img} alt="Logo de la pizzería" />
              </div>
              <div>
                <p>{data.description}</p>
                <div className="products">
                  <h4>Productos:</h4>
                  <ul>
                    {data.products.map((product) => (
                      <li key={product.id}>
                        <i className="fas fa-pizza-slice"></i><span>{product.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
