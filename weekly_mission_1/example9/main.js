const Pokemon  = require('./pokemon.js');

const pikachu = new Pokemon('pikachu');
const bulbasaur = new Pokemon('bulbasur');
const squirtle = new Pokemon('squirtle');
const charmander = new Pokemon('charmander');

pikachu.sayHello();
pikachu.sayMessage('Hey');

console.log();

bulbasaur.sayHello()
bulbasaur.sayMessage("Heey")

console.log();

charmander.sayHello()
charmander.sayMessage("Heey")

console.log();

squirtle.sayHello()
squirtle.sayMessage("Heey")