const Libro = require("./Libro.js");

const Libro1 = new Libro ();
const Libro2 = new Libro ();

console.log (  Libro1.comoTeLlamas() );
console.log (  Libro2.comoTeLlamas() );

Libro1.miNombreEs("Aracnum Ilimitado");
Libro2.miNombreEs("Arena Blanca");

console.log (  Libro1.comoTeLlamas() );
console.log (  Libro2.comoTeLlamas() );

Libro2.cambiaTuEstado(false);

Libro1.enQueEstadoEstas();
Libro2.enQueEstadoEstas();