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

explorers.forEach(explorer=>console.log(explorer.name+' '+explorer.stack));
// explorers.forEach(explorer=>console.log(explorer.stack));

const maped=explorers.map(explorer=>explorer.stack);
console.log(maped)

const include=explorers.filter(explorer=>explorer.stack.includes('js'));
console.log(include);

const finder= explorers.find(explorer=>explorer.city.includes('CDMX'));
const finder2= explorers.find(explorer=>explorer.city=='CDMX');
console.log(finder)
console.log(finder2)

const reducer= explorers.reduce((acc,explorer)=>acc + explorer.exercises_completed,0);
console.log(reducer);

const someWhere= explorers.some(explorer=>explorer.missions.frontend.exercisesFinished=== true);
console.log(someWhere);

const everyone= explorers.every(explorer=>explorer.missions.onboarding.exercisesFinished===true);
console.log(everyone);