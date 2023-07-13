window.addEventListener("load", ejercicio);

function ejercicio() {
    document.querySelector("#btnEj1").addEventListener("click", ejercicio1);
    document.querySelector("#btnEj2").addEventListener("click", ejercicio2);
    document.querySelector("#btnEj3").addEventListener("click", ejercicio3);
    document.querySelector("#btnEj4").addEventListener("click", ejercicio4);
    document.querySelector("#btnEj5").addEventListener("click", ejercicio5);
    document.querySelector("#btnEj6").addEventListener("click", ejercicio6);
    document.querySelector("#btnEj7").addEventListener("click", ejercicio7);
    document.querySelector("#btnEj8").addEventListener("click", ejercicio8);
    document.querySelector("#btnEj9").addEventListener("click", ejercicio9);
    document.querySelector("#btnEj10").addEventListener("click", ejercicio10);
    document.querySelector("#btnEj11").addEventListener("click", ejercicio11);
    document.querySelector("#btnEj12").addEventListener("click", ejercicio12);
    document.querySelector("#btnEj13").addEventListener("click", ejercicio13);
    document.querySelector("#btnEj14").addEventListener("click", ejercicio14);
    document.querySelector("#btnEj15").addEventListener("click", ejercicio15);
    document.querySelector("#btnEj16").addEventListener("click", ejercicio16);
    document.querySelector("#btnEj17").addEventListener("click", ejercicio17);
    document.querySelector("#btnEj18").addEventListener("click", ejercicio18);
    document.querySelector("#btnEj19").addEventListener("click", ejercicio19);
    document.querySelector("#btnEj20").addEventListener("click", ejercicio20);
    document.querySelector("#btnEj21").addEventListener("click", ejercicio21);
    document.querySelector("#btnEj22").addEventListener("click", ejercicio22);
    document.querySelector("#btnEj23").addEventListener("click", ejercicio23);
    document.querySelector("#btn1Ej25").addEventListener("click", ejercicio25F1);
    document.querySelector("#btn2Ej25").addEventListener("click", ejercicio25F2);
    document.querySelector("#btnEj26").addEventListener("click", ejercicio26);
    document.querySelector("#btn1Ej28").addEventListener("click", ejercicio28F1);
    document.querySelector("#btn2Ej28").addEventListener("click", ejercicio28F2);

};

function ejercicio1() {
    let numEj1 = parseFloat(document.querySelector("#ValorEj1").value);

    if (numEj1 >= 0) {
        let resultado = "positivo";
        document.querySelector("#resultadoEj1").innerHTML = "Es" + " " + resultado;
    } else {
        let resultado = "negativo";
        document.querySelector("#resultadoEj1").innerHTML = "Es" + " " + resultado;
    };
};

function ejercicio2() {
    let numEj2 = parseFloat(document.querySelector("#ValorEj2").value);

    if (numEj2 > 10) {
        document.querySelector("#resultadoEj2").innerHTML = "Mayor que diez";
    } else {
        document.querySelector("#resultadoEj2").innerHTML = " ";
    };
};

function ejercicio3() {
    let numEj3 = parseFloat(document.querySelector("#ValorEj3").value);

    if (numEj3 <= 20) {
        document.querySelector("#resultadoEj3").innerHTML = "es menor o igual a 20";
    } else {
        document.querySelector("#resultadoEj3").innerHTML = "es mayor que 20";
    };
};

function ejercicio4() {
    let numEj4 = parseFloat(document.querySelector("#ValorEj4").value);

    if (numEj4 < 0) {
        let resultado = (numEj4 * -1);
        document.querySelector("#resultadoEj4").innerHTML = resultado;
    } else {
        let resultado = numEj4
        document.querySelector("#resultadoEj4").innerHTML = resultado;
    };
};

function ejercicio5() {
    let numEj5 = parseFloat(document.querySelector("#ValorEj5").value);
    let resultado;
    if (numEj5 > 10 && numEj5 < 20) {
        resultado = "Es mayor que 10 y menor que 20";

    } else {
        resultado = "No es mayor que 10 y menor que 20"

    }

    document.querySelector("#resultadoEj5").innerHTML = resultado;
};

function ejercicio6() {
    let numEj6 = parseFloat(document.querySelector("#ValorEj6").value);
    let resultado;
    if (numEj6 % 7 === 0 && numEj6 % 3 === 0) {
        resultado = "Es multiplo de 7 y 3 simultaneamente";

    } else {
        resultado = "No es multiplo de 7 y 3 simultaneamente";

    };

    document.querySelector("#resultadoEj6").innerHTML = resultado;
};

