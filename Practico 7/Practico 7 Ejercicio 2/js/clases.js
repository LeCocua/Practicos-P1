class Sistema{
    constructor(){
        this.peliculas = [];
    };

    agregarMovie( unaPelicula ){
        this.peliculas.push( unaPelicula );
    }

    obtenerListado(){
        return this.peliculas;
    };

    existePelicula( unaPelicula ){
        let existe = false;
        for(i=0; i < this.peliculas.length && !existe; i++){
            let aux = this.peliculas[i];
            if(aux.pelicula === unaPelicula){
                existe = true;
            }
        }
        return existe;
    }

    cantidadVotos(){
        return this.contador;
    }
};

class Movie {
    constructor(unaPelicula, unAnho, unGenero, unPuntaje){
        this.pelicula = unaPelicula;
        this.anho = unAnho;
        this.genero = unGenero;
        this.puntos = unPuntaje;
        this.contador = 0;
    };
};