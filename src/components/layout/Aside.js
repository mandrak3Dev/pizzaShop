import React from "react";

const Aside = (props) => {
  return (
    <aside className="asideWrapper">
      <img src="/static/img/Pizza.png" alt="Imágen de pizza" />
      {props.img ? <img src={props.img} alt="Logo" /> : null}
    </aside>
  );
};

export default Aside;