function ejercicio7() {
    let numEj7 = parseFloat(document.querySelector("#ValorEj7").value);
    let resultado;
    if (numEj7 < -20 || numEj7 > 20) {
        resultado = "Cumple";

    } else {
        resultado = "No Cumple"

    };

    document.querySelector("#resultadoEj7").innerHTML = resultado;
};

function ejercicio8() {
    let numEj8 = parseFloat(document.querySelector("#ValorEj8").value);
    let resultado;

    if (numEj8 < 10) {
        resultado = "Menor que 10";
    } else if (numEj8 > 30) {
        resultado = "Mayor a 30";
    } else {
        resultado = "Entre 10 y 30";
    };

    document.querySelector("#resultadoEj8").innerHTML = resultado;
};

function ejercicio9() {
    let dia = document.querySelector("#selectDiaEj9").value;
    let temp = parseInt(document.querySelector("#TempEj9"))
    let resultado = "Levantarse <br>";

    if (temp < 10) {
        resultado += "Abrigarse mucho <br>";
    } else if (temp > 20) {
        resultado += "Ponerse ropa cómoda <br>";
    } else {
        resultado += "Abrigo moderado <br>";
    };

    if (dia === "D") {
        resultado += "Quedarse en casa, hoy no trabaja";
    } else {
        resultado += "Ir al trabajo";
    };

    document.querySelector("#resultadoEj9").innerHTML = resultado;
};

function ejercicio10() {
    let numero1Ej10 = parseFloat(document.querySelector("#Valor1Ej10").value);
    let numero2Ej10 = parseFloat(document.querySelector("#Valor2Ej10").value);
    let resultado;
    if (numero1Ej10 > numero2Ej10) {
        resultado = numero1Ej10 - numero2Ej10;
    } else {
        resultado = numero2Ej10 - numero1Ej10;
    };
    document.querySelector("#resultadoEj10").innerHTML = resultado;

};

function ejercicio11() {
    let numero1Ej11 = parseFloat(document.querySelector("#Valor1Ej11").value);
    let numero2Ej11 = parseFloat(document.querySelector("#Valor2Ej11").value);
    let operacionEj11 = document.querySelector("#OperacionEj11").value;
    let resultadoEj11;

    if (operacionEj11 == "S") {
        resultadoEj11 = numero1Ej11 + numero2Ej11;
    } else if (operacionEj11 == "R") {
        resultadoEj11 = numero1Ej11 - numero2Ej11;
    } else if (operacionEj11 == "M") {
        resultadoEj11 = numero1Ej11 * numero2Ej11;
    } else {
        resultadoEj11 = numero1Ej11 / numero2Ej11;
    };

    document.querySelector("#resultadoEj11").innerHTML = resultadoEj11;

};

function ejercicio12() {
    let letra = document.querySelector("#letraEj12").value;
    let resultadoEj12;

    if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U" || letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        resultadoEj12 = "Es Vocal";
    } else {
        resultadoEj12 = "No es Vocal";
    };

    document.querySelector("#resultadoEj12").innerHTML = resultadoEj12;
};

function ejercicio13() {
    let numero1Ej13 = parseInt(document.querySelector("#Valor1Ej13").value);
    let numero2Ej13 = parseInt(document.querySelector("#Valor2Ej13").value);
    let resultado;
    if (numero1Ej13 % numero2Ej13 === 0) {
        resultado = "Valor 1 es múltiplo de Valor 2";
    } else {
        resultado = "Valor 1 No es múltiplo de Valor 2";
    };
    document.querySelector("#resultadoEj13").innerHTML = resultado;
};

