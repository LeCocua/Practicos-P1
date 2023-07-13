window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnEj14").addEventListener("click", ej14);
};

let counter = 0

function ej14() {
    counter += 3
    document.querySelector("#pRContador").innerHTML = "Contador: " + counter
}