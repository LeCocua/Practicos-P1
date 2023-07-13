window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnE1").addEventListener("click", ejercicio1);
    document.querySelector("#btnE2").addEventListener("click", ejercicio2);
    document.querySelector("#btnE3").addEventListener("click", ejercicio3);
    document.querySelector("#btnE4").addEventListener("click", ejercicio4);
    document.querySelector("#btnE5").addEventListener("click", ejercicio5);
    document.querySelector("#btnE6").addEventListener("click", ejercicio6);
    document.querySelector("#btnE7").addEventListener("click", ejercicio7);
    document.querySelector("#btnE8").addEventListener("click", ejercicio8);
    document.querySelector("#btnE9").addEventListener("click", ejercicio9);
    document.querySelector("#btnE10").addEventListener("click", ejercicio10);
    document.querySelector("#btnE11").addEventListener("click", ejercicio11);
    document.querySelector("#btnE12").addEventListener("click", ejercicio12);
    document.querySelector("#btnE13").addEventListener("click", ejercicio13);
    document.querySelector("#btnE14").addEventListener("click", ejercicio14);
};

//Funciones ejercicio1
//Funcion para mostrar el texto 
function ejercicio1() {
    let textoingresado = document.querySelector("#textoE1").value;
    let resultadoE1 = "";
    resultadoE1 = invertirE1(textoingresado);

    document.querySelector("#resultadoE1").innerHTML = resultadoE1;
};

//funcion para invertir texto
function invertirE1(texto1) {
    let resultado = "";
    for (let i = texto1.length; i >= 0; i--) {
        resultado += texto1.charAt(i).toLowerCase();

    };
    return resultado;
};
//Fin funciones ejercicio1

//funciones ejercicio2
function ejercicio2() {
    let fraseE2 = document.querySelector("#textoE2").value.toUpperCase();
    let letraE2 = document.querySelector("#texto2E2").value.toUpperCase();

    let resultado = "";

    resultado = contarLetraS(fraseE2, letraE2);

    document.querySelector("#resultadoE2").innerHTML = "La cantidad de letras en la frase son " + resultado;

};

function contarLetraS(frase, letraIng) {
    let cant = 0;
    for (let i = 0; i < frase.length; i++) {
        let letraactual = frase.charAt(i).toUpperCase();
        if (letraIng === letraactual) {
            cant++;
        };
    };
    return cant;
};
//Fin funciones ejercicio 2

//Funciones ejercicio 3
function ejercicio3() {
    let frasevocal = document.querySelector("#textoE3").value;
    let respuesta = contarVocales(frasevocal);

    document.querySelector("#resultadoE3").innerHTML = "La cantidad de vocales es " + respuesta;
};

function contarVocales(fraseV) {
    let cant = 0;
    for (let i = 0; i < fraseV.length; i++) {
        let letraactualV = fraseV.charAt(i);
        if (esVocal(letraactualV)) {
            cant++;
        }
    }
    return cant;
};

function esVocal(letraV) {
    letraV = letraV.toLowerCase();
    let resp = false;

    if (letraV === "a" || letraV === "e" || letraV === "i" || letraV === "o" || letraV === "u") {
        resp = true;
    }
    return resp;
};
//fin funciones ejercicio 3

//funciones ejercicio4
function ejercicio4() {
    let textoE4 = document.querySelector("#textoE4").value;
    textoE4 = minusculas(textoE4);
    document.querySelector("#resultadoE4").innerHTML = textoE4;
};

function minusculas(textomin) {
    textomin = textomin.toLowerCase();
    return textomin;
};
//Fin funciones ejercicio4

//funciones ejercicio 5
function ejercicio5() {
    let textoE5 = document.querySelector("#textoE5").value;
    textoE5 = mayusculas(textoE5);
    document.querySelector("#resultadoE5").innerHTML = textoE5;
};

function mayusculas(textomay) {
    textomay = textomay.toUpperCase();
    return textomay;
};
//Fin funciones ejercicio5