function ejercicio14() {
    let numero1Ej14 = parseInt(document.querySelector("#Valor1Ej14").value);
    let plusEj14 = document.querySelector("#selectEj14").value;
    let numero2Ej14 = parseInt(document.querySelector("#Valor1Ej14").value) * 2;
    let resultadoEj14;

    if (numero1Ej14 < 15000 && plusEj14 == "n") {
        resultadoEj14 = "No tiene millas suficientes";
    } else if (numero1Ej14 >= 15000 && numero1Ej14 < 30000 && plusEj14 == "n") {
        resultadoEj14 = "América del Sur como destino más lejano";
    } else if (numero1Ej14 >= 30000 && numero1Ej14 < 60000 && plusEj14 == "n") {
        resultadoEj14 = "América del Norte como destino más lejano";
    } else if (numero1Ej14 >= 60000 && plusEj14 == "n") {
        resultadoEj14 = "Europa como destino más lejano";
    };

    if (numero2Ej14 < 15000 && plusEj14 == "s") {
        resultadoEj14 = "No tiene millas suficientes";
    } else if (numero2Ej14 >= 15000 && numero2Ej14 < 30000 && plusEj14 == "s") {
        resultadoEj14 = "América del Sur como destino más lejano";
    } else if (numero2Ej14 >= 30000 && numero2Ej14 < 60000 && plusEj14 == "s") {
        resultadoEj14 = "América del Norte como destino más lejano";
    } else if (numero2Ej14 >= 60000 && plusEj14 == "s") {
        resultadoEj14 = "Europa como destino más lejano";
    };

    document.querySelector("#resultadoEj14").innerHTML = resultadoEj14;
};

function ejercicio15() {
    let coddepartamento = document.querySelector("#departamentoEj15").value;
    let coddepartamento2 = coddepartamento.toUpperCase();
    var letradepartamento = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S"];
    var departamentos = ["Canelones", "Maldonado", "Rocha", "Treinta y Tres", "Cerro largo", "Rivera", "Artigas", "Salto", "Paysandu", "Rio negro", "Soriano", "Colonia", " San jose", "Flores", "Florida", "Lavalleja", "Durazno", "Tacuarembo", "Montevideo"];

    let buscarletra = letradepartamento.includes(coddepartamento2);
    let quedepartamento;
    let resultadoEj15;

    if (buscarletra) {
        quedepartamento = letradepartamento.indexOf(coddepartamento2);
        resultadoEj15 = departamentos[quedepartamento];
    } else {
        resultadoEj15 = "No es un código de departamento correcto";
    };

    document.querySelector("#resultadoEj15").innerHTML = resultadoEj15;
};

function ejercicio16() {
    let valorA = parseInt(document.querySelector("#Valor1Ej16").value);
    let valorB = parseInt(document.querySelector("#Valor2Ej16").value);
    let valorC = parseInt(document.querySelector("#Valor3Ej16").value);
    let resultadoEj16;

    if (valorA > valorB && valorA > valorC) {
        resultadoEj16 = "A es el mayor de los 3";
    }
    document.querySelector("#resultadoEj16").innerHTML = resultadoEj16;
};

function ejercicio17() {
    let valorA = parseFloat(document.querySelector("#Valor1Ej17").value);
    let resultadoEj17;

    if (valorA < 0 || valorA > 10) {
        resultadoEj17 = "A está fuera de rango";
    };

    document.querySelector("#resultadoEj17").innerHTML = resultadoEj17;
};

let sumaEj18 = 0;
let contadorEj18 = 0;

function ejercicio18() {

    if (contadorEj18 < 6) {
        let valorEj18 = parseInt(document.querySelector("#Valor1Ej18").value);
        sumaEj18 += Math.abs(valorEj18);
        contadorEj18++;
    } else {
        document.querySelector("#resultadoEj18").innerHTML = sumaEj18;
    };

};

let multiplo5Ej19 = 0;
let mayor20Ej19 = 0;
let ambosEj19 = 0;
function ejercicio19() {

    let valor1Ej19 = parseInt(document.querySelector("#Valor1Ej19").value);

    if (valor1Ej19 % 5 === 0 && valor1Ej19 > 20) {
        ambosEj19++;
    }
    if (valor1Ej19 % 5 === 0) {
        multiplo5Ej19++;
    }
    if (valor1Ej19 > 20) {
        mayor20Ej19++;
    }

    let resultadoEj19 = multiplo5Ej19 + " valores son multiplo de 5, " + mayor20Ej19 + " valores son mayor que 20, " + ambosEj19 + " valores cumplen ambas condiciones.";

    document.querySelector("#resultadoEj19").innerHTML = resultadoEj19;

};

