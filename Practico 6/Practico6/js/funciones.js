window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnE1").addEventListener("click", ejercicio1);
    document.querySelector("#btnE2").addEventListener("click", ejercicio2);
    document.querySelector("#btn2E2").addEventListener("click", mostrarE2);
    document.querySelector("#btnE3").addEventListener("click", ejercicio3);
    document.querySelector("#btn2E3").addEventListener("click", mostrarE3);
    document.querySelector("#btnE4").addEventListener("click", ejercicio4);
    document.querySelector("#btn2E4").addEventListener("click", mostrarE4);
    document.querySelector("#btnE5").addEventListener("click", ejercicio5);
    document.querySelector("#btn2E5").addEventListener("click", mostrarE5);
    document.querySelector("#btnE6").addEventListener("click", ejercicio6);
    document.querySelector("#btn2E6").addEventListener("click", mostrarE6);
    document.querySelector("#btnE7").addEventListener("click", ejercicio7);
    document.querySelector("#btn2E7").addEventListener("click", mostrarPosicion);
    document.querySelector("#btn3E7").addEventListener("click", buscarE7);
    document.querySelector("#btnE8").addEventListener("click", ejercicio8);
    document.querySelector("#btnE9").addEventListener("click", ejercicio9);
    document.querySelector("#btnE10").addEventListener("click", ejercicio10);
    document.querySelector("#btn2E10").addEventListener("click", eliminarE10);

};

//funciones ejercicio1
function ejercicio1() {
    let texto = document.querySelector("#textoE1").value;
    let respuesta = pushE1(texto).length;
    document.querySelector("#resultadoE1").innerHTML = `El largo es ${respuesta}`;
};

function pushE1(dato) {
    let respuesta = []
    for (let i = 0; i < dato.length; i++) {
        respuesta.push(dato[i].length);
    };
    return respuesta;
};
//fin funciones ejercicio1

//funciones ejercicio2
let numerosArray = [];

function ejercicio2() {
    let numeroE2 = parseInt(document.querySelector("#ValorE2").value);
    numerosArray.push(numeroE2);
    console.log(numerosArray)
};

function pushMayorE2() {
    let esMayor = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < numerosArray.length; i++) {
        let numActual = numerosArray[i]
        if (numActual > esMayor) {
            esMayor = numActual
        }
    }
    return esMayor;
};

function mostrarE2() {
    document.querySelector("#resultadoE2").innerHTML = "El mayor es " + pushMayorE2(numerosArray);
};
//fin funciones ejercicio2

//funciones ejercicio3
let palabrasArray = []

function ejercicio3() {
    let texto = document.querySelector("#textoE3").value;
    palabrasArray.push(texto);
};

function esPalabras(palabras) {
    let resp = "";
    for (i = 0; i < palabras.length; i++) {
        let palabraActual = palabras[i];
        resp += palabraActual + "<br>";
    }
    return resp;
};

function mostrarE3() {
    document.querySelector("#resultadoE3").innerHTML = esPalabras(palabrasArray);
};

//fin funciones ejercicio3

//funciones ejercicio4

let numerosE4 = []

function ejercicio4() {
    let numero = parseInt(document.querySelector("#ValorE4").value);
    numerosE4.push(numero);
};

function esPromedio() {
    let resp;
    let acumular = 0;
    let contador = 0;

    for (i = 0; i < numerosE4.length; i++) {
        let auxActual = numerosE4[i]
        acumular += auxActual;
        contador++;
    };

    resp = acumular / contador;
    return resp;
};

function mostrarE4() {
    document.querySelector("#resultadoE4").innerHTML = esPromedio(numerosE4);
};
//Fin funciones ejercicio4

//funciones ejercicio5
let arrayNumeros = []
let nuevoArray = []

function ejercicio5() {
    let numero = parseInt(document.querySelector("#ValorE5").value);
    arrayNumeros.push(numero);
};

function nuevoArrayMayor() {

    for (i = 0; i < arrayNumeros.length; i++) {
        let auxActual = arrayNumeros[i];
        if (auxActual > 20) {
            nuevoArray.push(auxActual);
        }
    }
    return nuevoArray;
};

function mostrarE5() {
    document.querySelector("#resultadoE5").innerHTML = nuevoArrayMayor(arrayNumeros)
    console.log(nuevoArray)
}
//fin funciones ejercicio5

//funciones ejercicio6
let Alias = [];

function ejercicio6() {
    let texto = document.querySelector("#textoE6").value;

    if (!validarAlias(Alias, texto)) {
        Alias.push(texto);
    } else {
        alert("El alias ya existe");
    }

}

function validarAlias(listaalias, unalias) {
    let resp = false
    for (i = 0; i < listaalias.length; i++) {
        let validoAlias = listaalias[i];
        if (validoAlias === unalias) {
            resp = true
        }
    }
    return resp;
}

