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
   ];
explorers.forEach(e => console.log(e.name))
explorers.forEach(e => console.log(e.stack))
const s = explorers.map(function(explorers){return explorers.stack})
console.log(s)
const js = explorers.filter(function(j){return j.stack.includes("js")})
console.log(js)
const city = explorers.find(function(city){return city = "CDMX"})
console.log(city)
const total = explorers.reduce((acc, suma) => acc + suma.exercises_completed, 0)
console.log(total)
const verdad = explorers.some((final) => final.frontend = true)
console.log(verdad)
const validar = explorers.every((f) => typeof f.onboarding === 'true')
console.log(+ validar)