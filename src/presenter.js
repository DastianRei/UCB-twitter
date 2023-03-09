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
    agregarPost();
  }
}

function agregarPost() {
  Publicaciones.push({ ...Post });
  mostrarPublicaciones();
  formulario.reset();
  liberarObjeto();
  console.log(Publicaciones);
}
function liberarObjeto() {
  (Post.titulo = ""), (Post.detalle = ""), (Post.fecha = "");
}
function mostrarPublicaciones() {
  reload();
  const divPublicaciones = document.querySelector("#publicaciones");
  Publicaciones.forEach((post) => {
    const { titulo, detalle, fecha } = post;
    const parrafo = document.createElement("p");
    parrafo.textContent = `${titulo} - ${detalle} `;
    parrafo.dataset.id = fecha;
    const hr = document.createElement("hr");
    divPublicaciones.appendChild(parrafo);
    divPublicaciones.appendChild(hr);
  });
}

function reload() {
  const divPublicaciones = document.querySelector("#publicaciones");
  while (divPublicaciones.firstChild) {
    divPublicaciones.removeChild(divPublicaciones.firstChild);
  }
}
