export default class Pok {
    constructor (Pokemon) {
      this.Pokemon = Pokemon
    }
    sayHello(Message){
        console.sayHello(`[${this.Pokemon}] ${Message}`)
    }

}