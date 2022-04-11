class Logger {
    constructor(name) {
        this.count = 0;
        this.name = name;
    }

    log(message){
        this.count++;
        console.log('[' + this.name + '] ' + message)
    }
}

module.exports = new Logger('DEFAULT'); //Objeto instanciado y creado
module.exports.Logger = Logger; //Definición de la clase