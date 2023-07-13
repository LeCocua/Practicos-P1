window.addEventListener("load", inicio);

function inicio(){
    alert("ok");
    document.querySelector("#btn1Ej4").addEventListener("click", ej4);
    
};

function ej4(){
    let numero1 = parseInt(document.querySelector("#valor1Ej4").value);
    let numero2 = parseInt(document.querySelector("#valor2Ej4").value);
    
    let Suma = numero1 + numero2;
    document.querySelector("#pResultadoSuma").innerHTML = "La suma es " + Suma;
    
    let Multiplicar = numero1 * numero2;
    document.querySelector("#pResultadoMultiplicar2").innerHTML = "La Multiplicacion es " + Multiplicar;
}