const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

console.log(explorers)

console.log("***Ejercicio 2, punto 1***")
/* Imprime el nombre (propiedad name) 
de cada explorer en la lista, usa FOR EACH*/
console.log("********************************************")
explorers.forEach(nameExplorer => console.log(nameExplorer.name))
console.log("--------------------------------------------")

console.log("***Ejercicio 2, punto 2***")
/*Imprime el stack de cada explorer, usa FOR EACH*/
console.log("********************************************")
explorers.forEach(stackExplorer => console.log(stackExplorer.stack))
console.log("--------------------------------------------")

console.log("***Ejercicio 2, punto 3***")
/*Crea una nueva lista con las listas de stacks 
de cada explorer, usa MAP*/
console.log("********************************************")
const listStackExplorer = explorers.map(stackExplorer => stackExplorer.stack)
console.log(listStackExplorer)
console.log("--------------------------------------------")

console.log("***Ejercicio 2, punto 4***")
/*Obtén la lista de explorers que tengan en su stack "js", 
usa FILTER (para validar un elemento en un lista se usa 
el método includes)*/
console.log("********************************************")
const filterStackExplorer = explorers.filter(stackExplorer => stackExplorer.stack.includes('js'))
console.log(filterStackExplorer)
console.log("--------------------------------------------")

console.log("***Ejercicio 2, punto 5***")
/*Busca el primer explorer que sea de la CDMX, usa FIND*/
console.log("********************************************")
// const findExplorer = explorers.find(firstExplorer => firstExplorer.city.includes('CDMX'))
const findExplorer = explorers.find(firstExplorer => firstExplorer.city === "CDMX")
console.log(findExplorer)
console.log("--------------------------------------------")

console.log("***Ejercicio 2, punto 6***")
/*Obtén la suma de todos los exercises_completed, usa REDUCE*/
console.log("********************************************")
const resultExercises_completed = explorers.reduce((acc, exercise) => acc + exercise.exercises_completed, 0)
console.log("La suma de todos los ejercicios completados es: " + resultExercises_completed)
console.log("--------------------------------------------")

console.log("***Ejercicio 2, punto 7***")
/*Obtén la validación si al menos uno de los explorers 
tiene la propiedad exercisesFinished en frontend como true, 
usa SOME*/
console.log("********************************************")
const validateExplorer = explorers.some((explorer) => explorer.missions.onboarding.exercisesFinished === true)
const validateExplorer0 = explorers.some((explorer) => explorer.missions.frontend.exercisesFinished === true)
console.log("Onboarding: " + validateExplorer + " Frontend: " + validateExplorer0)
console.log("--------------------------------------------")
