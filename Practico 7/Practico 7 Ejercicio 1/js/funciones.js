window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnE1").addEventListener("click", ejercicio1);
    document.querySelector("#btn2E1").addEventListener("click", mostrar);
    document.querySelector("#btn3E1").addEventListener("click", mostrarMayores);
}

//funciones ejercicio1
let sistema = new Sistema();

function ejercicio1() {
    let name = document.querySelector("#textoE1").value;
    let edad = parseInt(document.querySelector("#texto2E1").value);
    let nationality = document.querySelector("#texto3E1").value;
    let persona1 = new Persona(name, edad, nationality)
    sistema.agregarPersona(persona1)
}

function mostrarPersonasEnTabla( lista ){
    let texto = "";

    for (let i = 0; i < lista.length ; i++) {
        let actual = lista[i];
        texto += `
        <tr>
            <td>${actual.nombre}</td>
            <td>${actual.edad}</td>
            <td>${actual.nacionalidad}</td>
        </tr>`
    }
    document.querySelector("#tabla").innerHTML = texto;
}

function mostrar() {
    let lista = sistema.obtenerPersonas();
    mostrarPersonasEnTabla( lista )
}

function mostrarMayores(){
    let lista = sistema.obtenerPersonasMayoresEdad();
    mostrarPersonasEnTabla( lista )
}
