class Logger {
    constructor (name) {
      this.name = name
    }
  
    sayHello(){
      console.log('Mi pokemon ' + this.name + ' te saluda')
    }

    sayMessage(msj){
        console.log('Mi pokemon ' + this.name + ' dice: ' + msj)
    }
}

module.exports = Logger;