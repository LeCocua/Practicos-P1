window.addEventListener("load", inicio);

function inicio(){
    console.log("Carga Ok");
    document.querySelector("#btnEj3").addEventListener("click", ej3)
};
function ej3(){
    let numero1 = parseInt(document.querySelector("#valor1Ej3").value);
    let numero2 = parseInt(document.querySelector("#valor2Ej3").value);
    let numero3 = parseInt(document.querySelector("#valor3Ej3").value);
    
    let Suma = numero1 + numero2 + numero3;
    console.log(Suma)

    document.querySelector("#pResultadoEj3").innerHTML = "La suma es " + Suma;
};