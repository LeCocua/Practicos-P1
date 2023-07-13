window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnEj13").addEventListener("click", ej13);
};

let counter = 0

function ej13() {
    counter += 1
    document.querySelector("#pResultadoContador").innerHTML = "Contador: " + counter
}