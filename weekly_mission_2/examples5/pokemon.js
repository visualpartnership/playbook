/*
Este ejemplo incluye dependencias. En tu línea de comando ve a este proyecto y ejecuta el comando `npm install` para descargar las dependencias, esto creará una carpeta node_modules
*/

export default class Pokemon{
    constructor(name, type, age){
        this.name = name
        this.type = type
        this.age = age
    }
    get getAttacks(){
        return this.attacks
    }
    set setAttacks(attacks){
        return this.attacks = attacks
    }
}
const myPokemon = new Pokemon("Eevee", "Normal", 5)
console.log(myPokemon)