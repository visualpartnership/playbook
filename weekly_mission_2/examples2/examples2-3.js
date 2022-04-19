console.log("Clases y objetos")

console.log("----------------------------------------------")

console.log("Ejemplo 3: Instanciar un objeto con atributos")

console.log("----------------------------------------------")

class Student {
    // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    constructor(name, age, subjects){
        this.name = name
        this.age = age
        this.subjects = subjects
    }
}
// Crear un objeto de la clase Student (esto se le llama instanciación)
const gloriaStudent = new Student("Gloria", 23, ["NodeJs", "Python"])
console.log("Ejemplo 3: Instanciar un objeto con atributos")
console.log(gloriaStudent)