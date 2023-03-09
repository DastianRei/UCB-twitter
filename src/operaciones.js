const Post = {
  titulo: "",
  detalle: "",
  fecha: "",
};

let Publicaciones = [];

function validarFormulario(titulo, detalle) {
  if (titulo === "") {
    alert("No es posible publicar un post sin título");
    return;
  } else if (titulo <= 50 && detalle <= 150) {
    Post.titulo = titulo;
    Post.detalle = detalle;
    Post.fecha = new Date();
    agregarPost();
  }
}

function agregarPost() {
  Publicaciones.push({ ...Post });
  mostrarPublicaciones();
  formulario.reset();
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

export { validarFormulario };
