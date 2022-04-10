/*
Crea el archivo pokemon.js. 
Crea una clase Pokemon, exportala usando CommonJS, 
de tal forma que pueda usarse como se indica previamente.

Crea la clase.
Crea un constructor que permita recibir un nombre.
Crea la función sayHello().
Crea la función sayMessage().
Exporta la clase para que pueda ser importada en el archivo main.js.
*/


  class Pokemon {
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

  module.exports = Pokemon
