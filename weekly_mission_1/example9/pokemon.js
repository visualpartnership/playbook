class Pokemon{
    constructor(name){
        this.name = name
    }
    sayHello(){
        console.log(`Mi pokemon ${this.name} te saluda!!!`);
    }
    sayMessage(poke){
        console.log(`Mi pokemon ${this.name} dice: ${poke}!`);
    }
}
module.exports = Pokemon;