// Crea un archivo pokemon.js, ahí crea la clase que necesitas para correr el archivo main.js. Deberás exportarla usando ESM.
// Necesitarás usar export default.
// La clase tiene la misma implementación que el ejercicio anterior.
// Finalmente corre: node main.js
// Se ocupa definir un package.json

/*
  export default nos permite exportar esta clase e importara

  import myPokemon from './pokemon.js'
*/

export default class myPokemon {
    constructor(name) {
        this.name = name
    }

    sayHello(message) {
        console.log(`Hola yo soy un ${this.name}, ${message}`)
    }
}