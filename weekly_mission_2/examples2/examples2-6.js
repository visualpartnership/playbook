console.log("Clases y objetos")

console.log("----------------------------------------------")

console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")

console.log("----------------------------------------------")

class Ajolonauta {
    constructor (name, age, stack){
        this.name = name
        this.age = age
        this.stack = stack
        this.exercises_completed = 0
        this.exercise_todo = 99
    }
     // Podemos acceder a los atributos de esta clase
     get getExercisesCompleted(){
         return this.exercises_completed
     }
}
console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
const woopa = new Ajolonauta("Woppa", 1, [])
console.log(woopa.getExercisesCompleted)
console.log(woopa)  
/*Ajolonauta {
  name: 'Woppa',
  age: 1,
  stack: [],
  exercises_completed: 0,
  exercise_todo: 99
}*/