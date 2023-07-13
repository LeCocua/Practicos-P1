window.addEventListener("load", inicio);

function inicio() {
    console.log("Carga");
    document.querySelector("#btnEj9").addEventListener("click", ej9);
};

function ej9() {
    let number1 = parseInt(document.querySelector("#valor1Ej9").value);
    let number2 = parseInt(document.querySelector("#valor2Ej9").value);
    let number3 = parseInt(document.querySelector("#valor3Ej9").value);
    let resultado = (number1 * number1) - (number2 + number3);
    document.querySelector("#pResultadoEj9").innerHTML = "El resultado es: " + resultado;
};