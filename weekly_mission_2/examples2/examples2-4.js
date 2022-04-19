console.log("Clases y objetos")

console.log("----------------------------------------------")

console.log("Ejemplo 4: Métodos en los objetos")

console.log("----------------------------------------------")

class Repository{
    constructor(name, author, languaje, stars){
        this.name = name
        this.author = author
        this.languaje = languaje
        this.stars = stars
    }
    getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
        return `Repository ${this.name} has ${this.stars} stars`
    }
}
console.log("Ejemplo 4: Métodos en los objetos")
const myRepo = new Repository("introJS", "GloriaCoralCerecedo", "js", 10)
console.log(myRepo.getInfo())
//console.log(getInfo()) => ReferenceError: getInfo is not defined