function ejercicio20() {
    let Valor1Ej20 = parseInt(document.querySelector("#Valor1Ej20").value);
    let valor2Ej20decimal = parseInt(document.querySelector("#Valor2Ej20").value) / 100;
    let Valor2Ej20 = parseInt(valor2Ej20decimal);
    let Valor3Ej20 = parseInt(document.querySelector("#Valor3Ej20").value);
    let Valor4Ej20 = parseInt(document.querySelector("#Valor4Ej20").value);
    var ingredientes = [Valor1Ej20, Valor2Ej20, Valor3Ej20, Valor4Ej20];
    let resultado;

    if (ingredientes.includes(0)) {
        resultado = 0;
    } else if (Valor1Ej20 <= Valor2Ej20 && Valor1Ej20 <= Valor3Ej20 && Valor1Ej20 <= Valor4Ej20) {
        resultado = Valor1Ej20;
    } else if (Valor2Ej20 <= Valor1Ej20 && Valor2Ej20 <= Valor3Ej20 && Valor2Ej20 <= Valor4Ej20) {
        resultado = Valor2Ej20;
    } else if (Valor3Ej20 <= Valor1Ej20 && Valor3Ej20 <= Valor2Ej20 && Valor3Ej20 <= Valor4Ej20) {
        resultado = Valor3Ej20;
    } else {
        resultado = Valor4Ej20;
    }
    document.querySelector("#resultadoEj20").innerHTML = resultado;
};

function ejercicio21() {
    let valor1Ej21 = parseInt(document.querySelector("#Valor1Ej21").value);
    let valor2Ej21 = parseInt(document.querySelector("#Valor2Ej21").value);
    let primerpago;
    let cantidadcuotas;
    let pagocuotas;

    if (valor1Ej21 < 2000) {
        primerpago = 0.15 * valor2Ej21;
        cantidadcuotas = 7 * 12;
        pagocuotas = (valor2Ej21 - primerpago) / cantidadcuotas;
    } else {
        primerpago = 0.3 * valor2Ej21;
        cantidadcuotas = 12;
        pagocuotas = (valor2Ej21 - primerpago) / cantidadcuotas;
    };

    let resultado = "Pago inicial: " + primerpago + "<br>" + "Cantidad de cuotas:" + cantidadcuotas + "<br" + "Valor de la cuota" + pagocuotas;

    document.querySelector("#resultadoEj21").innerHTML = resultado;
};

function ejercicio22() {
    let valor1Ej22 = parseFloat(document.querySelector("#Valor1Ej22").value);
    let tarjetaEj22 = document.querySelector("#selectEj21").value;
    let resultadoEj22;

    if (valor1Ej22 < 10000 && tarjetaEj22 === "S") {
        resultadoEj22 = valor1Ej22 - (valor1Ej22 * 0.04);
    } else {
        resultadoEj22 = valor1Ej22;
    };

    document.querySelector("#resultadoEj22").innerHTML = resultadoEj22;
};

let contadorEj23 = 0;
let acumuladorEj23 = 0;
let perdieronEj23 = 0;
let aprobaronEj23 = 0;
let buenanotaEj23 = 0;
let maximoEj23 = Number.NEGATIVE_INFINITY;
let minimoEj23 = Number.POSITIVE_INFINITY;

function ejercicio23() {
    let valor1Ej23 = parseInt(document.querySelector("#Valor1Ej23").value);
    acumuladorEj23 += valor1Ej23;
    contadorEj23++;
    let promedio = acumuladorEj23 / contadorEj23;



    if (valor1Ej23 < 70) {
        perdieronEj23++;
    } else if (valor1Ej23 > 90) {
        buenanotaEj23++;
        aprobaronEj23++;
    } else if (valor1Ej23 >= 70) {
        aprobaronEj23++;
    };

    let resultado = "Perdieron: " + perdieronEj23 + "<br>" + "Aprobaron: " + aprobaronEj23 + "<br>" + "Buena nota: " + buenanotaEj23 + "<br>" + "Promedio: " + promedio + "<br>" + "Nota Maxima: " + maximoEj23 + "<br>" + "Nota Minima" + minimoEj23;

    document.querySelector("#resultadoEj23").innerHTML = resultado;
};


let valor1Ej25; //cantidad stock
function ejercicio25F1() { //en la funcion voy a definir que el boton se apague luego de recibir un stock
    valor1Ej25 = parseInt(document.querySelector("#Valor1Ej25").value);
    document.querySelector("#btn1Ej25").disabled = true;
    document.querySelector("#resultado1Ej25").innerHTML = "Stock: " + valor1Ej25;
    document.querySelector("#btn2Ej25").disabled = false;
};

