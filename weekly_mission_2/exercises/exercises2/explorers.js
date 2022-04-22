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

console.log("***Ejercicio 2, punto 2***")

