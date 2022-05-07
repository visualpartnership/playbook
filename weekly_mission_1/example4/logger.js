<<<<<<< HEAD
class Logger {
  constructor(name) {
    // this es una variable para referenciar el valor del contexto local de esta clase
    this.name = name // Estás variables se le conocen como atributos
  }

  // método
  // this.name es la variable que se guarda en el contexto local
  // message es una variable que se le pasa al ejecutar este método
  info (message) {
    console.log(`[Objeto con nombre: ${this.name}] info: ${message}`)
  }

  // método
  verbose (message) {
    console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
  }
}

// Esta clase se exporta en este módulo
=======
class Logger {
  constructor(name) {
    // this es una variable para referenciar el valor del contexto local de esta clase
    this.name = name // Estás variables se le conocen como atributos
  }

  // método
  // this.name es la variable que se guarda en el contexto local
  // message es una variable que se le pasa al ejecutar este método
  info (message) {
    console.log(`[Objeto con nombre: ${this.name}] info: ${message}`)
  }

  // método
  verbose (message) {
    console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
  }
}

// Esta clase se exporta en este módulo
>>>>>>> 76940b6beec1b41b0df99462f13db7ad0de64494
module.exports = Logger