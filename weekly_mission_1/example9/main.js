const Pokemon = require('./pokemon')

const pikachu = new Pokemon("pikachu")
const bulbasaur = new Pokemon("bulbasaur")
const squirtle = new Pokemon("squirtle")
const charmander = new Pokemon("charmander")

pikachu.sayHello()
pikachu.sayMessage("Heey!")

bulbasaur.sayHello()
bulbasaur.sayMessage("Heey!")

charmander.sayHello()
charmander.sayMessage("Heey!")

squirtle.sayHello()
squirtle.sayMessage("Heey!")

$ node main.js

Mi pokemon pikachu te saluda!!!
Mi pokemon pikachu dice: Heey!
Mi pokemon bulbasaur te saluda!!!
Mi pokemon bulbasaur dice: Heey!
Mi pokemon charmander te saluda!!!
Mi pokemon charmander dice: Heey!
Mi pokemon squirtle te saluda!!!
Mi pokemon squirtle dice: Heey!
