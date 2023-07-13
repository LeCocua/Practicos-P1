window.addEventListener("load", inicio);

function inicio(){
    alert ("Cargo ok")
    document.querySelector("#btnEj2").addEventListener("click", ej2);
};

function ej2(){
    //obtener datos de entradad
    let numero1 = parseInt(document.querySelector("#valor1Ej2").value);
    //parseInt("3") - 3
    let numero2 = parseInt(document.querySelector("#valor2Ej2").value);
    //parseInt("5") - 3

    //hacer algo con los datos de entrada
    let respuesta = numero1 + numero2
    
    document.querySelector("#pResultadoEj2").innerHTML = "La suma es: " + respuesta ;
}