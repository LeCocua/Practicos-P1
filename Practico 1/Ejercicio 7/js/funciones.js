window.addEventListener("load", inicio);

function inicio(){
    console.log("Carga Ok");
    document.querySelector("#btnEj7").addEventListener("click", ej7);
}

function ej7(){
    let numero1 = parseInt(document.querySelector("#valor1Ej7").value);
    let numero2 = parseInt(document.querySelector("#valor2Ej7").value)
    let calcular = numero1 % numero2
    document.querySelector("#restovalorEj7").innerHTML = "Resto: " + calcular
}