let maxclientEj25;
let maximoEj25 = Number.NEGATIVE_INFINITY;
let contadorEj25 = 0;
let resultadoEj25 = '';
function ejercicio25F2() {

    let valor2Ej25 = document.querySelector("#Valor2Ej25").value;
    let valor3Ej25 = parseInt(document.querySelector("#Valor3Ej25").value);
    let aviso;

    if (valor3Ej25 <= valor1Ej25 && valor3Ej25 > 0) {
        valor1Ej25 = valor1Ej25 - valor3Ej25;
        contadorEj25++;
        aviso = "Pedido exitoso <br>";
        document.querySelector("#resultado2Ej25").innerHTML = "Stock: " + valor1Ej25 + "<br>";
        if (valor3Ej25 > maximoEj25) {
            maximoEj25 = valor3Ej25;
            maxclientEj25 = valor2Ej25;
        }
        resultadoEj25 = "Maximo Pedido: " + maximoEj25 + "<br>" + "Cliente: " + maxclientEj25 + "<br>" + "Cantidad pedidos: " + contadorEj25;
        if (valor1Ej25 == 0) {
            document.querySelector("#btn2Ej25").disabled = true;
        }
    } else if (valor3Ej25 <= 0) {
        aviso = "Pedido mayor a 0 por favor";
    } else if (valor3Ej25 > valor1Ej25) {
        aviso = "No hay más stock disponible";
    };

    document.querySelector("#resultado2Ej25").innerHTML = aviso + resultadoEj25;

};

function ejercicio26() {
    let valor1Ej26 = parseInt(document.querySelector("#Valor1Ej26").value);
    let mediopago = document.querySelector("#selectEj26").value;
    let resultado;
    let cantidadnoches;
    let costo = 40 * valor1Ej26;
    let pago;

    if (mediopago === "e") {
        pago = "Efectivo";
    } else if (mediopago === "t") {
        pago = "Tarjeta";
    };

    if (mediopago === "t" && valor1Ej26 >= 7) {
        cantidadnoches = valor1Ej26 + 3;
        resultado = valor1Ej26 + " noches pagas con " + pago + "<br>" + "Se hospeda " + cantidadnoches + " noches <br>" + "Costo total " + costo;
    } else if (mediopago === "e" && valor1Ej26 >= 7) {
        cantidadnoches = valor1Ej26 + 2;
        resultado = valor1Ej26 + " noches pagas con " + pago + "<br>" + "Se hospeda " + cantidadnoches + " noches <br>" + "Costo total " + costo;
    } else if (valor1Ej26 >= 3 && valor1Ej26 < 7) {
        cantidadnoches = valor1Ej26 + 1;
        resultado = valor1Ej26 + " noches pagas con " + pago + "<br>" + "Se hospeda " + cantidadnoches + " noches <br>" + "Costo total " + costo;
    } else if (valor1Ej26 < 3) {
        cantidadnoches = valor1Ej26;
        resultado = valor1Ej26 + " noches pagas con " + pago + "<br>" + "Se hospeda " + cantidadnoches + " noches <br>" + "Costo total " + costo;
    };

    document.querySelector("#resultadoEj26").innerHTML = resultado;

}

let valor1Ej28 = 0;
let valor2Ej28 = 0;
function ejercicio28F1() {
    let valor1 = parseInt(document.querySelector("#Valor1Ej28").value);
    let valor2 = parseInt(document.querySelector("#Valor2Ej28").value);
    let resultado;
    let ganador = " ";

    if (valor1 <= 0 || valor2 <= 0) {
        alert("Deben ser valores positivos");
    } else {
        valor1Ej28 += valor1;
        valor2Ej28 += valor2;
    }
    resultado = "Puntos Equipo 1: " + valor1Ej28 + "<br>" + "Puntos Equipo 2: " + valor2Ej28 + "<br>";

    if (valor1Ej28 >= 30 || valor1Ej28 >= 30) {
        document.querySelector("#btn1Ej28").disabled = true;
        if (valor1Ej28 > valor2Ej28) {
            ganador = "Ganador Equipo 1";
            btn1Ej28.disabled = true;
        } else if (valor1Ej28 < valor2Ej28) {
            ganador = "Ganador Equipo 2";
            btn1Ej28.disabled = true;
        } else {
            ganador = "Empate entre equipos";
        };
    };

    document.querySelector("#resultadoEj28").innerHTML = resultado + ganador;

};

function ejercicio28F2() {
    document.querySelector("#btn1Ej28").disabled = false;
    valor1Ej28 = 0;
    valor2Ej28 = 0;
    document.querySelector("#resultadoEj28").innerHTML = "Reset!";
};