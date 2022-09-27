import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../images/lottie/evolve.json";
import svg1 from "../images/svg/evolve-icon.svg";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const StickyText = () => {
  return (
    <stick-list>
      <stick-item>
        <stick-letter>01</stick-letter>
        <stick-content>
          <stick-title>Evolve</stick-title>
          <stick-text>
            Programa de 360° donde evaluamos a tu empresa en todos los niveles.
            Eleva las habilidades de todos tus colaboradores, desarrolla su
            adaptabilidad, confianza en sí mismos creando un impacto positivo
            para generar mejores resultados en la empresa con un modelo de
            diversidad e inclusión.
          </stick-text>
        </stick-content>
      </stick-item>
      <div className="company-grid-container">
        <div className="flex-column">
          <div className="icon-container">
            {/* <img src={svg1} alt="svg" /> */}
          </div>
          <div className="grid">
            <h5>Dirigido a</h5>
            <p>Todos los niveles de empresa</p>
          </div>
        </div>
        <div className="flex-column">
          <div className="icon-container">
            {/* <img src={svg1} alt="svg" /> */}
          </div>
          <div className="grid">
            <h5>Modalidad</h5>
            <p>OnLive</p>
          </div>
        </div>
        <div className="flex-column">
          <div className="icon-container">
            {/* <img src={svg1} alt="" /> */}
          </div>
          <div className="grid">
            <h5>Duración</h5>
            <p>18 horas de formación práctica</p>
          </div>
        </div>
        <div className="flex-column">
          <div className="icon-container">
            {/* <img src={svg1} alt="" /> */}
          </div>
          <div className="grid">
            <h5>Temática</h5>
            <p>Nuevas formas de trabajo y productividad</p>
          </div>
        </div>
      </div>
      {/* <div>
        <Lottie speed={0.3} options={defaultOptions} height={400} width={400} />
      </div> */}
      <stick-item>
        <stick-letter>02</stick-letter>
        <stick-content>
          <stick-title>Game Changers</stick-title>
          <stick-text>
            Control emocional para liderar con ejemplo, foco en capacidades
            estrategicas enfocadas en un mindset de diversidad, inclusión y
            equidad.
          </stick-text>
        </stick-content>
      </stick-item>
      <stick-item>
        <stick-letter>03</stick-letter>
        <stick-content>
          <stick-title>Rising Stars</stick-title>
          <stick-text>
            Desarrollo personal con foco en liderazgo a través de la influencia
            y trabajo en equipo. Adaptabilidad al cambio y creatividad.
          </stick-text>
        </stick-content>
      </stick-item>
      <stick-item>
        <stick-letter>04</stick-letter>
        <stick-content>
          <stick-title>Young Promises</stick-title>
          <stick-text>
            Foco en desarollo personal y comunicación asertiva para plantear una
            base solida de confianza en si mismo y detonar su potencial.
          </stick-text>
        </stick-content>
      </stick-item>
    </stick-list>
  );
};

export default StickyText;
