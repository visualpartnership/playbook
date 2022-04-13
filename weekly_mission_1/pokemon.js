class Pokemon {
    constructor(name) {
      this.name = name; 
    }
    
    sayHello() {
      console.log(`Hola soy ${this.name}`);
    }


    sayMessage(message) {
      console.log(`${this.name} dice: ${message}`);
    }
}
  module.exports = Pokemon;