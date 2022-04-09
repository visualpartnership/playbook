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
  
  module.exports = new Logger('DEFAULT') // Instanciación del objeto y se exporta