window.addEventListener("load", inicio);

function inicio(){
    alert ("Cargo ok")
    //eventos de los botones:
    document.querySelector("#btnEj1").addEventListener("click", ej1);
};

function ej1(){
    //obtener datos de entrada:
    let nombre = document.querySelector("#nombreEj1").value;
    let apellido = document.querySelector("#apellidoEj1").value;

    //Hacer algo con los datos de entrada
    let textomostrar = apellido + ", " + nombre;

    //mostrar resultado
    alert(textomostrar);
}


