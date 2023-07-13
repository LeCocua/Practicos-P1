window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnAcumularEj15").addEventListener("click", ej15);
    document.querySelector("#btnResultadoEj15").addEventListener("click", ej15p);
};

let acumulador = 0;
let contador = 0;
function ej15() {
    acumulador += parseInt(document.querySelector("#valorEj15").value);
    console.log("acumulador",acumulador);
    contador += 1;
    console.log("contador",contador);
    
}

function ej15p() {
    document.querySelector("#resultadoacumuladoej15").innerHTML += "Resultado: " + acumulador + "<br>";
};
