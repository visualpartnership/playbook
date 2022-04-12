class Logger{
    constructor(name){
        // this es una variable para referenciar el valor del contexto local de esta clase
        this.name = name; //Atributo
    }

    //método
    info(message){
        console.log(`[Objeto con nombre: ${this.name}] info: ${message}`)
    }

    verbose(message){
        console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
    }
}

// Esta clase se exporta en este módulo
module.exports = Logger;