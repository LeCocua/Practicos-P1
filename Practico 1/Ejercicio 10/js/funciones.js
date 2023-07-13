window.addEventListener("load", inicio);

function inicio() {
    console.log("Carga OK");
    document.querySelector("#btnEj10").addEventListener("click", ej10);
};

function ej10() {
    let number1 = parseInt(document.querySelector("#importeEj10").value);
    let number2 = parseInt(document.querySelector("#recargaEj10").value);
    let resultado = (number2 * number1 / 100) + number1

    document.querySelector("#pResultadoEj10").innerHTML = "Sobrecarga: " + resultado
};