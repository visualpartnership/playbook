class pokemon {
    constructor(name) {

        this.name = name
    }
    info(message) {
        console.log(`[Objeto con nombre: ${this.name}] info: ${message}`)
    }
}
exports.sayHello = (message) => {
    console.log(`info: ${message}`)
}
exports.sayMessage = () => {
    console.log('Heey!')
}