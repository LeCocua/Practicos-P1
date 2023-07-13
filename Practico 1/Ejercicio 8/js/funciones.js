window.addEventListener("load", inicio);

function inicio(){
    console.log("Carga");
    document.querySelector("#btnEj8").addEventListener("click", ej8);
}

function ej8(){
    let number1 = parseInt(document.querySelector("#valor1Ej8").value);
    let number2 = parseInt(document.querySelector("#valor2Ej8").value);
    let number3 = parseInt(document.querySelector("#valor3Ej8").value);
    let resultado = (number1 + number2) - number3
    document.querySelector("#pResultadovaloresEj8").innerHTML = "El resultado es: " + resultado
}