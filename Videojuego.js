class Videojuego {

    nombre = "No tengo nombre";
    estado = true;

    /**
     * Verifica en que estado se encuentra el Libro
     */
    tipoDeJuego(){
        if(this.estado){
            console.log ("Soy un MOBA");
        }else{
            console.log ("Soy un shooter");
        }
    }

    /**
     * Cambia el tipo de juego
     * @param {boolean} nuevoEstado para el Juego
     */
    cambiarJuego(nuevoEstado){
        this.estado = nuevoEstado;  
    }

    /**
     * Devuelve el nombre del Libro
     * @returns el nombre del Libro
     */
    comoTeLlamas(){
        return "Mi nombre es: " + this.nombre;
    }

    /**
     * Cambia el nombre del Libro
     * @param {String} nuevoNombre Para el Libro
     */
    miNombreEs(nuevoNombre){
        this.nombre = nuevoNombre;
    }

} 


module.exports = Videojuego;