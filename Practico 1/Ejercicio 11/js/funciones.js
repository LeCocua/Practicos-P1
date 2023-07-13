window.addEventListener("load", inicio);

function inicio(){
    document.querySelector("#btnEj11").addEventListener("click", ej11);
};

function ej11(){
    let number1 = parseInt(document.querySelector("#importeEj11").value);
    document.querySelector("#labelSubtotalEj11").innerHTML = "Subtotal: " + number1
    const iva = 1.22
    let total = number1 * iva
    document.querySelector("#labelTotalEj11").innerHTML = "Total: " + total
};