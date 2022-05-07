<<<<<<< HEAD
class Logger {
  constructor(name){
    // Al crear este objeto se guardarán estos valores
    this.count = 0
    this.name = name
  }

  log(message) {
    this.count++ // se aumenta el contador interno al llamar este método
    console.log('[' + this.name + '] ' + message)
  }
}

=======
class Logger {
  constructor(name){
    // Al crear este objeto se guardarán estos valores
    this.count = 0
    this.name = name
  }

  log(message) {
    this.count++ // se aumenta el contador interno al llamar este método
    console.log('[' + this.name + '] ' + message)
  }
}

>>>>>>> 76940b6beec1b41b0df99462f13db7ad0de64494
module.exports = new Logger('DEFAULT') // Instanciación del objeto y se exporta