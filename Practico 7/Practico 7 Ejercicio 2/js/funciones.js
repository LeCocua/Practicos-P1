window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnAgregar").addEventListener("click", agregarPeliculas)
}

let sistema = new Sistema();
let votos = this.contador;
function agregarPeliculas() {
    let unaPelicula = document.querySelector("#ingPelicula").value;
    let unAnho = parseInt(document.querySelector("#ingAnho").value);
    let unGenero = document.querySelector("#ingGenero").value;
    let puntaje = parseInt(document.querySelector("#ingPuntos").value);

    let pelicula = new Movie(unaPelicula, unAnho, unGenero, puntaje);

    sistema.agregarMovie(pelicula);
    console.log(sistema.obtenerListado())
};