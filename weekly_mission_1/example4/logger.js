class Logger {
  constructor(name) {
    // this es una variable para referenciar el valor del contexto local de esta clase
    this.name = name; //Atributo
  }

  //Método
  // this.name es la variable que se guarda en el contexto local
  // message es una variable que se le pasa al ejecutar este método

  info(message){
      console.log(`[Objeto con nombre: ${this.name}]. Info: ${message}`)
  }

  //Método

  verbose(message){
    console.log(`[Objeto con nombre: ${this.name}]. Info: ${message}`)
  }
}

module.exports = Logger;