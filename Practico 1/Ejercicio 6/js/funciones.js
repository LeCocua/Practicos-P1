window.addEventListener("load", inicio);

function inicio(){
    console.log("Cargo");
    document.querySelector("#btnUYPtoUSD").addEventListener("click", ej5);
}

function ej5(){
    let numero1 = parseInt(document.querySelector("#txtUYP").value);
    let numero2 = parseInt(document.querySelector("#txtUSD").value);

    let conversion = numero1 / numero2
    console.log(conversion)

    document.querySelector("#pConversionUYPtoUSD").innerHTML = "Conversion: " + conversion
}