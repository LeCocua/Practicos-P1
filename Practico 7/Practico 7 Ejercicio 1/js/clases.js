class Sistema {
    constructor(){
        this.personas = [];
    }
    /*es conveniente que el push lo haga dentro de la clase Sistema.
    Dentro de las responsabilidades de la clase "sistema" es la de almacenar los datos de la persona. 
    Para eso tambien se crea el this.presonas
    */
    agregarPersona( unaPersona ){
        this.personas.push(unaPersona);
    }

    obtenerPersonas(){
        return this.personas;
    }

    obtenerPromedios(){
        let suma = 0;
        for ( i = 0 ; i < this.personas.length ; i++){
            let actual = this.personas[i];
            suma += actual.edad;
        }
        let resp = 0; 
        if(this.personas.length !==0){
            resp = suma/this.personas.length;
        }
        return resp;
    }

    obtenerPersonasMayoresEdad(){
        let lista = [];
        for ( i = 0 ; i < this.personas.length ; i++){
            let actual = this.personas[i];
            if (actual >= 18){
                lista.push(actual)
            }
        }
        return lista;
    }
}

class Persona{
    constructor(unNombre, unaEdad, unaNacionalidad){
        this.nombre = unNombre;
        this.edad = unaEdad;
        this.nacionalidad = unaNacionalidad;
    };
};
