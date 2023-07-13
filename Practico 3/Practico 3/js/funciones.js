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
    document.querySelector("#btnE9").addEventListener("click", ejercicio9);
    document.querySelector("#btnE10").addEventListener("click", ejercicio10);
    document.querySelector("#btnE11").addEventListener("click", ejercicio11);
    document.querySelector("#btnE12").addEventListener("click", ejercicio12);
    document.querySelector("#btnE13").addEventListener("click", ejercicio13);
    document.querySelector("#btnE14").addEventListener("click", ejercicio14);
    document.querySelector("#btnE15").addEventListener("click", ejercicio15);
    document.querySelector("#btnE16").addEventListener("click", ejercicio16);
    document.querySelector("#btnE17").addEventListener("click", ejercicio17);
};

let textoE1 = ""
function ejercicio1() {
    for (let i = 1; i < 1000; i++) {
        textoE1 += i + "<br>";
    }
    document.querySelector("#resultadoE1").innerHTML = textoE1
};

let textoE2 = ""
function ejercicio2() {
    for (let i = -100; i < 11; i++) {
        textoE2 += i + "<br>";
    }
    document.querySelector("#resultadoE2").innerHTML = textoE2
}

let textoE3 = ""
function ejercicio3() {
    for (let i = 40; i >= 10; i--) {
        if (i % 2 === 0)
            textoE3 += i + "<br>";
    }
    document.querySelector("#resultadoE3").innerHTML = textoE3
}

let textoE4 = ""
function ejercicio4() {

    for (let i = 20; i >= -30; i--) {
        if (i % 2 === 0)
            textoE4 += i + "<br>";
    }
    document.querySelector("#resultadoE4").innerHTML = textoE4
}

let textoE5 = ""
function ejercicio5() {

    for (let i = 1; i <= 450; i++) {
        if (i % 5 === 0)
            textoE5 += i + "<br>";
    }
    document.querySelector("#resultadoE5").innerHTML = textoE5
}

let textoE6 = ""
function ejercicio6() {

    for (let i = -33; i <= 230; i++) {
        if (i % 4 === 0)
            textoE6 += i + "<br>";
    }
    document.querySelector("#resultadoE6").innerHTML = textoE6
}

function ejercicio7() {

    let valorE7 = parseInt(document.querySelector("#ValorE7").value)
    let i = 1;
    let resultado = "";

    if (valorE7 < 2) {
        resultado = "Numero es menor a 2"
    } else if (valorE7 > 50) {
        resultado = "Numero es mayor a 50"
    } else {
        for (i; i <= valorE7; i++) {
            resultado += "-"
        };

    };

    document.querySelector("#resultadoE7").innerHTML = resultado
};

function ejercicio8() {
    let numero1 = parseInt(document.querySelector("#ValorE8").value);
    let numero2 = parseInt(document.querySelector("#Valor2E8").value);

    if (numero2 < numero1) {
        let aux = numero1;
        numero1 = numero2;
        numero2 = aux;
    }
    let resultado = "";
    for (let i = numero1; i <= numero2; i++) {
        resultado += i + "<br>"
    }

    /* En vez de utilizar la variable numero directamente, defino i dentro del for
    if(numero1 <= numero2){
        for(numero1 ; numero1 <= numero2 ; numero1++){
            resultado += numero1 + "<br>";
        }
    } else if ( numero1 > numero2){
        for (numero1 ; numero1 >= numero2 ; numero1--){
            resultado+= numero1 + "<br>";
        }
    }
    
    En vez de hace un if/else con dos condiciones, puedo intercambiar las variables para solo utilizar el for 
    if ( numero2 < numero1){
        let aux = numero1
        numero1 = numero2
        numero2 = aux
    }
    
    for(let i = numero1 ; i <= numero2 ; i++){
        resultado += i + "<br>"
    }
    */

    document.querySelector("#resultadoE8").innerHTML += resultado + "<br>";
};

function ejercicio9() {
    let numero1E9 = parseInt(document.querySelector("#ValorE9").value);
    let numero2E9 = parseInt(document.querySelector("#Valor2E9").value);
    let acumulador = 0;

    for (let i = 0; i < numero2E9; i++) {
        acumulador += numero1E9
    }

    document.querySelector("#resultadoE9").innerHTML = acumulador;

};

