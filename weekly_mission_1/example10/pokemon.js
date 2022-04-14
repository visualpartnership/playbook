/*
    export default nos permite exportar esta clase e importara

    import MyLogger from './logger.js'
*/

export default class MyPokemon {
    constructor (name) {
        this.name = name
    }

    sayHello (message) {
        console.log(`[${this.name}] te saluda!!!`)
    }
}

/*
exports.sayHello = (message) => {
    console.log(`info: ${message}`)
} 
*/
