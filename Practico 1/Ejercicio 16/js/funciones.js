window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnEj16").addEventListener("click", ej16);
};

function ej16() {
    let numero1 = parseInt(document.querySelector("#ganadoEj16").value);
    let numero2 = parseInt(document.querySelector("#empatadosEj16").value);
    let resultado = (numero1 * 3) + (numero2 * 1);
    document.querySelector("#pResultadopuntosEj16").innerHTML = "Cantidad de Puntos: " + resultado;
};