function esAlias() {
    let resp = ""
    for (i = 0; i < Alias.length; i++) {
        let aliasActual = Alias[i];
        resp += aliasActual + "<br>";
    }
    return resp;
}

function mostrarE6() {
    document.querySelector("#resultadoE6").innerHTML = esAlias();
}
//fin funciones ejercicio6

//funciones ejercicio7
let arrayE7 = [];

function ejercicio7() {
    let texto = document.querySelector("#textoE7").value;
    texto = texto.trim();
    if (texto === "") {
        document.querySelector("#resultadoE7").innerHTML = "ERROR: Nombre no puede estar vacio";
    } else {
        arrayE7.push(texto); //pusheo un elemento al array
        document.querySelector("#resultadoE7").innerHTML = "la cantidad de elementos son: " + cantidadElementosE7() + "<br>" + "los elementos son:" + "<br>" + mostrarArray();
    };

}

function mostrarPosicion() { //con esta funcion ingreso la posicion del elemento, tambien me traigo el último elemento y los muestro en pantalla
    let posicion = parseInt(document.querySelector("#texto2E7").value);
    let anyPos = posicionE7(posicion);
    document.querySelector("#resultado2E7").innerHTML = "El elemento de la posicion ingresada es: " + anyPos + " y el ultimo elemento del arreglo es: " + ultimoElementoE7();
}

function mostrarArray() { //con esta funcion acumulo los elementos del array
    let resp = "";
    for (let i = 0; i < arrayE7.length; i++) {
        let elementoActual = arrayE7[i];
        resp += elementoActual + "<br>"
    };
    return resp;
}

function posicionE7(pos) { //con esta funcion busco una posicion X del array y leo el dato
    let aux = arrayE7[pos]
    return aux;
}

function ultimoElementoE7() {//con esta funcion leo el ultimo elemento
    let ultimo = arrayE7[arrayE7.length - 1]
    return ultimo;
}

function buscarE7() { //recorro el array y encuentro un elemento igual a nombreBuscar, si encuentro uno igual, lo cambio
    let nombreBuscar = document.querySelector("#texto3E7").value;
    let nuevoNombre = document.querySelector("#texto4E7").value;
    for (let i = 0; i < arrayE7.length; i++) {
        let elementoActual = arrayE7[i];
        if (elementoActual === nombreBuscar) {
            arrayE7[i] = nuevoNombre;
            document.querySelector("#resultadoE7").innerHTML = "la cantidad de elementos son " + cantidadElementosE7() + "<br>" + "los elementos son" + "<br>" + mostrarArray();
            return;
        }
    };
    alert("no existe elemento");

};

function cantidadElementosE7() {
    let cantElementos = arrayE7.length; //veo la cantidad de elementos que tiene el array
    return cantElementos;
};
//fin funciones ejercicio7

//Funciones ejercicio8
let arrayE8 = [1, 1];
let nextNumber = 0;
let array2E8 = [];
function ejercicio8() {

    for (i = 0; i < arrayE8.length; i++) { //reorro el array
        let elementoActual = arrayE8[i];//tomo el elemento actual
        nextNumber += elementoActual; //acumulo los elementos en una variable
        arrayE8.push(nextNumber); //lo acumulado lo "pusheo" al array
        array2E8 = arrayE8.slice(1); //creo un nuevo array para cortar las primeras iteraciones
        if (i === 19) { //me freno en la posicion indicada a mostrar
            break;
        };
    };
    document.querySelector("#resultadoE8").innerHTML = array2E8;
};
//fin funciones ejercicio8

//funciones ejercicio9
let arrayE9 = [1, 1]
let nextuNumber = 0;
let array2E9 = [];

function ejercicio9() {
    for (i = 0; i < arrayE9.length && i < 20; i++) {
        let elementoActual = arrayE9[i];
        nextuNumber += elementoActual;
        arrayE9.push(nextuNumber);
        array2E9 = arrayE9.slice(1);
        if (array2E9[i] >= 800) {
            break;
        };
    };
    document.querySelector("#resultadoE9").innerHTML = array2E9;
};
//fin ejercicio9

//functiones ejercicio10
let arrayE10 = []
function ejercicio10() {
    let texto = document.querySelector("#textoE10").value;
    arrayE10.push(texto);
    document.querySelector("#resultadoE10").innerHTML = "Resultado: " + arrayE10;
}

function eliminarE10() {
    let texto = document.querySelector("#textoE10").value;
    let encontrar = false;
    for (i = 0; i < arrayE10.length; i++) {
        let elementoactual1 = arrayE10[i];
        if (elementoactual1 === texto) {
            arrayE10.splice(i, 1);
            encontrar = true;
        };
    };
    if (!encontrar) {
        alert("No se encontró el elemento");
    }
    //document.querySelector("#resultado2E10").innerHTML = "Nuevo Resultado: " + arrayE10;
    document.querySelector("#resultadoE10").innerHTML = "Resultado: " + arrayE10;
};
//fin funciones ejercicio10