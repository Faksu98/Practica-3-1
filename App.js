const Libro = require("./Libro.js");

const Videojuego = require("./Videojuego.js");

const libro1 = new Libro ();
const libro2 = new Libro ();

console.log (  libro1.comoTeLlamas() );
console.log (  libro2.comoTeLlamas() );

libro1.miNombreEs("Aracnum Ilimitado");
libro2.miNombreEs("Arena Blanca");

console.log (  libro1.comoTeLlamas() );
console.log (  libro2.comoTeLlamas() );

libro2.cambiaTuEstado(false);

libro1.enQueEstadoEstas();
libro2.enQueEstadoEstas();

const juego1 = new Videojuego ();
const juego2 = new Videojuego ();

console.log (  juego1.comoTeLlamas() );
console.log (  juego2.comoTeLlamas() );

juego1.miNombreEs("League of Legends");
juego2.miNombreEs("Doom");

console.log (  juego1.comoTeLlamas() );
console.log (  juego2.comoTeLlamas() );

juego1.cambiarJuego(false);

juego1.tipoDeJuego();
juego2.tipoDeJuego();