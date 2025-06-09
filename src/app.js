import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Generador de excusas
window.onload = () => {
  const subjects = ["Mi perro", "Mi abuelita", "El mensajero", "El águila"];
  const actions = ["comió", "orinó", "aplastó", "rompió"];
  const objects = ["mi tarea", "mi móvil", "mi carro", "el mueble"];
  const times = [
    "después de clases",
    "cuando estaba durmiendo",
    "mientras hacía ejercicio",
    "durante mi almuerzo",
    "mientras estaba orando"
  ];

  const getRandomItem = array => array[Math.floor(Math.random() * array.length)];

  const generateExcuse = () => {
    const excuse = `${getRandomItem(subjects)} ${getRandomItem(actions)} ${getRandomItem(objects)} ${getRandomItem(times)}.`;
    const excuseElement = document.querySelector("#excuse");
    if (excuseElement) {
      excuseElement.textContent = excuse;
    }
  };

  generateExcuse();
  console.log("Excusa generada automáticamente al cargar la página.");
};
