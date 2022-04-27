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
const s = explorers.map(function(explorers){ return explorers.stack})
console.log(s)
const city = explorers.find((city) => city = "CDMX")
console.log(city.city)
const result_of_reduce = explorers.reduce((exercises_completed) => + exercises_completed, 0)
console.log(result_of_reduce)
const areSomeTrue = explorers.some((exercisesFinished) => exercisesFinished === true)
console.log(areSomeTrue)
const areAllStr = explorers.every((isFinished) => typeof isFinished === 'string')
console.log(areAllStr)