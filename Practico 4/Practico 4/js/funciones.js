window.addEventListener("load", inicio)

function inicio() {
    document.querySelector("#btnE1").addEventListener("click", ejercicio1);
    document.querySelector("#btnE2").addEventListener("click", ejercicio2);
    document.querySelector("#btnE3").addEventListener("click", ejercicio3);
    document.querySelector("#btnE4").addEventListener("click", ejercicio4);
    document.querySelector("#btnE5").addEventListener("click", ejercicio5);
    document.querySelector("#btnE6").addEventListener("click", ejercicio6);
    document.querySelector("#btnE7").addEventListener("click", ejercicio7);
    document.querySelector("#btnE8").addEventListener("click", ejercicio8);
};

// Funciones ejercicio1
function ejercicio1() {
    let num1 = parseInt(document.querySelector("#ValorE1").value);
    let num2 = parseInt(document.querySelector("#Valor2E1").value);

    let resultado = contarPares(num1, num2);
    document.querySelector("#resultadoE1").innerHTML = "Cantidad de pares: " + resultado;
};

function contarPares(num1, num2) {
    let contador = 0;
    valor1 = obtenerMenor(num1, num2);
    valor2 = obtenerMayor(num1, num2);
    for (let i = valor1; i <= valor2; i++) {
        if (i % 2 === 0) {
            contador++;
        }
    }
    return contador;
};

function obtenerMayor(num1, num2) {
    mayorE1 = num1;
    if (num2 > num1) {
        mayorE1 = num2;
    }
    return mayorE1;
};

function obtenerMenor(num1, num2) {
    menorE1 = num1;
    if (num2 < num1) {
        menorE1 = num2;
    }
    return menorE1;
}
//Fin funciones ejercicio1

//Funciones ejercicio2
function ejercicio2() {
    let edadEj2 = parseInt(document.querySelector("#ValorE2").value);
    let topeEj2 = parseInt(document.querySelector("#Valor2E2").value);
    let textoamostrar = ""

    if (esMayor(edadEj2, topeEj2)) {
        textoamostrar = "es mayor";
    } else {
        textoamostrar = "no es mayor";
    }
    document.querySelector("#resultadoE2").innerHTML = textoamostrar;

}

function esMayor(edad, tope) {
    let respuesta = true
    if (edad > tope) {
        respuesta = true
    } else if (edad < tope) {
        respuesta = false
    }
    return respuesta
}
//Fin funciones ejercicio2

//Funciones ejercicio3
function ejercicio3() {
    let añoaingresar = parseInt(document.querySelector("#ValorE3").value);
    let resultado = "";

    if (esBiciesto(añoaingresar)) {
        resultado = "El año ingresado es biciesto";
    } else {
        resultado = "El año ingresado no es Biciesto";
    }
    document.querySelector("#resultadoE3").innerHTML = resultado;
};

function esBiciesto(añoingreso) {
    let respuesta = false;
    if ((añoingreso % 4 === 0 && añoingreso % 100 !== 0) || añoingreso % 400 === 0) {
        respuesta = true
    }

    return respuesta;
};
//Fin funciones ejercicio 3

//Funciones ejercicio 4

// tomo los datos, valido y muestro el resultado
function ejercicio4() {
    let numero1 = parseInt(document.querySelector("#ValorE4").value);
    let numero2 = parseInt(document.querySelector("#Valor2E4").value);
    resultado = ""

    if (numero1 > 0 && numero2 > 0)
        resultado = ` El área del triángulo es ${calcularAreaTriangulo(numero1, numero2)}`
    else {
        resultado = -1
    }
    document.querySelector("#resultadoE4").innerHTML = resultado
}

//Realizo funcion de calculo

function calcularAreaTriangulo(base, altura) {
    resultado = (base * altura) / 2
    return resultado
}

// fin funciones ejercicio 4

//Funciones ejercicio 5

function ejercicio5() {
    let numero1 = parseInt(document.querySelector("#ValorE5").value);
    let numero2 = parseInt(document.querySelector("#Valor2E5").value);
    let resultado = "";

    if (numero1 > 0 && numero2 > 0)
        resultado = ` El área del rectángulo es ${calcularAreaRectangulo(numero1, numero2)}`
    else {
        resultado = -1
    }
    document.querySelector("#resultadoE5").innerHTML = resultado

}

function calcularAreaRectangulo(base, altura) {
    resultado = base * altura
    return resultado
}

//fin funciones ejercicio 5

//funciones ejercicio 6

function ejercicio6() {
    let numero1 = parseInt(document.querySelector("#ValorE6").value)
    let resultado = convertirCaF(numero1)

    document.querySelector("#resultadoE6").innerHTML = resultado
}

function convertirCaF(Celsius) {
    let temperaturaF = 1.8 * Celsius + 32
    return temperaturaF
}

// fin funciones ejercicio6

// funciones ejercicio7

function ejercicio7() {
    let temperatura = parseInt(document.querySelector("#ValorE7").value);
    let conversion = document.querySelector("#selectE7").value;
    let resultado;

    if (conversion === "C") {
        resultado = convertirFaC(temperatura)
    } else if (conversion === "K") {
        resultado = convertirFaK(temperatura)
    } else if (conversion === "Ra") {
        resultado = convertirFaRa(temperatura)
    } else if (conversion === "Re") {
        resultado = convertirFaRe(temperatura)
    }
    document.querySelector("#resultadoE7").innerHTML = resultado;
};

function convertirFaC(Farenheit) {
    let resultado = ((Farenheit - 32) / 1.8).toFixed(2) + " ºCelsius";
    return (resultado);
}

function convertirFaK(Farenheit) {
    let resultado = ((Farenheit + 459.67) / 1.8).toFixed(2) + " ºKelvin";
    return resultado;
}

function convertirFaRa(Farenheit) {
    let resultado = ((Farenheit + 459.67)).toFixed(2) + " ºRankine";
    return resultado;
}

function convertirFaRe(Farenheit) {
    let resultado = ((Farenheit - 32) / 2.25).toFixed(2) + " ºReaumur";
    return resultado;
}

// fin funciones ejercicio 7

//Funciones ejercicio8

function ejercicio8() {
    let numero1 = parseInt(document.querySelector("#ValorE8").value);
    let numero2 = parseInt(document.querySelector("#Valor2E8").value);
    let resultado = exponencial(numero1, numero2);
    document.querySelector("#resultadoE8").innerHTML = resultado;
}

function exponencial(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) { //i = i + 1
        resultado *= base; // resultado = resultado * base  
    }
    return resultado;
};

// fin funciones ejercicio 8