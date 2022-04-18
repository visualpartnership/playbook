console.log("Objetos")

console.log("--------------------------------------------")

console.log("Ejemplo 4: Objeto con métodos")

console.log("--------------------------------------------")

const pet = {
    name: "Botas",
    age: 4,
    //Esta es una función que se guarda como propiedad
    sayHello: function(){
        //this.name -> hace referencia a la propiedad del objeto
        console.log(`${this.name} te saluda en español y te dice que tiene ${this.age} años`)
    }
}
console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello()