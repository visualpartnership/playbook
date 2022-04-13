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

explorers.forEach(i=>console.log(i.name))
explorers.forEach(i=>console.log(i.stack))

console.log("\n");
const lista=explorers.map(function(explorers){
    return explorers.stack;
})
console.log(lista)



console.log("\n")
console.log("Explorers con js")
const Valjs=explorers.filter(function(explorers){
    if(explorers.stack.includes('js')){
        return explorers.name;
    }
})
//const Valjs=lista.filter((stack)=>stack.includes('js'))
console.log(Valjs)

console.log("\n")
console.log("Explorers de la CDMX")
const CDMX=explorers.find(function(explorers){
    if(explorers=>explorers=="CDMX"){
        return explorers
    }
})
console.log(CDMX)

console.log("\n")
console.log("Suma de los ejercicios hechos")
const lista_exer=explorers.map(function(explorers){
    return explorers.exercises_completed;
})

const exercises_completed=lista_exer.reduce((acc, element) => acc + element, 0)
console.log(exercises_completed)

console.log("\n")
console.log("Validacion de ejercicios completados")
const ValCom=explorers.some(function(explorers){
    return explorers.missions.frontend.exercisesFinished===true

})

console.log(ValCom)
//AQUI ESTA LO BUENO ARRIBA

console.log("\n")
console.log("Todos los explorers tiene la propiedad de isFinished??")
const AllFin=explorers.every(function(explorers){
    return explorers.missions.onboarding.isFinished===true
})
console.log(AllFin)