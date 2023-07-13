window.addEventListener("load", inicio);

function inicio(){
    console.log("Carga Ok");
    document.querySelector("#btnEj5").addEventListener("click", ej5);
}

function ej5(){
    let number1 = parseInt(document.querySelector("#ladoCuadrado1").value);

    let resultado = number1 * number1;
    
    document.querySelector("#pArea").innerHTML = "Área del cuadrado = " + resultado
}