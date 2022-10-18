class Libro {

    Nombre = "No tengo nombre";
    Estado = true;

    /**
     * Verifica en que estado se encuentra el Libro
     */
    enQueEstadoEstas(){
        if(this.Estado){
            console.log ("Soy nuevo y estoy fresco cual lechuga");
        }else{
            console.log ("Ya estoy usando, pero no me abandones :,c");
        }
    }

    /**
     * Cambia el estado del Libro
     * @param {boolean} nuevoEstado para el Libro
     */
    cambiaTuEstado(nuevoEstado){
        this.Estado = nuevoEstado;  
    }

    /**
     * Devuelve el nombre del Libro
     * @returns el nombre del Libro
     */
    comoTeLlamas(){
        return "Mi nombre es: " + this.Nombre;
    }

    /**
     * Cambia el nombre del Libro
     * @param {String} nuevoNombre Para el Libro
     */
    miNombreEs(nuevoNombre){
        this.Nombre = nuevoNombre;
    }

} 


module.exports = Libro;