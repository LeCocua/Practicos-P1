window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnEj12").addEventListener("click", ej12);

};

function ej12() {
    let numero1 = parseFloat(document.querySelector("#pesoEj12").value);
    let numero2 = parseFloat(document.querySelector("#estaturaEj12").value);
    let totalIMC = numero1 / (numero2 * numero2)
    document.querySelector("#resultadoIMCej12").innerHTML = "IMC = " + totalIMC
}