//Funciones ejercicio6
function ejercicio6() {
    let texto1 = document.querySelector("#textoE6").value;
    let texto2 = document.querySelector("#texto2E6").value;
    let resultado = esSubstring(texto1, texto2);
    let textoamostrar = "";

    if (resultado) {
        textoamostrar = `${resultado} / la subcadena "${texto2}" está incluida en la cadena "${texto1}"`;
    } else {
        textoamostrar = `${resultado} / la subcadena "${texto2}" NO está incluida en la cadena "${texto1}"`;
    }
    document.querySelector("#resultadoE6").innerHTML = textoamostrar;

};

function esSubstring(cadena, subcadena) {
    cadena = cadena.toLowerCase()
    subcadena = subcadena.toLowerCase()
    let resultado = cadena;
    resultado = cadena.includes(subcadena);
    return resultado;
};
//fin funciones ejercicio6

//funciones ejercicio7

function ejercicio7() {
    let textoE7 = document.querySelector("#textoE7").value;
    let respuesta = contarPalabras(textoE7);
    document.querySelector("#resultadoE7").innerHTML = "La cantidad de palabras es: " + respuesta;
};

function contarPalabras(frase) {
    let cantidadpalabras = 0;
    //cuento los espacios que hay entre las palabras
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) === " ") {
            cantidadpalabras++
        }
    }
    //Al estar contando espacios y no palabras, le sumo uno ya que el ultimo espacio no lo cuento
    cantidadpalabras++;
    return cantidadpalabras;
};
//fin funciones ejercicio7

//funciones ejercicio8
function ejercicio8() {
    let texto = document.querySelector("#textoE8").value;
    let resultado = primerUltimaLetra(texto);

    if (resultado) {
        document.querySelector("#resultadoE8").innerHTML = "El texto comienza con la misma letra con la que termina";
    } else {
        document.querySelector("#resultadoE8").innerHTML = "El texto NO comienzan con la misma letra con la que termina";
    }

};

function primerUltimaLetra(TextoIngresado) {
    //paso el texto a minusculas para no tener problemas
    let textoModificado = TextoIngresado.toLowerCase();
    //obtengo la primera letra
    let primerLetra = textoModificado.charAt(0);
    //obtengo la última letra
    let ultimaLetra = textoModificado.charAt(textoModificado.length - 1);
    //las comparo entre sí
    return primerLetra === ultimaLetra;
};
//Fin funciones ejercicio8

//Funciones ejercicio9

function ejercicio9() {
    let resultado = "";
    let texto = document.querySelector("#textoE9").value;
    resultado = departamentoEs(texto);
    document.querySelector("#resultadoE9").innerHTML = `${resultado}`;
};

function departamentoEs(dato) {
    let resultado = "";
    dato = dato.toUpperCase();

    for (i = 0; i < dato.length; i++) {
        let letraactual = dato.charAt(0)
        if (letraactual === "A") {
            resultado = "Canelones"
        }
        if (letraactual === "B") {
            resultado = "Maldonado"
        }
        if (letraactual === "C") {
            resultado = "Rocha"
        }
        if (letraactual === "D") {
            resultado = "Treinta y Tres"
        }
        if (letraactual === "E") {
            resultado = "Cerro Largo"
        }
        if (letraactual === "F") {
            resultado = "Rivera"
        }
        if (letraactual === "G") {
            resultado = "Artigas"
        }
        if (letraactual === "H") {
            resultado = "Salto"
        }
        if (letraactual === "I") {
            resultado = "Paysandú"
        }
        if (letraactual === "J") {
            resultado = "Río Negro"
        }
        if (letraactual === "K") {
            resultado = "Soriano"
        }
        if (letraactual === "L") {
            resultado = "Colonia"
        }
        if (letraactual === "M") {
            resultado = "San José"
        }
        if (letraactual === "N") {
            resultado = "Flores"
        }
        if (letraactual === "O") {
            resultado = "Florida"
        }
        if (letraactual === "P") {
            resultado = "Lavalleja"
        }
        if (letraactual === "Q") {
            resultado = "Durazno"
        }
        if (letraactual === "R") {
            resultado = "Tacuarembó"
        }
        if (letraactual === "S") {
            resultado = "Montevideo"
        }
    };
    return resultado
};
//Fin funciones ejercicio9

