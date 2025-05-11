import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
      function generarExcusa (){
      let sujeto= ["Mi Perro", "Mi Abuelita" , "El Mensajero" , "El Aguila" ];
      let accion= ["Comio", "Orino", "Aplasto", "Rompio"];
      let objeto= ["Mi tarea" , "Mi Movil" , "Mi Carro", "El Mueble"];
      let momento=["Despues de Clases" , "Cuando estaba durmiendo" , "Mientras hacia ejercicio" , "Durante mi almuerzo" , "Mientras estaba orando"];

      let personas = sujeto [Math.floor(Math.random()*sujeto.length)];
      let reaccion = accion [Math.floor(Math.random()*accion.length)];
      let instrumento = objeto [Math.floor(Math.random()*objeto.length)];
      let cuando = momento [Math.floor(Math.random()*momento.length)];

      let excusa = `${personas} ${reaccion} ${instrumento} ${cuando}`;

      document.querySelector("#excuse").innerHTML = excusa
    }
    generarExcusa()
  console.log("Hello Rigo from the console!");
}
