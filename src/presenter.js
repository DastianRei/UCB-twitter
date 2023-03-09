const titulo = document.querySelector("#titulo");
const detalle = document.querySelector("#detalle");
const formulario = document.querySelector("#formulario");

const Post = {
  titulo: "",
  detalle: "",
  fecha: "",
};

let Publicaciones = [];

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  if (titulo.value === "") {
    alert("No es posible publicar un post sin título");
    return;
  } else if (titulo.value <= 50 && detalle.value <= 150) {
    Post.titulo = titulo.value;
    Post.detalle = detalle.value;
    Post.fecha = new Date();
    console.log(Post);
  }
}
