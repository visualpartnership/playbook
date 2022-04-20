console.log("Clases y objetos")

console.log("----------------------------------------------")

console.log("Ejemplo 9: Herencia entre dos clases")

console.log("----------------------------------------------")

/*
HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componentes
*/

class Developer{
    constructor (name, mainLang, stack){
        this.name = name
        this.mainLang = mainLang
        this.stack = stack
    }
    get getName(){
        return this.name
    }
}
console.log("Ejemplo  9: Herencia entre dos clases")
const gloriaDev = new Developer("Gloria", "js", ["C#", "Java", "C++"])
console.log(gloriaDev)
// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class LaunchXStudent extends Developer{

}
const gloriaLauchXDev = new LaunchXStudent("Gloria", "js", ["C#", "Java", "C++"])
console.log(gloriaLauchXDev)
console.log(gloriaLauchXDev.getName) // getter de la clase padre rehusada en la clase hija
