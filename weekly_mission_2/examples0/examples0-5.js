console.log("Objetos")

console.log("--------------------------------------------")

console.log("Ejemplo 5: Objeto con método que recibe párametros")

console.log("--------------------------------------------")

const myPet = {
    name: "Woopa",
    sayHelloMyPet: function(yourPet, yourAge){
        console.log(`${this.name} say's hello to ${yourPet} of ${yourAge} years`)
    }
}
console.log("Ejemplo 5: Objeto con método que recibe párametros")
myPet.sayHelloMyPet("Botas", 4)