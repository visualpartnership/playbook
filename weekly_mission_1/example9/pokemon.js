/*

Crea un archivo pokemon.js, ahí crea la clase que necesitas para correr el archivo main.js. Deberás exportarla usando ESM.
Necesitarás usar export default.
La clase tiene la misma implementación que el ejercicio anterior.
Finalmente corre: node main.js

*/


export default class MyPokemon {
    constructor(name) {
      this.name = name
    }
    sayHello() {
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }

    sayMessage(message) {
        console.log(`Mi pokemon ${this.name} dice: ${message}`)
    }  

  }
