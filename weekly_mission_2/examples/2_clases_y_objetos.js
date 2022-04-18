// Ejemplo 1: Crear una clase vacía
class Person {
}
console.log("Ejemplo 1: Crear una clase vacía")
console.log(Person) // [class Person]

// Ejemplo 2: Crear un objeto a partir de una clase
class Pet {
}
const myPet1 = new Pet() // Puedo crear muchos objetos de la clase Pet
console.log("Ejemplo 2: Crear un objeto a partir de una clase")
console.log(myPet1) // un objeto de la clase Pet

// Ejemplo 3: Instanciar un objeto con atributos
class Student {
  constructor(name, age, subjects){  // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    this.name = name
    this.age = age
    this.subjects = subjects
	}
}
// Crear un objeto de la clase Student (esto se le llama instanciación)
const FerStudent = new Student("Fernando", 33, ["NodeJs", "React", "Git"])
console.log("Ejemplo 3: Instanciar un objeto con atributos")
console.log(Student)
console.log(FerStudent)

// Ejemplo 4: Métodos en los objetos
class Repository {
  constructor(name, author, language, stars){
   this.name = name
   this.author = author
   this.language = language
   this.stars = stars
  }

  getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
    return `Repository ${this.name} from ${this.author} has ${this.stars} stars`
  }
}
console.log("Ejemplo 4: Métodos en los objetos")
const myRepo = new Repository("LaunchX", "Lfer1111", "js", 100)
console.log(myRepo.getInfo())

// Ejemplo 5: Atributos con valores por default
class PullRequest {
  constructor(repo, title, lines_changed){
    this.repo = repo
    this.title = title
    this.lines_changed = lines_changed
    this.status = "OPEN"
    this.dateCreated = new Date() // esto guardará la fecha actual en que se instancia el objeto
	}

  getInfo(){
    return `This ${this.title} is in the repo: ${this.repo} (status: ${this.status}) with ${this.lines_changed} lines changed and was created on ${this.dateCreated}`
  }
}

console.log("Ejemplo 5: Atributos con valores por default, que en este ejemplo son el status y el dateCreated")
const myPR1 = new PullRequest("LaunchX", "Mi Primer PR", 100)
console.log(myPR1.getInfo())

// Puedes instanciar n cantidad de objetos de la misma clase
const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 99)
console.log(myPR2.getInfo())

// Ejemplo 6: Getters para acceder a los atributos del objeto

class Ajolonauta {
  constructor(name, age, stack){
   this.name = name
   this.age = age
   this.stack = stack
   this.exercises_completed = 1
   this.exercises_todo = 99
  }

  // Podemos acceder a los atributos de esta clase
  get getExercisesCompleted() {
		return this.exercises_completed
  }
}

console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
console.log("How many exercises has been completed?")
const woopa = new Ajolonauta("Woopa", 1, ["js", "git"])
// usando el "get" ya no se necesitan poner los "()" del metodo
console.log(woopa.getExercisesCompleted)

// Ejemplo 7: Setters para modificar los atributos del objeto
class MissionCommander {
  constructor(name, mission){
	  this.name = name
	  this.mission = mission
	  this.students = 0
	  this.lives = 0
  }

  get getStudents(){
   return this.students
  }

  get getLives(){
   return this.lives
  }

  set setStudents(students){
    this.students = students
  }

  set setLives(lives){
    this.lives = lives
  }
}

console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
const mcCarloNode = new MissionCommander("Carlo", "NodeJS")
console.log("Valores por default")
console.log(mcCarloNode.getStudents) // 0 por default
console.log(mcCarloNode.getLives)// 0 por default

// actualizamos los atributos por medio de los setters
console.log("valores actualizados gracias a los setters")
mcCarloNode.setStudents = 1000
mcCarloNode.setLives = 6

console.log(mcCarloNode.getStudents) // ya actualizado gracias al anterior setter
console.log(mcCarloNode.getLives)// ya actualizado gracias al anterior setter

// Ejemplo 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto
class Toolbox {
  static getMostUsefulTools(){
    return ["Command line", "git", "Text Editor"]
  }
}

console.log("Ejemplo 8: Métodos static")
// Puedo llamar el método static directamente con el nombre de la clase
console.log(Toolbox.getMostUsefulTools())
// Si intentamos instanciar un objeto, no podremos llamar este método static
//const toolbox = new Toolbox()
//console.log(toolbox.getMostUsefulTools()) // is not a function

/*
HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componentes
*/

// Ejemplo  9: Herencia entre dos clases
class Developer {
  constructor(name, mainLang, stack){
    this.name =  name
    this.mainLang = mainLang
    this.stack = stack
  }

  get getName() {
		return this.name
	}
}

console.log("Ejemplo  9: Herencia entre dos clases")
const carloDev = new Developer("Carlo", "js", ["elixir", "groovy", "lisp"])
console.log(carloDev)

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class LaunchXStudent extends Developer{
}

const ferLaunchXDev = new LaunchXStudent("Fernando", "js", ["React", "NodeJS", "MySQL"])
console.log(ferLaunchXDev)
console.log(ferLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija

// Ejemplo 10: Overrinding methods

class Explorer{
  constructor(name, username, mission){
   this.name = name
   this.username = username
   this.mission = mission
  }

  getNameAndUsername(){
   return `Explorer ${this. name}, username: ${this.username}`
  }
}

class Viajero extends Explorer {
  constructor(name, username, mission, cycle){
    super(name, username, mission) // SUPER nos ayudará a llamar el constructor padre
    this.cycle = cycle // Agregamos este atributo de la clase Viajero, es exclusiva de esta clase y no de la clase padre
  }

  getGeneralInfo(){
    let nameAndUsername = this.getNameAndUsername() // llamamos el método de la clase padre
    // nameAndUsername  es una variable de esta función, no necesitas usar this para referenciarla.
    return `${nameAndUsername}, Ciclo ${this.cycle}`
  }
}

const viajero1 = new Viajero("Fernando", "LaunchX", "Node JS", "Abril 2022")
console.log("Ejemplo 10: Overrinding methods")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) // Método de la clase padre
console.log(viajero1.getGeneralInfo()) // Método de la clase hija