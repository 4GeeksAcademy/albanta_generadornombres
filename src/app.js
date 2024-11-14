/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const pronombre = ["el", "nuestro", "vuestro"];
  const adjetivo = ["gran", "fantástico", "increíble"];
  const nombre = ["jugador", "profesor", "programador"];

  const combinaciones = [];

  for (let i = 0; i < pronombre.length; i++) {
    for (let j = 0; j < adjetivo.length; j++) {
      for (let k = 0; k < nombre.length; k++) {
        combinaciones.push(`${pronombre[i]} ${adjetivo[j]} ${nombre[k]}`);
      }
    }
  }

  console.log(combinaciones);
};