//funciones ejercicio10
function ejercicio10() {
    let frase1 = document.querySelector("#textoE10").value;
    let letra1 = document.querySelector("#texto2E10").value.toLowerCase();
    let resultadoE10 = reemplazarLetra(frase1, letra1);
    document.querySelector("#resultadoE10").innerHTML = resultadoE10;
};

function reemplazarLetra(texto, letra) {
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let letraactual = texto.charAt(i).toLowerCase();
        if (letra === letraactual) {
            resultado += "*"
        } else {
            resultado += texto.charAt(i)
        }
    }
    return resultado;

};
//Fin funciones ejercicio10

//Funciones ejercicio11
function ejercicio11() {
    let texto = document.querySelector("#textoE11").value;
    let textomostrar = soloPrimerMayus(texto);
    document.querySelector("#resultadoE11").innerHTML = textomostrar;
};

function soloPrimerMayus(frase) {
    let resp = frase.charAt(0).toUpperCase();
    frase = frase.toLowerCase();
    for (let i = 1; i < frase.length; i++) {
        resp += frase.charAt(i)
    }
    return resp;
};
//Fin funciones ejercicio11

//Funciones ejercicio 12
function ejercicio12() {
    let texto = document.querySelector("#textoE12").value;
    let resultado = contarMinyMay(texto);
    document.querySelector("#resultadoE12").innerHTML = resultado;
};

function quitarEspacios(frase) {
    let resultado = "";
    //recorro la frase, si un caracter es diferente a un espacio lo acumulo en un nuevo string resultado
    for (let i = 0; i < frase.length; i++) {
        let letraactual = frase.charAt(i);
        if (letraactual !== " ") {
            resultado += letraactual;
        }
    }
    return resultado;
};

function contarMinyMay(frase) {
    //utilizo la funcion quitar espacios
    frase = quitarEspacios(frase);
    let cantmayusculas = 0;
    let cantminusculas = 0;
    //tomo el string que tengo (ahora sin los espacios) y valido si es mayuscula o minuscula y cuento.
    for (let i = 0; i < frase.length; i++) {
        let caracter = frase.charAt(i);
        if (caracter >= 'A' && caracter <= 'Z') {
            cantmayusculas++
        } else if (caracter >= 'a' && caracter <= 'z') {
            cantminusculas++
        } else {
            cantmayusculas++
        }
    }
    let textoamostrar = "";
    textoamostrar = "Cantidad Mayusculas " + cantmayusculas + "<br>" + " Cantidad Minusculas " + cantminusculas;
    return textoamostrar;
};
//fin funciones ejercicio12

//funciones ejercicio13
function ejercicio13() {
    let texto = document.querySelector("#textoE13").value;
    let resultado = esPalindromo(texto);
    document.querySelector("#resultadoE13").innerHTML = resultado;
};

function esPalindromo(frase) {
    let resultado = "";
    //tomo la frase, la recorro quitandole los espacios y la dejo en minusculas
    //A su vez, realizo un replace para los tíldes, comas y puntos.
    frase = quitarEspacios(frase).toLowerCase();
    frase = frase.replaceAll("á", "a");
    frase = frase.replaceAll("é", "e");
    frase = frase.replaceAll("í", "i");
    frase = frase.replaceAll("ó", "o");
    frase = frase.replaceAll("ú", "u");
    frase = frase.replaceAll(",", "");
    frase = frase.replaceAll(".", "");

    //invierto la frase y la almaceno en un nuevo string
    nuevafrase = invertirE1(frase);

    //valido que sea igual de un lado hacia otro
    if (frase === nuevafrase) {
        resultado = "Es palindromo"
    } else {
        resultado = "No es palindromo"
    }

    return resultado;

};

//Fin funciones ejercicio13

//funciones ejercicio14
function ejercicio14() {
    let texto = document.querySelector("#textoE14").value;
    let respuesta = primeraRepetida(texto);
    document.querySelector("#resultadoE14").innerHTML = respuesta;
}

function primeraRepetida(palabra) {
    palabra = palabra.toLowerCase();
    let cantidadletras = 0;

    for (i = 0; i < palabra.length; i++) {
        let letraactual = palabra.charAt(i);
        if (palabra.charAt(0) === letraactual) {
            cantidadletras++
        }
    }
    return cantidadletras;
};
//fin funciones ejercicio14