function ejercicio10() {

    let numero1E10 = parseInt(document.querySelector("#ValorE10").value);
    let numero2E10 = parseInt(document.querySelector("#Valor2E10").value);
    let acumulador = 1;

    for (let i = numero1E10; i <= numero2E10; i++) {
        acumulador *= i //acumulador = acumulador * i
    }

    document.querySelector("#resultadoE10").innerHTML = acumulador;

};

function ejercicio11() {
    let numero1 = parseInt(document.querySelector("#ValorE11").value);
    let numero2 = parseInt(document.querySelector("#Valor2E11").value);
    let numero3 = parseInt(document.querySelector("#Valor3E11").value);
    let resultado = ""

    if (numero2 < numero1) {
        let aux = numero1;
        numero1 = numero2;
        numero2 = aux;
    }

    for (let i = numero1; i <= numero2; i++) {
        if (i % numero3 === 0) {
            resultado += i + "<br>";
        }
    }
    document.querySelector("#resultadoE11").innerHTML = resultado;
};

function ejercicio12() {
    let numero1 = parseInt(document.querySelector("#ValorE12").value);
    let acumulador = 1;
    let respuesta = ""
    if (numero1 < 0) {
        respuesta = "No es un numero natural"
    } else {
        for (let i = 1; i <= numero1; i++) {
            acumulador *= i
            respuesta = acumulador
        };
    }
    document.querySelector("#resultadoE12").innerHTML = respuesta
};

function ejercicio13() {

    let ancho = parseInt(document.querySelector("#ValorE13").value)
    let alto = parseInt(document.querySelector("#Valor2E13").value)
    let rAncho = ""

    for (let i = 1; i <= ancho; i++) {
        rAncho += "0"
    };

    let rAlto = "";
    for (let i = 1; i <= alto; i++) {
        rAlto += rAncho + "<br>";
    };

    document.querySelector("#resultadoE13").innerHTML = rAlto
    console.log(rAlto)
};

function ejercicio14() {
    let numero1 = parseInt(document.querySelector("#ValorE14").value);
    let resultado = 0;
    let i = numero1;

    while (i >= 1) {
        i = i / 10;
        resultado++
    }

    document.querySelector("#resultadoE14").innerHTML = resultado;

};

function ejercicio15() {
    let numero1 = parseInt(document.querySelector("#ValorE15").value);
    let resultado;
    let i = numero1;

    if (numero1 > 2000) {
        while (i >= 100) {
            i = i / 20
            resultado = i
        };
    } else {
        resultado = "No se ingresó un numero correcto"
    }

    document.querySelector("#resultadoE15").innerHTML = resultado;

};

function ejercicio16() {
    let numero1 = parseInt(document.querySelector("#ValorE16").value);
    let numero2 = parseInt(document.querySelector("#Valor2E16").value);
    let resultado = 0;

    if (numero2 < numero1) {
        let aux = numero1;
        numero1 = numero2;
        numero2 = aux;
    }

    let encontre = false
    for (let i = numero1; i <= numero2 && !encontre; i++) {
        if (i % 4 === 0 && i % 6 === 0) {
            resultado = i;
            encontre = true
        }
    }
    
    if (encontre) {
        document.querySelector("#resultadoE16").innerHTML = `El primer multiplo del rango ${numero1} y ${numero2} es ${resultado}`
    } else {
        document.querySelector("#resultadoE16").innerHTML = `No tiene multiplos`
    }

};

function ejercicio17() {
    let dividendo = parseInt(document.querySelector("#ValorE17").value);
    let divisor = parseInt(document.querySelector("#Valor2E17").value);
    let resto = "";
    let i = dividendo
    let cociente = 1;

    //para obtener el cociente
    while (i > divisor) {
        i -= divisor
        cociente++;
    }

    if (divisor === 0) {
        resto = "El divisor no puede ser cero"
    } else if (divisor > dividendo) {
        resto = dividendo;
    } else {
        //para obtener el resto
        while (i >= divisor) {
            i -= divisor;
            resto = i;
        };
    };

    document.querySelector("#resultadoE17").innerHTML = "Cociente: " + cociente + "<br>" + "resto: " + resto;
};