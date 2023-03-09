import { validarFormulario } from "./operaciones";

const titulo = document.querySelector("#titulo");
const detalle = document.querySelector("#detalle");
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (event) =>{
  event.preventDefault();
  validarFormulario(titulo.value,detalle.value);
});
