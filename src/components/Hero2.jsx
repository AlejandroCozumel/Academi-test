import React from "react";
import Dalia from "../images/Dalia.png";

const Hero2 = () => {
  return (
    <section className="hero">
      <div className="up">
        <h1>
          Potencia tus life skills con <span>Dalia.</span>
        </h1>
        <button>Contáctanos </button>
      </div>
      <div className="bottom">
        <div className="image">
          <img className="imagen" src={Dalia} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
