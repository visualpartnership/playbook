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
        },
      },
      

    }
   ]

  
//Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH

explorers.forEach((elemento) => console.log("Nombre: " + elemento.name))

//Imprime el stack de cada explorer, usa FOR EACH

explorers.forEach((elemento) => console.log("Todo sus stack: " + elemento.name + " " + elemento.stack))

//+++ imprime stack sin noombre duda+++ Crea una nueva lista con las listas de stacks de cada explorer, usa MAP

const lista = explorers.map(function(list){ return list.stack })
explorers.forEach((elemento) => console.log("Nombre: " + elemento.name + " " + lista))



//Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)

const v2 = explorers.filter((x) =>
x.stack.includes("js")

)
v2.forEach(x => console.log("Tiene stack JS: " + x.name));

//Busca el primer explorer que sea de la CDMX, usa FIND

const v3 = explorers.find(x => {return x.city === "CDMX"})
console.log("Primer resultado CDMX: " + v3.name)

//Obtén la suma de todos los exercises_completed, usa REDUCE

const v4 = explorers.reduce((acc, e ) => { return acc + e,0})
console.log(v4)
//Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
//Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.