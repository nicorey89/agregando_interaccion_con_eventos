window.onload = function () {
    let body = document.querySelector("body");
    let moviesListTitulo = document.querySelector(".moviesListTitulo");
    let img = document.querySelector("img");
    let agregar = document.querySelector(".botonAgregar");

    /*  let modo = confirm('Desea modo oscuro');
  if(modo){
      body.style.backgroundColor = '#7f7f7f'
      body.classList.add('fondoMoviesList');
  } */
    img.addEventListener("mouseover", () => {
          body.style.backgroundColor = "#7f7f7f";
          body.classList.add("fondoMoviesList");
    });
    console.log(body);
    moviesListTitulo.innerHTML = "LISTADO DE PELÍCULAS";
    moviesListTitulo.style.color = "white";
    moviesListTitulo.style.backgroundColor = "teal";
    moviesListTitulo.style.padding = "20px";

    agregar.addEventListener("mouseover", () => {
          agregar.style.color = "yellow";
          agregar.style.backgroundColor = "teal";
    });
    agregar.addEventListener("mouseout", () => {
        agregar.style.color = "white";
        agregar.style.backgroundColor = "green";
  });
};